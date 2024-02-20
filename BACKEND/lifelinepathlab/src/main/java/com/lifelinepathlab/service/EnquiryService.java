package com.lifelinepathlab.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.Enquiry;
import com.lifelinepathlab.repository.EnquiryRepository;

@Service
public class EnquiryService {
	
	@Autowired
	private EnquiryRepository enquiryRepository;
	
	public List<Enquiry> getAllData(){
		return enquiryRepository.findAll();
	}
	
	public Enquiry getDataById(int id) {
		Enquiry enquiry =  enquiryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Enquiry does not exits with Enquiry Id: ",id));
		return enquiry;
	}
	
	public void addEnquiry(Enquiry enquiry) {
		enquiryRepository.save(enquiry);
	}
	public void deleteEnquiry(int id) {
		Enquiry enquiry =  enquiryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Enquiry does not exits with Enquiry Id: ",id));
		enquiryRepository.delete(enquiry);
	}
}
