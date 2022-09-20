import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import jwt_decode, {JwtPayload} from 'jwt-decode';
import * as moment from 'moment';
import {AppUser} from "../common/app-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<AppUser|undefined> = new BehaviorSubject<AppUser|undefined>(undefined);

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('access_token') !== null) {
      this.whoAmI().subscribe((res) => this.user.next(res));
    }
  }

  register(register: any): Observable<any> {
    return this.httpClient.post<HttpResponse<any>>('http://localhost:8080/api/register', register, {observe: 'response'});
  }

  login(email: string, password: string, callback: Function): void {
    let params: HttpParams = new HttpParams()
      .set('username', email)
      .set('password', password)
    this.httpClient.post('http://localhost:8080/api/login', params, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'), observe: 'response'}).subscribe(res => {
      if (res.status === 200) {
        let tokens: AuthTokens = res.body as AuthTokens;
        this.setSession(tokens, callback);
      }
      else {
        // TODO handle errors
      }
    });
  }

  logout() {
    this.user.next(undefined);
    localStorage.clear();
  }


  whoAmI(): Observable<AppUser> {
    return this.httpClient.get('http://localhost:8080/api/whoami') as Observable<AppUser>;
  }

  setSession(tokens: AuthTokens, callback: Function): void {
    let decodedAccessToken: JwtPayload  = jwt_decode(tokens.access_token);
    const expiresAt = moment().add(decodedAccessToken.exp,'second');
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('access_token_expires_at', JSON.stringify(expiresAt.valueOf()));
    this.whoAmI().subscribe((res) => {
      this.user.next(res);
      callback();
    });
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("access_token_expires_at");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }

}

interface AuthTokens {
  access_token: string,
  refresh_token: string
}
