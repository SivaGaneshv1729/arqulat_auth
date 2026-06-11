package com.arqulat.auth.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
	private UUID id;
	private String email;
	private String name;
	// password is intentionally excluded — never expose credentials to the client
}
