package com.pr.website.exceptions;

public class StorageException extends Exception {

	private Integer errorCode;

	public Integer getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(Integer errorCode) {
		this.errorCode = errorCode;
	}

	public StorageException() {
		super();
	}

	public StorageException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}

	public StorageException(String message) {
		super(message);
	}

}
