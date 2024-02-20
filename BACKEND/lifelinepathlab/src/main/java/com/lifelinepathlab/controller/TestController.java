package com.lifelinepathlab.controller;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.Test;
import com.lifelinepathlab.service.TestService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Map;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/tests")
public class TestController {

    @Autowired
    private TestService testService;

    @PostMapping("/create")
    public void createTest(@RequestParam String testName,
                           @RequestParam String testType,
                           @RequestParam String testDescription,
                           @RequestParam int actualPrice,
                           @RequestParam int discount,
                           @RequestParam int finalPrice,
                           @RequestParam("photoFile") MultipartFile photoFile) throws IOException {
        testService.createTest(testName, testType, testDescription, actualPrice, discount, finalPrice, photoFile);
    }

    @GetMapping("/all/")
    public List<Test> getAllTests() {
        return testService.getAllTests();
    }

    @GetMapping("/{id}")
    public Test getTestById(@PathVariable int id) {
        return testService.getTestById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Test not found with id: " , id));
    }

    @GetMapping("/testName/{name}")
    public Test getTestByName(@PathVariable String name) {
        return testService.getByName(name);
    }
    
    @PutMapping("/{id}")
    public void updateTest(@PathVariable int id,
                           @RequestParam String testName,
                           @RequestParam String testType,
                           @RequestParam String testDescription,
                           @RequestParam int actualPrice,
                           @RequestParam int discount,
                           @RequestParam int finalPrice,
                           @RequestParam(required = false) MultipartFile photoFile) throws IOException {
        testService.updateTest(id, testName, testType, testDescription, actualPrice, discount, finalPrice, photoFile);
    }

    @DeleteMapping("/{id}")
    public void deleteTest(@PathVariable int id) {
        testService.deleteTest(id);
    }
    
    @GetMapping("/all/{type}")
    public List<Test> getByTestType(@PathVariable("type") String type){
    	return testService.getByTypeName(type);
    }
    
    @GetMapping("/TestType")
    public List<String> getTestTypes(){
    	return testService.getDistinctTestTypes();
    }
    
    @GetMapping("/bestOffers")
    public ResponseEntity<List<Test>> getBestOffers(){
    	List <Test> bestOffers=  testService.getBestOffers();
    	return ResponseEntity.ok(bestOffers);
    }
     

//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler({ FileStorageException.class, Exception.class })
//    public Map<String, String> handleException(Exception ex) {
//        return Map.of("error", ex.getMessage());
//    }
}
