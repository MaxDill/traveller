package com.maximedillion.traveller.services;

import com.maximedillion.traveller.domain.AppUser;
import com.maximedillion.traveller.domain.Role;

import java.util.List;

public interface UserService {
    AppUser saveUser(AppUser user);
    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);
    AppUser getUser(String username);
    List<AppUser> getUsers(); // Should use Page to avoid stress when scaling


    AppUser identifyUser(String authorizationHeader);


}
