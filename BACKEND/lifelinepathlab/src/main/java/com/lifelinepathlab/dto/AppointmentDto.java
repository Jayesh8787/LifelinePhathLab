package com.lifelinepathlab.dto;

import org.springframework.web.multipart.MultipartFile;

import com.lifelinepathlab.model.ScheduleAppointment;

import java.time.LocalDateTime;

public class AppointmentDto {
	private int id;
    private String patientName;
    private String contact;
    private String doctorName;
    private LocalDateTime scheduleDate;
    private String address;
    private MultipartFile file;
    private String prescriptionFilePath;

    // Constructors, getters, and setters

    public AppointmentDto() {
    }

    public AppointmentDto(int id, String patientName, String contact, String doctorName, LocalDateTime scheduleDate, String address, MultipartFile file, String prescriptionFilePath) {
        this.id = id;
        this.patientName = patientName;
        this.contact = contact;
        this.doctorName = doctorName;
        this.scheduleDate = scheduleDate;
        this.address = address;
        this.file = file;
        this.prescriptionFilePath = prescriptionFilePath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public LocalDateTime getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDateTime scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public String getPrescriptionFilePath() {
        return prescriptionFilePath;
    }

    public void setPrescriptionFilePath(String prescriptionFilePath) {
        this.prescriptionFilePath = prescriptionFilePath;
    }
    
    public ScheduleAppointment toEntity() {
    	ScheduleAppointment appointment = new ScheduleAppointment();
        appointment.setPatientName(this.patientName);
        appointment.setPatientContactNo(this.contact);
//        appointment.setDoctorName(this.doctorName);
//        appointment.setScheduleDate(this.scheduleDate);
        appointment.setPatientAddress(this.address);
        appointment.setPrescriptionFilePath(this.prescriptionFilePath);
        return appointment;
    }
}
