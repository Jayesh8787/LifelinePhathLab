package com.lifelinepathlab.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.ScheduleAppointment;
import com.lifelinepathlab.service.AppointmentService;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/appointments")
public class ScheduleAppointmentController {

    @Autowired
    private AppointmentService appointmentService;
    
    public static Date convertStringToDate(String dateString) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); // Specify the format of your input date
        return formatter.parse(dateString);
    }

    @PostMapping("/schedule")
    public ResponseEntity<?> scheduleAppointment(@RequestParam("file") MultipartFile file,
                                                 @RequestParam("patientName") String patientName,
                                                 @RequestParam("contact") String contact,
                                                 @RequestParam("address") String address,
                                                 @RequestParam("doctorName") int doctorid,
                                                 @RequestParam("appointmentDate") String appointmentDate
                                                 ) {
        try {
            String fileId = appointmentService.savePrescriptionFile(file);
            Doctor doctor = new Doctor();
            doctor.setDoctorId(doctorid);
//            ScheduleAppointment appointment = new ScheduleAppointment(patientName, contact, address, doctorName, appointmentDate, fileId);
            ScheduleAppointment appointment = new ScheduleAppointment(patientName, contact, doctor, address ,convertStringToDate(appointmentDate), fileId);
            appointmentService.saveAppointment(appointment);
            return ResponseEntity.ok("Appointment scheduled successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error scheduling appointment");
        }
    }

    @GetMapping("/list/")
    public ResponseEntity<List<ScheduleAppointment>> getAllAppointments() {
        List<ScheduleAppointment> appointments = appointmentService.getAllAppointments();	
        return ResponseEntity.ok(appointments);
    }
    
    @GetMapping("/list/{status}")
    public ResponseEntity<List<ScheduleAppointment>> getAllAppointmentsByStatus(@PathVariable ("status") String status) {
        List<ScheduleAppointment> appointments = appointmentService.getAllAppointmentsByStatus(status);	
        return ResponseEntity.ok(appointments);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<ScheduleAppointment> getAppointmentById(@PathVariable("id") int id) {
    	ScheduleAppointment appointment = appointmentService.getAppointmentById(id);
        return ResponseEntity.ok(appointment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAppointment(@PathVariable("id") int id, @RequestBody ScheduleAppointment updatedAppointment) {
        try {
            appointmentService.updateAppointment(id, updatedAppointment);
            return ResponseEntity.ok("Appointment updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating appointment");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable("id") int id) {
        try {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok("Appointment deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting appointment");
        }
    }
}
