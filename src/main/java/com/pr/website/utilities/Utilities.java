package com.pr.website.utilities;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pr.website.constants.Constants;
import com.pr.website.constants.DelimiterConstants;
import com.pr.website.constants.ErrorMessages;
import com.pr.website.constants.TokenConstants;
import com.pr.website.exceptions.AuthorizationException;
import com.pr.website.validations.ValidatorImpl;

public class Utilities {

	private static final Logger logger = LoggerFactory.getLogger(Utilities.class);

	@Autowired
	private ValidatorImpl validator;

}
