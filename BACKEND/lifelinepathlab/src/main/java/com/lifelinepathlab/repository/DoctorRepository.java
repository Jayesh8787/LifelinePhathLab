package com.lifelinepathlab.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.ScheduleAppointment;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

	List<Doctor> findByRequestStatus(String requestStatus);
	

//    @Query("SELECT * FROM Doctor d WHERE d.requestStatus = 'A' ")
    List<Doctor> findDoctorsByRequestStatus(String status);

}
