package com.lifelinepathlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.service.ClientFeedbackService;
import com.lifelinepathlab.validations.Validations;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/feedback")
public class ClientFeedbackController {

	@Autowired
	private Validations validationsRef;
	@Autowired
	ClientFeedbackService clientFeedbackServiceRef;

	// To add a new feedback...
	@PostMapping()
	public ResponseEntity<String>  addClientFeedback(@RequestBody ClientFeedback clientFeedback, BindingResult result) {

		validationsRef.validate(clientFeedback, result);
		if (result.hasErrors()) {
			// Handle validation errors
			String errorMessage = result.getFieldErrors().get(0).getDefaultMessage();
			return ResponseEntity.badRequest().body("Validation error: " + errorMessage);
		}

		clientFeedbackServiceRef.addClientFeedback(clientFeedback);
		return ResponseEntity.ok("Feedback posted successfully...!!!");
	}
	
	// To get all client feedbacks...
	@GetMapping()
	public ResponseEntity<List<ClientFeedback>> getAllFeedbacks() {
		List<ClientFeedback> allFeedbacks = clientFeedbackServiceRef.getAllFeedbacks();
		return ResponseEntity.ok(allFeedbacks);
	}
	
	// To get client feedback by Id...
	@GetMapping("/{feedbackId}")
	public ResponseEntity<ClientFeedback> getFeedbackById(@PathVariable int feedbackId) {
		ClientFeedback clientFeedback = clientFeedbackServiceRef.getFeedbackById(feedbackId);
		return ResponseEntity.ok(clientFeedback);
	}
		
	// To delete the client feedback...
	@DeleteMapping("/{feedbackId}")
	public ResponseEntity<ClientFeedback> deleteFeedback(@PathVariable int feedbackId) {
		clientFeedbackServiceRef.deleteFeedback(feedbackId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/review")
	public ResponseEntity<List<ClientFeedback>> getFeedbacksForClient() {
		List<ClientFeedback> listedFeedbacks = clientFeedbackServiceRef.getFeedbacksForClient();
		return ResponseEntity.ok(listedFeedbacks);
	}
}
