package com.lifelinepathlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import com.lifelinepathlab.model.Enquiry;
import com.lifelinepathlab.service.EnquiryService;
import com.lifelinepathlab.validations.Validations;

@CrossOrigin("*")
@Controller
@RequestMapping("/api/enquiry")
public class EnquiryController {
	@Autowired
	private Validations validationsRef;
	@Autowired
	private EnquiryService enquiryService;
	
	@GetMapping
	public ResponseEntity<List<Enquiry>> getAllData(){
		List<Enquiry> enquiries = enquiryService.getAllData();
		return ResponseEntity.ok(enquiries);
	}
	
	
	@GetMapping("{id}")
	public ResponseEntity<Enquiry> getDataById(@PathVariable int id){
		return ResponseEntity.ok(enquiryService.getDataById(id));
	}
	
	@PostMapping
	public ResponseEntity<String> addEnquiry(@RequestBody Enquiry enquiry, BindingResult result){
		validationsRef.validate(enquiry, result);
		if (result.hasErrors()) {
			// Handle validation errors
			String errorMessage = result.getFieldErrors().get(0).getDefaultMessage();
			return ResponseEntity.badRequest().body("Validation error: " + errorMessage);
		}
		enquiryService.addEnquiry(enquiry);
		return ResponseEntity.ok("Enquiry added successfully...!!!");
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEnquriy(@PathVariable int id){
		enquiryService.deleteEnquiry(id);
		return ResponseEntity.ok("Enquiry Delete successfully");
	}
}
