package com.lifelinepathlab.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lifelinepathlab.model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer>{

}
