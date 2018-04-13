/**
 * 
 */
package com.pr.website.payloads;

/**
 * @author sanand5
 *
 */
public class ServiceResponse {

	private int status;

	private String message;

	private boolean isExists;

	public ServiceResponse() {
		super();
	}

	public ServiceResponse(int status, String message) {
		super();
		this.status = status;
		if (message == null || message.equalsIgnoreCase("null"))
			this.message = "";
		else
			this.message = message;
	}

	public ServiceResponse(int status, boolean isExists) {
		super();
		this.status = status;
		this.isExists = isExists;
	}

	public ServiceResponse(int status, String message, boolean isExists) {
		super();
		this.status = status;
		if (message == null || message.equalsIgnoreCase("null"))
			this.message = "";
		else
			this.message = message;
		this.isExists = isExists;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		if (message == null || message.equalsIgnoreCase("null"))
			this.message = "";
		else
			this.message = message;
	}

	public boolean getIsExists() {
		return isExists;
	}

	public void setIsExists(boolean isExists) {
		this.isExists = isExists;
	}

}
