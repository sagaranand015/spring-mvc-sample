package com.pr.website.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.pr.website.constants.Constants;

@Component("authSuccessHandler")
public class AuthSuccessHandler implements AuthenticationSuccessHandler {

	private static final Logger logger = LoggerFactory.getLogger(AuthSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	/**
	 * the event on the successful authentication from the Spring Security Login
	 * provider
	 */
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth)
			throws IOException, ServletException {
		redirectStrategy.sendRedirect(request, response, "/login?status=false");
	}
}
