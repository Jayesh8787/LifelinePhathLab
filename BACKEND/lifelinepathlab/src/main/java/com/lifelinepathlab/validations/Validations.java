package com.lifelinepathlab.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import com.lifelinepathlab.model.ClientFeedback;
import com.lifelinepathlab.model.Doctor;
import com.lifelinepathlab.model.Enquiry;
import com.lifelinepathlab.model.ScheduleAppointment;
import com.lifelinepathlab.model.Test;
import com.lifelinepathlab.model.User;

@Component
public class Validations implements Validator {

	@Override
	/*
	 * This method is used to declare which class or classes can be validated by
	 * this validator. --->Class<?> obj represents the class that is being tested
	 * for support.
	 */
	public boolean supports(Class<?> obj) {

		return User.class.equals(obj) || Doctor.class.equals(obj) || ScheduleAppointment.class.equals(obj)
				|| ClientFeedback.class.equals(obj) || Test.class.equals(obj) || Enquiry.class.equals(obj);

	}

	/* Validation logic is written here */
	@Override
	public void validate(Object target, Errors errors) {
		if (target instanceof User) {
			validateUserDetails((User) target, errors);
		} else if (target instanceof Doctor) {
			ValidateDoctorDetails((Doctor) target, errors);
		} else if (target instanceof ScheduleAppointment) {
			ValidateAppointmentDetails((ScheduleAppointment) target, errors);

		} else if (target instanceof ClientFeedback) {
			ValidateFeedbackDetails((ClientFeedback) target, errors);
		} else if (target instanceof Test) {
			ValidateTestDetails((Test) target, errors);

		} else if (target instanceof Enquiry) {

		} else if (target instanceof Enquiry) {

			validateEnquiry((Enquiry) target, errors);
		}
	}

