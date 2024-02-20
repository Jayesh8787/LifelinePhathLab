package com.lifelinepathlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lifelinepathlab.model.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> {

}
