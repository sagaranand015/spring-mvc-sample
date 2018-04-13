package com.pr.website.exceptions;

public class AuthenticationException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public AuthenticationException() {
		super();
	}

	public AuthenticationException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public AuthenticationException(String message) {
		super(message);
	}

}
