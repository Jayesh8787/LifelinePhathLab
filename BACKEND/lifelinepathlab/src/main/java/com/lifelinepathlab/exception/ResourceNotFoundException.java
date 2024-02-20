package com.lifelinepathlab.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	
	private int id;
	
	public ResourceNotFoundException(String msg, int id) {
		super(msg);
		this.id=id;
	}
	
	@Override 
	public String getMessage() {
		String msg = super.getMessage();
		String finalMessage = msg + "===>" + id;
		return finalMessage;
	}

}
