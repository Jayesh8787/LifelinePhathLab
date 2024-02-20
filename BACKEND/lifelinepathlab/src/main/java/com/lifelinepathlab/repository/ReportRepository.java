package com.lifelinepathlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lifelinepathlab.model.Report;

public interface ReportRepository extends JpaRepository<Report, Integer>{

}
