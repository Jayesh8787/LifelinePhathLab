package com.lifelinepathlab.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.lifelinepathlab.model.Test;

@Repository
public interface TestRepository  extends JpaRepository<Test, Integer>{

	public List<Test> findByTestType(String type);
	
	public Test findByTestName(String name);
	
	@Query("SELECT DISTINCT t.testType FROM Test t")
    List<String> findDistinctTestTypes();
		
	 @Query("SELECT t FROM Test t ORDER BY t.discount DESC LIMIT 5")
	    List<Test> findTop5TestsByBesTDiscount();
}
