package com.lifelinepathlab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.lifelinepathlab.model.User;
import com.lifelinepathlab.repository.UserRepository;



@Service
public class CustumUserDetailsService implements UserDetailsService{

	@Autowired
	private UserRepository repository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
// load user from database
		User user = repository.findByEmailId(username);
		return user;
	}

}
