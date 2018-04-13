package com.pr.website.providers;

import java.util.ArrayList;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.pr.website.constants.Constants;
import com.pr.website.constants.ErrorMessages;
import com.pr.website.exceptions.AuthorizationException;
import com.pr.website.exceptions.ServiceException;
import com.pr.website.utilities.Utilities;
import com.pr.website.validations.ValidatorImpl;

@Component
public class LoginAuthProvider implements AuthenticationProvider {

	private static final Logger logger = LoggerFactory.getLogger(LoginAuthProvider.class);

	@Autowired
	private ValidatorImpl validator;

	public void setValidator(ValidatorImpl validator) {
		this.validator = validator;
	}

	/**
	 * Spring Security based authenticate method for login of all kinds of users
	 */
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String userType = Constants.PLAYER;
		try {
			HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
					.getRequest();
			if (request != null) {
				userType = request.getParameterValues("userType")[0];
			}
			String email = authentication.getName().trim();
			final String password = authentication.getCredentials().toString().trim();
			if (!validator.validateEmail(email) || !validator.validatePassword(password)) {
				throw new BadCredentialsException(userType + ":" + ErrorMessages.INVALID_CREDENTIALS);
			}
			throw new BadCredentialsException(userType + ":" + ErrorMessages.INVALID_CREDENTIALS);
		} catch (AuthenticationException e) {
			logger.error(e.getMessage(), e);
			throw new BadCredentialsException(userType + ":" + ErrorMessages.INVALID_CREDENTIALS);
		}

	}

	public boolean supports(Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}
