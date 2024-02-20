package com.lifelinepathlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.model.User;
import com.lifelinepathlab.repository.ClientFeedbackRepository;

@Service
public class ClientFeedbackService {
	@Autowired
	ClientFeedbackRepository clientFeedbackRepositoryRef;
	
	public void addClientFeedback(ClientFeedback clientFeedback) {
		clientFeedbackRepositoryRef.save(clientFeedback);
	}

	public List<ClientFeedback> getAllFeedbacks() {
		List<ClientFeedback> allFeedbacks = clientFeedbackRepositoryRef.findAll();
		return allFeedbacks;
	}

	public ClientFeedback getFeedbackById(int feedbackId) {
		ClientFeedback clientFeedback = clientFeedbackRepositoryRef.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("ClientFeedback not available with this Feedback Id: ", feedbackId));
		return clientFeedback;
	}

	public void deleteFeedback(int feedbackId) {
		ClientFeedback clientFeedback = clientFeedbackRepositoryRef.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("ClientFeedback not available with this Feedback Id: ", feedbackId));
		clientFeedbackRepositoryRef.delete(clientFeedback);
	}
	
	public void updateFeedback(int feedbackId) {
		ClientFeedback clientFeedback = clientFeedbackRepositoryRef.findById(feedbackId).orElseThrow(()-> new ResourceNotFoundException("Client Feedback does not exits with Feedback Id: ", feedbackId));
		clientFeedback.setDisplayToClient("Y");
		clientFeedbackRepositoryRef.save(clientFeedback);

	}
	
    public List<ClientFeedback> getFeedbacksForClient() {
    	List<ClientFeedback> clientFeedbacks = clientFeedbackRepositoryRef.findByDisplayToClient("Y");
        return clientFeedbacks;
    }

}
