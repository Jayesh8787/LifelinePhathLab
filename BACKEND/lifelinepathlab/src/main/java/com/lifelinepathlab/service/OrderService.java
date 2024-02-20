package com.lifelinepathlab.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lifelinepathlab.exception.ResourceNotFoundException;
import com.lifelinepathlab.model.Orders;
import com.lifelinepathlab.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	public void addorder(Orders orders) {
		orders.setDate(new Date());
		orders.setStatus("AC");
		orderRepository.save(orders);
	}
	
	public List<Orders> getAllOrders(){
		return orderRepository.findAll();
	}
	
	public Orders getOrdersByid(int id) {
		return orderRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Order does not exits with Order Id: ", id));

	}
	
	public void updateOrder(Orders orders, int id) {
		Orders orders2 = getOrdersByid(id);
		orders2.setStatus(orders.getStatus());
		orders2.setTests(orders.getTests());
		orderRepository.save(orders2);
	}

	
	public void deleteOrder(int id) {
		Orders orders = getOrdersByid(id);
		orderRepository.delete(orders);
	}
}
