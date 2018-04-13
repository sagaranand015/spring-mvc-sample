package com.pr.website.filters;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Component
public class LoginAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * AbstractAuthenticationProcessingFilter#setAuthenticationManager(org.
	 * springframework.security.authentication.AuthenticationManager)
	 */
	@Override
	@Autowired
	public void setAuthenticationManager(AuthenticationManager authenticationManager) {
		// TODO Auto-generated method stub
		super.setAuthenticationManager(authenticationManager);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * AbstractAuthenticationProcessingFilter#setAuthenticationSuccessHandler(
	 * org.springframework.security.web.authentication.
	 * AuthenticationSuccessHandler)
	 */
	@Override
	@Autowired
	public void setAuthenticationSuccessHandler(AuthenticationSuccessHandler authSuccessHandler) {
		// TODO Auto-generated method stub
		super.setAuthenticationSuccessHandler(authSuccessHandler);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * AbstractAuthenticationProcessingFilter#setAuthenticationFailureHandler(
	 * org.springframework.security.web.authentication.
	 * AuthenticationFailureHandler)
	 */
	@Override
	@Autowired
	public void setAuthenticationFailureHandler(AuthenticationFailureHandler authFailureHandler) {
		// TODO Auto-generated method stub
		super.setAuthenticationFailureHandler(authFailureHandler);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * UsernamePasswordAuthenticationFilter#attemptAuthentication(javax.servlet.
	 * http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		return super.attemptAuthentication(request, response);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * AbstractAuthenticationProcessingFilter#successfulAuthentication(javax.
	 * servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse,
	 * javax.servlet.FilterChain, org.springframework.security.core.Authentication)
	 */
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		// TODO Auto-generated method stub
		super.successfulAuthentication(request, response, chain, authResult);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * UsernamePasswordAuthenticationFilter#obtainUsername(javax.servlet.http.
	 * HttpServletRequest)
	 */
	@Override
	protected String obtainUsername(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return super.obtainUsername(request);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.web.authentication.
	 * UsernamePasswordAuthenticationFilter#obtainPassword(javax.servlet.http.
	 * HttpServletRequest)
	 */
	@Override
	protected String obtainPassword(HttpServletRequest request) {
		// TODO Auto-generated method stub
		return super.obtainPassword(request);
	}

}
