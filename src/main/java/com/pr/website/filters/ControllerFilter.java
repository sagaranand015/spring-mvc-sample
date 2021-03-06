/**
 * 
 */
package com.pr.website.filters;

import java.io.IOException;


import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.SynthesizedAnnotation;
import org.springframework.security.web.csrf.CsrfToken;

/**
 * @author sanand5
 *
 */
public class ControllerFilter implements Filter {

	private static final Logger logger = LoggerFactory.getLogger(ControllerFilter.class);

	private FilterConfig filterConfig;

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest,
	 * javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		try {

			HttpServletRequest req = (HttpServletRequest) request;
			HttpServletResponse res = (HttpServletResponse) response;

			/**
			 * This is not required, since Spring Security will take care of
			 * this implicitly.
			 */
			res.setHeader("X-Frame-Options", "DENY");

		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		chain.doFilter(request, response);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub

	}

	// For css, scripts, images, htmls, rest - login not needed
	private boolean startsWithStaticPath(String servletPath) {
		if (servletPath.trim().startsWith("/libraries/") || servletPath.trim().startsWith("/resources/")) {
			return true;
		}
		return false;
	}

}
