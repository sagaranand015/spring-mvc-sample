package com.pr.website.exceptions;

public class PaymentException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public PaymentException() {
		super();
	}

	public PaymentException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public PaymentException(String message) {
		super(message);
	}

}
