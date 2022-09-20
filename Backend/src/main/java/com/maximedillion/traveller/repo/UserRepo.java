package com.maximedillion.traveller.repo;

import com.maximedillion.traveller.domain.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);

}
