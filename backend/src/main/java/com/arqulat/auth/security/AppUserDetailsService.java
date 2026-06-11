package com.arqulat.auth.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.arqulat.auth.model.User;
import com.arqulat.auth.repository.UserRepository;

@Service
public class AppUserDetailsService implements UserDetailsService{

	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public AppUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(username)
					.orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
		
		return new AppUserDetails(user);
	}
	
}
