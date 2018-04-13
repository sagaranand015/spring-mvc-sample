package com.pr.website.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.pr.website.constants.Constants;
import com.pr.website.constants.ErrorMessages;
import com.pr.website.utilities.Utilities;

@Component("authFailureHandler")
public class AuthFailureHandler extends SimpleUrlAuthenticationFailureHandler {

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	@Autowired
	private Utilities utilities;

	private static final Logger logger = LoggerFactory.getLogger(AuthFailureHandler.class);

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		// "?approved=false");
		// try {
		// // get the userType from the exception thing
		// String expMessage = exception.getMessage();
		// String userType = expMessage.split(":")[0];
		// String message = expMessage.split(":")[1];
		//
		// if (!utilities.checkUserType(userType)) {
		// redirectStrategy.sendRedirect(request, response, "/login?status=false");
		// }
		//
		// if (message.equals(ErrorMessages.INVALID_CREDENTIALS)) {
		// redirectStrategy.sendRedirect(request, response, "/login/" + userType +
		// "?valid=false");
		// } else if (message.equals(ErrorMessages.DB_FAILURE)) {
		// redirectStrategy.sendRedirect(request, response, "/login/" + userType +
		// "?status=false");
		// } else if (message.equals(ErrorMessages.INTERNAL_SERVER_ERROR)) {
		// redirectStrategy.sendRedirect(request, response, "/login/" + userType +
		// "?status=false");
		// } else if (message.equals(ErrorMessages.REGISTRATION_REQD)) {
		// redirectStrategy.sendRedirect(request, response, "/login/" + userType +
		// "?register=false");
		// } else if (message.equals(ErrorMessages.USER_NOT_APPROVED)) {
		// redirectStrategy.sendRedirect(request, response, "/login/" + userType +
		// "?approved=false");
		// }
		// } catch (Exception e) {
		// logger.error(e.getMessage(), e);
		// redirectStrategy.sendRedirect(request, response, "/login?status=false");
		// }
	}

}
