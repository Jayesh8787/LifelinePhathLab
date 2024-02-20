package com.lifelinepathlab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "DoctorDetails")
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorId;
	private String doctorName;
	private String clinicName;
	private String emailId;
	private String contactNo;
	private String specialization;
	private int experience;
	private String address;
	private String licencePath;
	private String requestStatus="P";
	private String password;

	public Doctor() {
		// TODO Auto-generated constructor stub
	}

	public Doctor(int doctorId, String doctorName, String clinicName, String emailId, String contactNo,
			String specialization, int experience, String address, String licencePath, String requestStatus,
			String password) {
		super();
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.clinicName = clinicName;
		this.emailId = emailId;
		this.contactNo = contactNo;
		this.specialization = specialization;
		this.experience = experience;
		this.address = address;
		this.licencePath = licencePath;
		this.requestStatus = requestStatus;
		this.password = password;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getClinicName() {
		return clinicName;
	}

	public void setClinicName(String clinicName) {
		this.clinicName = clinicName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLicencePath() {
		return licencePath;
	}

	public void setLicencePath(String licencePath) {
		this.licencePath = licencePath;
	}

	public String getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", doctorName=" + doctorName + ", clinicName=" + clinicName
				+ ", emailId=" + emailId + ", contactNo=" + contactNo + ", specialization=" + specialization
				+ ", experience=" + experience + ", address=" + address + ", licencePath=" + licencePath
				+ ", requestStatus=" + requestStatus + ", password=" + password + "]";
	}
	
}
