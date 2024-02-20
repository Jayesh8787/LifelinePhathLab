package com.lifelinepathlab.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.service.DoctorService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public ResponseEntity<?> registerDoctor(
            @RequestParam String name,
            @RequestParam String clinicName,
            @RequestParam String address,
            @RequestParam String email,
            @RequestParam String contact,
            @RequestParam String password,
            @RequestParam String specialization,
            @RequestParam int experience,
            @RequestParam("licenseFile") MultipartFile licenseFile) {
        try {
            Doctor savedDoctor = doctorService.saveDoctor(
                name, clinicName, address, email, contact, password, specialization, experience, licenseFile);
            return ResponseEntity.ok(savedDoctor);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error registering doctor");
        }
    }

    @GetMapping("/list")
   // @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return ResponseEntity.ok(doctors);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") int id) {
        Doctor doctor = doctorService.getDoctorById(id);
        return ResponseEntity.ok(doctor);
    }
    
    @GetMapping("/pending")
    public ResponseEntity<List<Doctor>> getAllPendingRequest() {
        List<Doctor> pendingDoctors = doctorService.getAllPendingRequest();
        return ResponseEntity.ok(pendingDoctors);
    }
    
    @GetMapping("/approved")
    public ResponseEntity<List<Doctor>> getAllDistinctDoctors() {
    	List<Doctor> approvedDoctors = doctorService.getAllDistinctDoctors();
        return ResponseEntity.ok(approvedDoctors);
    }
    
    @PutMapping("/request/{id}")
    public ResponseEntity<String> updateRequestStatus(@PathVariable int id) {
        doctorService.updateRequestStatus(id);
        return ResponseEntity.ok("Request Status Updated successfully...!!!");
    }
    
    @PutMapping("/reject/{id}")
    public ResponseEntity<String> rejectDoctorRequest(@PathVariable int id) {
        doctorService.rejectDoctorRequest(id);
        return ResponseEntity.ok("Doctor request rejected...!!!");
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateDoctor(
            @PathVariable("id") int id,
            @RequestParam String name,
            @RequestParam String clinicName,
            @RequestParam String address,
            @RequestParam String email,
            @RequestParam String contact,
            @RequestParam String password,
            @RequestParam String specialization,
            @RequestParam int experience,
            @RequestParam(value = "licenseFile", required = false) MultipartFile licenseFile) {
        try {
            doctorService.updateDoctor(
                id, name, clinicName, address, email, contact, password, specialization, experience, licenseFile);
            return ResponseEntity.ok("Doctor updated successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating doctor");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDoctor(@PathVariable("id") int id) {
        try {
            doctorService.deleteDoctor(id);
            return ResponseEntity.ok("Doctor deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting doctor");
        }
    }
}
