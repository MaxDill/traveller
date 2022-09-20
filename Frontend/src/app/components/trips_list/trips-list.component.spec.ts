import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tripsListComponent } from './trips-list.component';

describe('DashboardComponent', () => {
  let component: tripsListComponent;
  let fixture: ComponentFixture<tripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tripsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
