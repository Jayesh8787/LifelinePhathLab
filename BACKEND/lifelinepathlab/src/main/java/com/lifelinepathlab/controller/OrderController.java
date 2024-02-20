package com.lifelinepathlab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.Orders;
import com.lifelinepathlab.service.OrderService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping
	public ResponseEntity<List<Orders>> getAllorders(){
		List<Orders> orders = orderService.getAllOrders();
		return ResponseEntity.ok(orders);
	}
	@GetMapping("{id}")
	public ResponseEntity<Orders> getDoctor(@PathVariable int id) {
		Orders orders = orderService.getOrdersByid(id);
		return ResponseEntity.ok(orders);
	}
	@PostMapping()
	public ResponseEntity<String> addOrder(@RequestBody Orders orders) {
		orderService.addorder(orders);
		return ResponseEntity.ok("Orders added successfully...!!!");
	}
	
	@PutMapping("{id}")
	public ResponseEntity<String> UpdateOrder(@RequestBody Orders orders, @PathVariable int id){
		orderService.updateOrder(orders, id);
		return ResponseEntity.ok("Order update successfully");
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteOrder(@PathVariable int id){
		orderService.deleteOrder(id);
		return ResponseEntity.ok("Order Deleted Successfully");
	}
}
