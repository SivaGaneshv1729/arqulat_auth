package com.arqulat.auth.security;

import java.util.Collection;
import java.util.Collections;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.arqulat.auth.model.User;

public class AppUserDetails implements UserDetails{

	private static final long serialVersionUID = 1L;

	private User user;
	
	public AppUserDetails(User user) {
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.emptyList();
	}

	@Override
	public String getPassword() {
		String passwordHash = user.getPasswordHash();
		return passwordHash != null ? passwordHash : "";
	}

	@Override
	public String getUsername() {
		return user.getEmail();
	}
	
	public User getUser() {
		return this.user;
	}
}
