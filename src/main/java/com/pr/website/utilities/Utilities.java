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
import com.pr.website.helpers.TokenHelper;
import com.pr.website.validations.ValidatorImpl;

public class Utilities {

	private static final Logger logger = LoggerFactory.getLogger(Utilities.class);

	@Autowired
	private TokenHelper tokenHelper;

	@Autowired
	private ValidatorImpl validator;

	// private String subscriptionPlans;
	//
	// public String getSubscriptionPlans() {
	// return subscriptionPlans;
	// }
	//
	// public void setSubscriptionPlans(String subscriptionPlans) {
	// this.subscriptionPlans = subscriptionPlans;
	// }

	/**
	 * @param userType
	 * @return true/false if the given userType is not null and one of the userTypes
	 *         in the application logic
	 */
	public boolean checkUserType(String userType) {
		if (userType != null && !userType.equalsIgnoreCase(Constants.CLUB)
				&& !userType.equalsIgnoreCase(Constants.PLAYER) && !userType.equalsIgnoreCase(Constants.COACH)) {
			return false;
		}
		return true;
	}

	/**
	 * @param userType
	 * @param token
	 * @return utility function to validate a given token. This is to reduce
	 *         dependency on the tokenHelper layer
	 * @throws Exception
	 */
	public String validateToken(String userType, String token) throws Exception {
		try {
			return tokenHelper.validateToken(userType, token);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new Exception(e.getMessage());
		}
	}

	/**
	 * @param userType
	 * @param authHeader
	 * @return the userId from the authorization header. Otherwise, throws an
	 *         exception
	 * @throws AuthorizationException
	 */
	public String validateAuthHeader(String userType, String authHeader) throws AuthorizationException {
		try {
			String[] headers = authHeader.split(DelimiterConstants.AUTH_HEADER_SEPARATOR_REGEX);
			if (!validator.validateString(authHeader)) {
				throw new AuthorizationException(ErrorMessages.INVALID_AUTH_HEADER);
			} else if (!headers[0].equals(TokenConstants.AUTH_HEADER_TYPE)) {
				throw new AuthorizationException(ErrorMessages.INVALID_AUTH_HEADER);
			} else if (headers.length != TokenConstants.AUTH_TOKEN_LENGTH) {
				throw new AuthorizationException(ErrorMessages.INVALID_AUTH_HEADER);
			}
			return validateToken(userType, headers[1]);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new AuthorizationException(e.getMessage());
		}
	}

	// /**
	// * @param planId
	// * @return true if the given plan is one of the plans coming from the
	// properties
	// * file. False otherwise
	// * @throws Exception
	// */
	// public boolean validateSubscriptionPlans(String planId) throws Exception {
	// try {
	// String[] allPlans = this.getSubscriptionPlans().split(",");
	// for (String plan : allPlans) {
	// if (planId.equals(plan)) {
	// return true;
	// }
	// }
	// } catch (Exception e) {
	// logger.error(e.getMessage(), e);
	// }
	// return false;
	// }

}
