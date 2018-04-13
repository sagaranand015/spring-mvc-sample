package com.pr.website.validations;

import org.owasp.esapi.ESAPI;

import org.owasp.esapi.Validator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ValidatorImpl {

	private static final Logger logger = LoggerFactory.getLogger(ValidatorImpl.class);

	Validator validator;

	/**
	 * Constructor for initializing the ESAPI validator and other properties
	 */
	public ValidatorImpl() {
		validator = ESAPI.validator();
		if (validator == null) {
			logger.error("ESAPI Validator has not been intialized. Please check again.");
		}
	}

	/**
	 * @param val
	 * @return boolean value stating where is string is empty or null
	 */
	public boolean validateString(String val) {
		if (val == null || val == "") {
			return false;
		}
		return validator.isValidInput("generalString", val, "SafeString", val.length(), false, false);
	}

	/**
	 * @param val
	 * @return true if the string is not null. False otherwise
	 */
	public boolean validateStringIsNull(String val) {
		return (val == null) ? false : true;
	}

	/**
	 * @param val
	 * @return true if the String is not empty. False otherwise
	 */
	public boolean validateStringIsEmpty(String val) {
		return (val == "") ? false : true;
	}

	/**
	 * @param val
	 * @return true if the email is validated
	 */
	public boolean validateEmail(String val) {
		return validator.isValidInput("email", val, "Email", val.length(), false, false);
	}

	/**
	 * 
	 * @param val
	 * @return true if the String passed is safe to be used
	 */
	public boolean validateStringContent(String val) {
		if (val == "" || val.equals(""))
			return true;
		return validator.isValidInput("stringContent", val, "SafeString", val.length(), false, false);
	}

	/**
	 * 
	 * @param val
	 * @return true if the userName String is valid according to the regex
	 */
	public boolean validateUsername(String val) {
		return validator.isValidInput("username", val, "Username", val.length(), false, false);
	}

	/**
	 * 
	 * @param val
	 * @return true if the password is valid. Minimum:6, 1 Alphabet, 1 Number
	 */
	public boolean validatePassword(String val) {
		return validator.isValidInput("password", val, "Password", val.length(), false, false);
	}

	/**
	 * 
	 * @param val
	 * @return true if the dob is valid. dd.mm.yyyy, dd/mm/yyyy, dd-mm-yyyy
	 */
	public boolean validateDob(String val) {
		return validator.isValidInput("dob", val, "Dob", val.length(), false, false);
	}

	/**
	 * @param pwd
	 * @param confirmPwd
	 * @return true if the 2 passwords match exactly. False otherwise
	 */
	public boolean checkPasswordMatch(String pwd, String confirmPwd) {
		return pwd.equals(confirmPwd);
	}

	/**
	 * @param val
	 * @return true if the credit card is validated. False otherwise
	 */
	public boolean validateCreditCardNumber(String val) {
		return validator.isValidInput("creditCard", val, "CreditCard", val.length(), false, false);
	}

	/**
	 * @param val
	 * @return true if the credit card's month is valid. False otherwise
	 */
	public boolean validateCcMonth(String val) {
		return validator.isValidInput("ccExpMonth", val, "CcExpMonth", val.length(), false, false);
	}

	/**
	 * @param val
	 * @return true if the credit card's year is valid. False otherwise
	 */
	public boolean validateCcYear(String val) {
		return validator.isValidInput("ccExpYear", val, "CcExpYear", val.length(), false, false);
	}

	/**
	 * @param val
	 * @return true if the credit card's CVV Number is valid. False otherwise
	 */
	public boolean validateCcCvv(String val) {
		return validator.isValidInput("ccCvv", val, "CcCvv", val.length(), false, false);
	}

}
