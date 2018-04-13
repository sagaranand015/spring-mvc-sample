package com.pr.website.providers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.session.InvalidSessionStrategy;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.pr.website.constants.Constants;
import com.pr.website.handlers.AuthSuccessHandler;

public class InvalidSessionProvider implements InvalidSessionStrategy {

	private static final Logger logger = LoggerFactory.getLogger(InvalidSessionProvider.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	// this function is invoked with the session times out
	public void onInvalidSessionDetected(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		try {
			String requestUrl = request.getRequestURL().toString();
			// check for admin first and then the other userTypes
			if (requestUrl.toLowerCase().contains(Constants.ADMIN)) {
				redirectStrategy.sendRedirect(request, response, "/login/admin?session=false");
			} else if (requestUrl.toLowerCase().contains(Constants.CLUB)) {
				redirectStrategy.sendRedirect(request, response, "/login/club?session=false");
			} else if (requestUrl.toLowerCase().contains(Constants.COACH)) {
				redirectStrategy.sendRedirect(request, response, "/login/coach?session=false");
			} else if (requestUrl.toLowerCase().contains("subscribe")) {
				redirectStrategy.sendRedirect(request, response, "/login/club?session=false");
			} else {
				redirectStrategy.sendRedirect(request, response, "/login/player?session=false");
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			redirectStrategy.sendRedirect(request, response, "/login/player?session=false");
		}
	}

}
