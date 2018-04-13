package com.pr.website.services;

import org.slf4j.Logger;


import org.slf4j.LoggerFactory;

import com.pr.website.controllers.ApiController;
import com.pr.website.exceptions.ServiceException;
import com.pr.website.payloads.ServiceResponse;

public interface ApiService {

	/**
	 * @return the serviceResponse containing the db and site status response
	 * @throws ServiceException
	 */
	public ServiceResponse getSiteStatus() throws ServiceException;

}
