package com.lifelinepathlab.model;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "AppointmentSchedule")
public class ScheduleAppointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int appointmentId;
	private String patientName;
	private String patientContactNo;
	@ManyToOne
	@JoinColumn(name = "doctorId")
	private Doctor doctor;
	private String patientAddress;
	private Date scheduledTime;
	private String prescriptionFilePath;
	private String status="SCHEDULED";
	

	public ScheduleAppointment() {
		// TODO Auto-generated constructor stub
	}

	public ScheduleAppointment(int appointmentId, String patientName, String patientContactNo, Doctor doctor,
			String patientAddress, Date scheduledTime, String prescriptionFilePath, String status) {
		super();
		this.appointmentId = appointmentId;
		this.patientName = patientName;
		this.patientContactNo = patientContactNo;
		this.doctor = doctor;
		this.patientAddress = patientAddress;
		this.scheduledTime = scheduledTime;
		this.prescriptionFilePath = prescriptionFilePath;
		this.status = status;
	}
	
	public ScheduleAppointment( String patientName, String patientContactNo, Doctor doctor,
			String patientAddress, Date scheduledTime, String prescriptionFilePath) {
		super();
		this.patientName = patientName;
		this.patientContactNo = patientContactNo;
		this.doctor = doctor;
		this.patientAddress = patientAddress;
		this.scheduledTime = scheduledTime;
		this.prescriptionFilePath = prescriptionFilePath;
	}

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getPatientContactNo() {
		return patientContactNo;
	}

	public void setPatientContactNo(String patientContactNo) {
		this.patientContactNo = patientContactNo;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public String getPatientAddress() {
		return patientAddress;
	}

	public void setPatientAddress(String patientAddress) {
		this.patientAddress = patientAddress;
	}

	public Date getScheduledTime() {
		return scheduledTime;
	}

	public void setScheduledTime(Date scheduledTime) {
		this.scheduledTime = scheduledTime;
	}

	public String getPrescriptionFilePath() {
		return prescriptionFilePath;
	}

	public void setPrescriptionFilePath(String prescriptionFilePath) {
		this.prescriptionFilePath = prescriptionFilePath;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "ScheduleAppointment [appointmentId=" + appointmentId + ", patientName=" + patientName
				+ ", patientContactNo=" + patientContactNo + ", doctor=" + doctor + ", patientAddress=" + patientAddress
				+ ", scheduledTime=" + scheduledTime + ", prescriptionFilePath=" + prescriptionFilePath + ", status="
				+ status + "]";
	}

}
