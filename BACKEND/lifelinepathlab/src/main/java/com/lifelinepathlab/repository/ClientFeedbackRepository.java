package com.lifelinepathlab.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.lifelinepathlab.model.ClientFeedback;

@Repository
public interface ClientFeedbackRepository extends JpaRepository<ClientFeedback, Integer>{

	List<ClientFeedback> findByDisplayToClient(String displayToClient);
	
}
