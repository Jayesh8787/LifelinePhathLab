package com.lifelinepathlab.service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.Test;
import com.lifelinepathlab.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Optional;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private FileStorageService fileStorageService;
    
    public String SaveTestFile(MultipartFile file) throws IOException {
        // Generate a UUID for the file
        String fileId = UUID.randomUUID().toString();
        // Save the file to the file storage location with the UUID as the filename
        return fileStorageService.storeFile(file, fileId,"TestImage");
    }
    @Transactional
    public void createTest(String testName, String testType, String testDescription,
                           int actualPrice, int discount, int finalPrice,
                           MultipartFile photoFile) throws IOException {
        // Handle file upload
        String photoFileName = SaveTestFile(photoFile);

        // Create new Test entity
        Test test = new Test();
        test.setTestName(testName);
        test.setTestType(testType);
        test.setTestDescription(testDescription);
        test.setActualPrice(actualPrice);
        test.setDiscount(discount);
        test.setFinalPrice(finalPrice);
        test.setTestImagePath(photoFileName);

        // Save test to database
        testRepository.save(test);
    }

    @Transactional(readOnly = true)
    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Test> getTestById(int id) {
        return testRepository.findById(id);
    }

    @Transactional
    public void updateTest(int id, String testName, String testType, String testDescription,
                           int actualPrice, int discount, int finalPrice,
                           MultipartFile photoFile) throws IOException {
        // Find the existing test
        Test test = testRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Test not found with id: " , id));

        // Update test details
        test.setTestName(testName);
        test.setTestType(testType);
        test.setTestDescription(testDescription);
        test.setActualPrice(actualPrice);
        test.setDiscount(discount);
        test.setFinalPrice(finalPrice);

        // Handle file upload if photoFile is provided
        if (photoFile != null) {
        	String photoFileName = SaveTestFile(photoFile);
            test.setTestImagePath(photoFileName);
        }

        // Save updated test to database
        testRepository.save(test);
    }

    @Transactional
    public void deleteTest(int id) {
        testRepository.deleteById(id);
    }
    
    public List<Test> getByTypeName(String type){
    	return testRepository.findByTestType(type);
    }
    
    public Test getByName(String name) {
    	return testRepository.findByTestName(name);
    }
    
    public List<String> getDistinctTestTypes() {
        return testRepository.findDistinctTestTypes();
    }
    
    public List<Test> getBestOffers() {
        return testRepository.findTop5TestsByBesTDiscount();
    }
}