	/* User Details Validation logic starts here */
	public void validateUserDetails(User user, Errors errors) {
		/* First name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstName", "NotEmpty", "First Name cannot be empty");
		if (!user.getFirstName().matches("^[A-Za-z]+$")) {
			errors.rejectValue("firstName", "InvalidFormat",
					"Invalid First Name:First Name should contain only characters.");
		}

		/* Last name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastName", "NotEmpty", "Last Name cannot be empty");
		if (!user.getLastName().matches("^[A-Za-z]+$")) {
			errors.rejectValue("lastName", "InvalidFormat",
					"Invalid Last Name:Last Name should contain only characters.");
		}

		/* E-Mail Id validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "emailId", "NotEmpty", "E-mail Id cannot be empty");
		if (!user.getEmailId().matches(
				"^([a-zA-Z0-9]([a-zA-Z0-9.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\\-]+)?[a-zA-Z0-9])\\.([a-zA-Z]{2,})(\\.[a-zA-Z]{2,})?$")) {
			errors.rejectValue("emailId", "InvalidFormat", "Invalid E-Mail Address.");
		}

		/* Mobile number validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contactNo", "NotEmpty", "Mobile number cannot be empty");
		if (!user.getContactNo().matches("^[6-9][0-9]{9}$")) {
			errors.rejectValue("contactNo", "InvalidFormat", "Invalid Mobile Number");
		}

		/* Gender validation */
		if (!user.getGender().matches("^(Male|Female|Others)$")) {
			errors.rejectValue("gender", "InvalidFormat", "Please choose correct gender");
		}

		/* password validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty", "Password field cannot be empty");
		if (!user.getPassword().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,15}$")) {
			errors.rejectValue("password", "InvalidFormat", "Invalid password format");
		}

	}

	/* User Details Validation logic starts here */

	/* Doctor Details Validation logic starts here */

	public void ValidateDoctorDetails(Doctor doctor, Errors errors) {

		/* Doctor name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "doctorName", "NotEmpty", "Doctor Name cannot be empty");
		if (!doctor.getDoctorName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("doctorName", "InvalidFormat",
					"Invalid Doctor Name:Name should contain only characters.");
		}

		/* Clinic name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "clinicName", "NotEmpty", "Clinic Name cannot be empty");
		if (!doctor.getClinicName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("clinicName", "InvalidFormat",
					"Invalid Clinic Name:Name should contain only characters.");
		}

		/* E-Mail Id validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "emailId", "NotEmpty", "E-mail Id cannot be empty");
		if (!doctor.getEmailId().matches(
				"^([a-zA-Z0-9]([a-zA-Z0-9.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\\-]+)?[a-zA-Z0-9])\\.([a-zA-Z]{2,})(\\.[a-zA-Z]{2,})?$")) {
			errors.rejectValue("emailId", "InvalidFormat", "Invalid E-Mail Address.");
		}

		/* Mobile number validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contactNo", "NotEmpty", "Mobile number cannot be empty");
		if (!doctor.getContactNo().matches("^[6-9][0-9]{9}$")) {
			errors.rejectValue("contactNo", "InvalidFormat", "Invalid Mobile Number");
		}

		/* Doctor specialization validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "specialization", "NotEmpty",
				"Doctor Specialization cannot be empty");
		if (!doctor.getSpecialization().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("specialization", "InvalidFormat",
					"Invalid Specialization:Name should contain only characters.");
		}

		/* Experience validation between 0-99 yrs */
		if (!((doctor.getExperience() > 0) && (doctor.getExperience() < 100))) {
			errors.rejectValue("experience", "InvalidFormat", "Please enter valid experience !");
		}

		/* Licence document path validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "licencePath", "NotEmpty",
				"Licenece Document path cannot be empty");
		if (!doctor.getLicencePath().matches("^.*\\.(doc|pdf|jpg|jpeg|png)$")) {
			errors.rejectValue("licencePath", "InvalidFormat", "Please provide valid file Path");
		}

		/* password validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty", "Password field cannot be empty");
		if (!doctor.getPassword().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,15}$")) {
			errors.rejectValue("password", "InvalidFormat", "Invalid password format");
		}

	}

	/* Doctor Details Validation logic ends here */

	/* Appointment Details Validation logic starts here */

	public void ValidateAppointmentDetails(ScheduleAppointment scheduleAppointment, Errors errors) {

		/* patient name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "patientName", "NotEmpty", "Patient Name cannot be empty");
		if (!scheduleAppointment.getPatientName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("patientName", "InvalidFormat",
					"Invalid Patient Name:Name should contain only characters.");
		}

		/* Mobile number validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "patientContactNo", "NotEmpty",
				"Mobile number cannot be empty");
		if (!scheduleAppointment.getPatientContactNo().matches("^[6-9][0-9]{9}$")) {
			errors.rejectValue("patientContactNo", "InvalidFormat", "Invalid Mobile Number");
		}

		/* Prescription document path validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "prescriptionFilePath", "NotEmpty",
				"Prescription Document path cannot be empty");
		if (!scheduleAppointment.getPrescriptionFilePath().matches("^.*\\.(doc|pdf|jpg|jpeg|png)$")) {
			errors.rejectValue("prescriptionFilePath", "InvalidFormat", "Please provide valid file Path");
		}

		/* Appointment Details Validation logic ends here */
	}

	/* Feedback Details Validation logic starts here */
	public void ValidateFeedbackDetails(ClientFeedback clientFeedback, Errors errors) {


		/* client name validation clientFeedback */

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "clientName", "NotEmpty", "Name cannot be empty");
		if (!clientFeedback.getClientName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("clientName", "InvalidFormat",
					"Invalid Name Format:Name should contain only characters.");
		}


		/* Mobile number validation for clientFeedback */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contactNo", "NotEmpty", "Mobile number cannot be empty");
		if (!clientFeedback.getContactNo().matches("^[6-9][0-9]{9}$")) {
			errors.rejectValue("contactNo", "InvalidFormat", "Invalid Mobile Number");
		}
	}
	/* Feedback Details Validation logic ends here */

	public void validateEnquiry(Enquiry enquiry, Errors errors) {
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "NotEmpty", "Name cannot be empty");
		if (!enquiry.getName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("name", "InvalidFormat", "Invalid  Name:Name should contain only characters.");
		}

		/* Mobile number validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contactNO", "NotEmpty", "Mobile number cannot be empty");
		if (!enquiry.getContactNO().matches("^[6-9][0-9]{9}$")) {
			errors.rejectValue("contactNO", "InvalidFormat", "Invalid Mobile Number");
		}

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "NotEmpty", "E-mail Id cannot be empty");
		if (!enquiry.getEmail().matches(
				"^([a-zA-Z0-9]([a-zA-Z0-9.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\\-]+)?[a-zA-Z0-9])\\.([a-zA-Z]{2,})(\\.[a-zA-Z]{2,})?$")) {
			errors.rejectValue("email", "InvalidFormat", "Invalid E-Mail Address.");
		}
	}

	/* Test Details Validation logic starts here */

	public void ValidateTestDetails(Test test, Errors errors) {

		/* Test name validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "testName", "NotEmpty", "Test name cannot be empty");
		if (!test.getTestName().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("testName", "InvalidFormat", "Invalid Test Name:Name should contain only characters.");
		}

		/* Test type validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "testType", "NotEmpty", "Test Type cannot be empty");
		if (!test.getTestType().matches("^[a-zA-Z]+( [a-zA-Z]+)*$")) {
			errors.rejectValue("testType", "InvalidFormat", "Invalid Test Type:Name should contain only characters.");
		}

		/* Test Actual Price validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "actualPrice", "NotEmpty", "Test Price cannot be empty");
		if (!((test.getActualPrice() > 0) && (test.getActualPrice() <= 100000))) {
			errors.rejectValue("actualPrice", "InvalidFormat", "Invalid Test price:Please enter valid test pricing");
		}

		/* Test discount validation */
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "discount", "NotEmpty", "Test discount cannot be empty");
		if (!((test.getDiscount() > 0) && (test.getDiscount() <= 100))) {
			errors.rejectValue("discount", "InvalidFormat", "Invalid Test Discount:Please enter valid test discount");
		}

		/* Test image path validation */
		if (!test.getTestImagePath().matches("^.*\\.(jpg|jpeg|png)$")) {
			errors.rejectValue("testImagePath", "InvalidFormat", "Please provide valid image Path");
		}
		/* Test Details Validation logic ends here */

	}

	}
