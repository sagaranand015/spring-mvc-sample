package com.pr.website.controllers;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pr.website.constants.Constants;
import com.pr.website.constants.ErrorCodes;
import com.pr.website.constants.ErrorMessages;
import com.pr.website.constants.SuccessCodes;
import com.pr.website.constants.SuccessMessages;
import com.pr.website.exceptions.ServiceException;
import com.pr.website.helpers.TokenHelper;
import com.pr.website.payloads.ServiceResponse;
import com.pr.website.services.ApiService;
import com.pr.website.utilities.Utilities;
import com.pr.website.validations.SanitizerImpl;
import com.pr.website.validations.ValidatorImpl;

@Controller
public class ApiController {

	private static final Logger logger = LoggerFactory.getLogger(ApiController.class);

	@Autowired
	private ValidatorImpl validator;

	@Autowired
	private SanitizerImpl sanitizer;

	@Autowired
	private Utilities utilities;

	@Autowired
	private ApiService apiService;

	/**
	 * @return for sending back the response for status of the service, including
	 *         the db status
	 */
	@RequestMapping(value = { "api/status" })
	public @ResponseBody ResponseEntity<ServiceResponse> getStatus(HttpServletRequest request) {
		ServiceResponse statusResp;
		try {
			statusResp = apiService.getSiteStatus();
			if (statusResp != null) {
				return ResponseEntity.status(statusResp.getStatus()).body(statusResp);
			}
		} catch (ServiceException e) {
			logger.error(e.getMessage(), e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ServiceResponse(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage()));
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ServiceResponse(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage()));
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new ServiceResponse(ErrorCodes.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR));
	}

}
