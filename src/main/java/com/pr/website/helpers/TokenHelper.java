package com.pr.website.helpers;

public interface TokenHelper {

	/**
	 * @param userType
	 * @param userId
	 * @param expiryMillis
	 * @param tokenAlgo
	 * @return the jwt token built from the given parameters
	 * @throws Exception
	 */
	public String build(String userType, String userId, Integer expiryMillis, String tokenAlgo) throws Exception;

	/**
	 * @param userType
	 * @param token
	 * @param tokenAlgo
	 * @return the userId if the given token is valid
	 * @throws Exception
	 */
	public String validate(String userType, String token, String tokenAlgo) throws Exception;

	/**
	 * @param userType
	 * @param userId
	 * @return the token with 24 hours of expiry and uses default parameters
	 * @throws Exception
	 */
	public String buildShortToken(String userType, String userId) throws Exception;

	/**
	 * @param userType
	 * @param userId
	 * @return the token with 30 minutes of expiry and uses default parameters
	 * @throws Exception
	 */
	public String buildLongToken(String userType, String userId) throws Exception;

	/**
	 * @param userType
	 * @param token
	 * @return validates all kinds of token with the default Parameters
	 * @throws Exception
	 */
	public String validateToken(String userType, String token) throws Exception;

}
