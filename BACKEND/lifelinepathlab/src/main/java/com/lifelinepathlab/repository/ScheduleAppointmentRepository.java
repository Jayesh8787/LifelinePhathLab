package com.lifelinepathlab.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.ScheduleAppointment;

@Repository
public interface ScheduleAppointmentRepository extends JpaRepository<ScheduleAppointment, Integer> {

	List<ScheduleAppointment> findByDoctor(Doctor doctor);
	
	List<ScheduleAppointment> findByStatus(String status);
}
