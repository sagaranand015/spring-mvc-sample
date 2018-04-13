package com.pr.website.services;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.pr.website.constants.Constants;
import com.pr.website.constants.ErrorCodes;
import com.pr.website.constants.ErrorMessages;
import com.pr.website.constants.SuccessCodes;
import com.pr.website.constants.SuccessMessages;
import com.pr.website.dao.GenericDao;
import com.pr.website.exceptions.DalException;
import com.pr.website.exceptions.ServiceException;
import com.pr.website.payloads.ServiceResponse;
import com.pr.website.validations.ValidatorImpl;

public class ApiServiceImpl implements ApiService {

	private static final Logger logger = LoggerFactory.getLogger(ApiServiceImpl.class);

	@Autowired
	private GenericDao genericDao;

	@Autowired
	private ValidatorImpl validator;

	/**
	 * returns the serviceResponse containing the db and site status response
	 */
	public ServiceResponse getSiteStatus() throws ServiceException {
		try {
			// if (!genericDao.getDbStatus()) {
			// throw new ServiceException(ErrorCodes.INTERNAL_SERVER_ERROR,
			// ErrorMessages.DB_FAILURE);
			// }
			return new ServiceResponse(SuccessCodes.OK, SuccessMessages.OK);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new ServiceException(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage());
		}
	}

}
