package com.pr.website.exceptions;

public class AuthorizationException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public AuthorizationException() {
		super();
	}

	public AuthorizationException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public AuthorizationException(String message) {
		super(message);
	}

}
