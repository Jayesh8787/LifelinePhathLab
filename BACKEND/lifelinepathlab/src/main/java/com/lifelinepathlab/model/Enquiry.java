package com.lifelinepathlab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Enquiry {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String contactNO;
	private String email;
	private String message;
	
	public Enquiry() {
	}
	
	
	
	public Enquiry(int id, String name, String contactNO, String email, String message) {
		super();
		this.id = id;
		this.name = name;
		this.contactNO = contactNO;
		this.email = email;
		this.message = message;
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNO() {
		return contactNO;
	}
	public void setContactNO(String contactNO) {
		this.contactNO = contactNO;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Enquiry [id=" + id + ", name=" + name + ", contactNO=" + contactNO + ", email=" + email + ", message="
				+ message + "]";
	}
	
	
	
}
