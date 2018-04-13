package com.pr.website.handlers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;

import com.pr.website.constants.Constants;

public class LogoutSuccessHandler
		implements org.springframework.security.web.authentication.logout.LogoutSuccessHandler {

	private static final Logger logger = LoggerFactory.getLogger(LogoutSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication auth)
			throws IOException, ServletException {
		try {
			String userType = Constants.PLAYER;
			HttpSession session = request.getSession();
			if (session != null) {
				userType = session.getAttribute("userType").toString();
			}
			// check for admin first and then the other userTypes
			if (userType.equalsIgnoreCase(Constants.ADMIN)) {
				redirectStrategy.sendRedirect(request, response, "/login/admin?logout=true");
			} else if (userType.equalsIgnoreCase(Constants.CLUB)) {
				redirectStrategy.sendRedirect(request, response, "/login/club?logout=true");
			} else if (userType.equalsIgnoreCase(Constants.COACH)) {
				redirectStrategy.sendRedirect(request, response, "/login/coach?logout=true");
			} else {
				redirectStrategy.sendRedirect(request, response, "/login/player?logout=true");
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			redirectStrategy.sendRedirect(request, response, "/login?logout=true");
		}
	}

}
