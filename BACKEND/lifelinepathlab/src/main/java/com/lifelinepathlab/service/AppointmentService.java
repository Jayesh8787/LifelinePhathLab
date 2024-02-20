package com.lifelinepathlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.ScheduleAppointment;
import com.lifelinepathlab.repository.ScheduleAppointmentRepository;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AppointmentService {

	@Autowired
	private ScheduleAppointmentRepository appointmentRepository;

	@Autowired
	private FileStorageService fileStorageService; // Your file storage service implementation

	public String savePrescriptionFile(MultipartFile file) throws IOException {
		// Generate a UUID for the file
		String fileId = UUID.randomUUID().toString();
		// Save the file to the file storage location with the UUID as the filename
		return fileStorageService.storeFile(file, fileId, "prescriptions");
	}

	public void saveAppointment(ScheduleAppointment appointment) {
		appointmentRepository.save(appointment);
	}

	public List<ScheduleAppointment> getAllAppointmentsByStatus(String status) {
		return appointmentRepository.findByStatus(status);
	}
	
	public List<ScheduleAppointment> getAllAppointments() {
		return appointmentRepository.findAll();
	}

	public ScheduleAppointment getAppointmentById(int id) {
		return appointmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Appointment not found with id: ", id));
	}

	public void updateAppointment(int id, ScheduleAppointment updatedAppointment) {
		ScheduleAppointment appointment = getAppointmentById(id);
		appointment.setPatientName(updatedAppointment.getPatientName());
		appointment.setPatientContactNo(updatedAppointment.getPatientContactNo());
		appointment.setPatientAddress(updatedAppointment.getPatientAddress());
//        appointment.setDoctorName(updatedAppointment.getDoctorName());
		appointment.setScheduledTime(updatedAppointment.getScheduledTime());
		appointmentRepository.save(appointment);
	}

	public void deleteAppointment(int id) {
		appointmentRepository.deleteById(id);
	}
	
}
