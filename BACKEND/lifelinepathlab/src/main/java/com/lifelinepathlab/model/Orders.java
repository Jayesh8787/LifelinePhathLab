package com.lifelinepathlab.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	@ManyToMany
    @JoinTable(
            name = "order_tests",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "test_id")
    )
    private List<Test> tests;
	
	private Date date;
	private String status;
	
	public Orders() {
		// TODO Auto-generated constructor stub
	}

	public Orders(int id, User user, List<Test> tests, Date date, String status) {
		super();
		this.id = id;
		this.user = user;
		this.tests = tests;
		this.date = date;
		this.status = status;
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Test> getTests() {
		return tests;
	}

	public void setTests(List<Test> tests) {
		this.tests = tests;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", user=" + user + ", tests=" + tests + ", date=" + date + ", status=" + status
				+ "]";
	}
	
 
	
}
