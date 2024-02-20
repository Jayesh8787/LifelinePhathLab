package com.lifelinepathlab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="clientFeedback")
public class ClientFeedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedbackId;
	private String clientName;
	private String contactNo;
	private String feedback;
	private String displayToClient="N";
	
	public ClientFeedback() {
		// TODO Auto-generated constructor stub
	}

	public ClientFeedback(int feedbackId, String clientName, String contactNo, String feedback,
			String displayToClient) {
		super();
		this.feedbackId = feedbackId;
		this.clientName = clientName;
		this.contactNo = contactNo;
		this.feedback = feedback;
		this.displayToClient = displayToClient;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public String getDisplayToClient() {
		return displayToClient;
	}

	public void setDisplayToClient(String displayToClient) {
		this.displayToClient = displayToClient;
	}

	@Override
	public String toString() {
		return "ClientFeedback [feedbackId=" + feedbackId + ", clientName=" + clientName + ", contactNo=" + contactNo
				+ ", feedback=" + feedback + ", displayToClient=" + displayToClient + "]";
	}

}
