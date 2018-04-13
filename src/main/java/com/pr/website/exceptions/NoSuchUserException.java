package com.pr.website.exceptions;

public class NoSuchUserException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public NoSuchUserException() {
		super();
	}

	public NoSuchUserException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public NoSuchUserException(String message) {
		super(message);
	}

}
