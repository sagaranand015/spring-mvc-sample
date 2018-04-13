/**
 * 
 */
package com.pr.website.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * @author sanand5
 *
 */
public class CsrfRequestFilter extends OncePerRequestFilter {

	private static final Logger logger = LoggerFactory.getLogger(CsrfRequestFilter.class);

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.web.filter.OncePerRequestFilter#doFilterInternal(
	 * javax.servlet.http.HttpServletRequest,
	 * javax.servlet.http.HttpServletResponse, javax.servlet.FilterChain)
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
			if (csrf != null) {
				Cookie cookie = new Cookie("XSRF-TOKEN", csrf.getToken());
				cookie.setPath("/");
				response.addCookie(cookie);
			} else {
				logger.error("CSRF Token was not found in this request");
			}
			filterChain.doFilter(request, response);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}

}
