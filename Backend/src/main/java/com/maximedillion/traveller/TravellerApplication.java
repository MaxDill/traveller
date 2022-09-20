package com.maximedillion.traveller;

import com.maximedillion.traveller.domain.AppUser;
import com.maximedillion.traveller.domain.Role;
import com.maximedillion.traveller.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class TravellerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravellerApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));

			userService.saveUser(new AppUser(null, "Maxime", "maxdill", "pwd", new ArrayList<Role>()));
			userService.saveUser(new AppUser(null, "Mathilde", "math", "pwd2", new ArrayList<Role>()));
			userService.saveUser(new AppUser(null, "Jean", "jeanmich", "pwd3", new ArrayList<Role>()));

			userService.addRoleToUser("maxdill", "ROLE_USER");
			userService.addRoleToUser("maxdill", "ROLE_ADMIN");
			userService.addRoleToUser("math", "ROLE_USER");
			userService.addRoleToUser("jeanmich", "ROLE_USER");

		};
	}

}
