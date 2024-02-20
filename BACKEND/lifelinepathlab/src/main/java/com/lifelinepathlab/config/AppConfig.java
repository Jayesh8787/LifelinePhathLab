package com.lifelinepathlab.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
class AppConfig {
//	@Bean
//	public UserDetailsService userDetailsService() {
//		UserDetails userDetails = User.builder().username("sanket").password(passwordEncoder().encode("sanket"))
//				.roles("ADMIN").build();
//		UserDetails userDetails2 = User.builder().username("pravin").password(passwordEncoder().encode("pravin"))
//				.roles("ADMIN").build();
//		return new InMemoryUserDetailsManager(userDetails,userDetails2);
//	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
		return builder.getAuthenticationManager();
	}
}