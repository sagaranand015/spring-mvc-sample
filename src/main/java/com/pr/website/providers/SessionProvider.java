package com.pr.website.providers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.security.web.session.InvalidSessionStrategy;
import org.springframework.security.web.session.SessionManagementFilter;

public class SessionProvider implements SessionAuthenticationStrategy {

	public void onAuthentication(Authentication arg0, HttpServletRequest arg1, HttpServletResponse arg2)
			throws SessionAuthenticationException {
		try {
			System.out.println("The session has been authenticated.");
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
