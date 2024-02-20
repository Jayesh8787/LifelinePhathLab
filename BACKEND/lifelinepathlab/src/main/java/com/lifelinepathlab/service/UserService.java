package com.lifelinepathlab.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.model.User;
import com.lifelinepathlab.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepositoryRef;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void addUser(User user) {
		user.setUuid(UUID.randomUUID().toString());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepositoryRef.save(user);
	}
	
	public List<User> getUsers() {
		List<User> users = userRepositoryRef.findAll();
		return users;
	}
	
	public User getUser(int userId) {
		User user = userRepositoryRef.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User does not exits with User Id: ", userId));
		return user;	
	}
		
	public User updateUser(User newUser, int userId) {
		User oldUser = userRepositoryRef.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User does not exits with User Id: ", userId));
			oldUser.setFirstName(newUser.getFirstName());
			oldUser.setLastName(newUser.getLastName());
			oldUser.setEmailId(newUser.getEmailId());
			oldUser.setContactNo(newUser.getContactNo());
			oldUser.setDateOfBirth(newUser.getDateOfBirth());
			oldUser.setGender(newUser.getGender());
			oldUser.setBloodGroup(newUser.getBloodGroup());
			oldUser.setAddress(newUser.getAddress());
			oldUser.setPassword(passwordEncoder.encode(newUser.getPassword()));			
			userRepositoryRef.save(oldUser);
			
			return oldUser;
	}
	
    public List<User> getAdminByRole() {
    	List<User> admins = userRepositoryRef.findByRole("ADMIN");
        return admins;
    }
    
    public List<User> getUsersByRole() {
    	List<User> users = userRepositoryRef.findByRole("USER");
        return users;
    }
	
	public void updateUserRole(int userId) {
		User user=userRepositoryRef.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User does not exits with User Id: ", userId));;
		user.setRole("ADMIN");
		userRepositoryRef.save(user);
	}
	
	public void deleteUser(int userId) {
		User user = userRepositoryRef.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User does not exits with User Id: ", userId));
		userRepositoryRef.delete(user);
	}
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		// load user from 
				User user = userRepositoryRef.findByEmailId(username);
				return user;
			}

}
