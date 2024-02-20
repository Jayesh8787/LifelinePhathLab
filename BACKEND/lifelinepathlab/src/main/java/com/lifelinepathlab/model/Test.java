package com.lifelinepathlab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TestDetails")
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int testId;
	private String testName;
	private String testType;
	private String testDescription;
	private int actualPrice;
	private int discount;
	private int finalPrice;
	private String testImagePath="D:\\LifelinePhathLab\\public\\images\\logo.svg";

	public Test() {
		// TODO Auto-generated constructor stub
	}
	public Test(int testId, String testName, String testType, String testDescription, int actualPrice, int discount,
			int finalPrice, String testImagePath) {
		super();
		this.testId = testId;
		this.testName = testName;
		this.testType = testType;
		this.testDescription = testDescription;
		this.actualPrice = actualPrice;
		this.discount = discount;
		this.finalPrice = finalPrice;
		this.testImagePath = testImagePath;
	}

	public int getTestId() {
		return testId;
	}

	public void setTestId(int testId) {
		this.testId = testId;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getTestType() {
		return testType;
	}

	public void setTestType(String testType) {
		this.testType = testType;
	}

	public String getTestDescription() {
		return testDescription;
	}

	public void setTestDescription(String testDescription) {
		this.testDescription = testDescription;
	}

	public int getActualPrice() {
		return actualPrice;
	}

	public void setActualPrice(int actualPrice) {
		this.actualPrice = actualPrice;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getFinalPrice() {
		return finalPrice;
	}

	public void setFinalPrice(int finalPrice) {
		this.finalPrice = finalPrice;
	}

	public String getTestImagePath() {
		return testImagePath;
	}

	public void setTestImagePath(String testImagePath) {
		this.testImagePath = testImagePath;
	}

	@Override
	public String toString() {
		return "Test [testId=" + testId + ", testName=" + testName + ", testType=" + testType + ", testDescription="
				+ testDescription + ", actualPrice=" + actualPrice + ", discount=" + discount + ", finalPrice="
				+ finalPrice + ", testImagePath=" + testImagePath + "]";
	}

}
