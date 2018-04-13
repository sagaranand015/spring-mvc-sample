package com.pr.website.exceptions;

public class AlreadyExistsException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public AlreadyExistsException() {
		super();
	}

	public AlreadyExistsException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public AlreadyExistsException(String message) {
		super(message);
	}

}
