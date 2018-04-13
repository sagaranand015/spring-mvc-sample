package com.pr.website.helpers;

import java.security.KeyFactory;

import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.EncodedKeySpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Date;

import org.apache.log4j.Logger;

import com.pr.website.constants.Constants;
import com.pr.website.exceptions.ServiceException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenHelperImpl implements TokenHelper {

	private static final Logger logger = Logger.getLogger(TokenHelperImpl.class);

	private SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.RS256;

	private String longExpiryMillis;

	private String shortExpiryMillis;

	private String signKey;

	private String tokenIssuer;

	private String tokenAlgo;

	public String getTokenAlgo() {
		return tokenAlgo;
	}

	public void setTokenAlgo(String tokenAlgo) {
		this.tokenAlgo = tokenAlgo;
	}

	public String getTokenIssuer() {
		return tokenIssuer;
	}

	public void setTokenIssuer(String tokenIssuer) {
		this.tokenIssuer = tokenIssuer;
	}

	public String getLongExpiryMillis() {
		return longExpiryMillis;
	}

	public void setLongExpiryMillis(String longExpiryMillis) {
		this.longExpiryMillis = longExpiryMillis;
	}

	public String getShortExpiryMillis() {
		return shortExpiryMillis;
	}

	public void setShortExpiryMillis(String shortExpiryMillis) {
		this.shortExpiryMillis = shortExpiryMillis;
	}

	public String getSignKey() {
		return signKey;
	}

	public void setSignKey(String signKey) {
		this.signKey = signKey;
	}

	public TokenHelperImpl() {
		super();
	}

	/**
	 * To build the token using jwt including the userId for registration
	 * confirmation
	 */
	public String build(String userType, String userId, Integer expiryMillis, String tokenAlgo) throws Exception {
		long nowMillis = System.currentTimeMillis();
		Date now = new Date(nowMillis);
		Date exipration = new Date(nowMillis + expiryMillis);
		KeyFactory keyFactory;
		try {
			keyFactory = KeyFactory.getInstance(tokenAlgo);
			byte[] privateKeyBlob = Base64.getDecoder().decode(getSignKey());
			EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBlob);
			PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec);
			JwtBuilder builder = Jwts.builder().setId(userId).setIssuedAt(now).setSubject(getTokenIssuer())
					.setIssuer(userType).signWith(signatureAlgorithm, privateKey).setExpiration(exipration);
			return builder.compact();
		} catch (NoSuchAlgorithmException e) {
			logger.error(e.getMessage(), e);
			throw new ServiceException("Error constructing private key object");
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new ServiceException("Error constructing the Registration token");
		}
	}

	/**
	 * To validate the token containing the userId and returning the userId
	 */
	public String validate(String userType, String token, String tokenAlgo) throws Exception {
		Claims claims = null;
		if (token == null)
			return null;
		try {
			PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(getSignKey()));
			KeyFactory kf = KeyFactory.getInstance(tokenAlgo);
			PrivateKey signKey = kf.generatePrivate(spec);
			claims = Jwts.parser().setSigningKey(signKey).parseClaimsJws(token).getBody();
			long nowMillis = System.currentTimeMillis();
			Date now = new Date(nowMillis);
			
			if (null == claims || claims.isEmpty() || !claims.getSubject().equals(getTokenIssuer())
					|| !claims.getIssuer().equals(userType) || claims.getExpiration().before(now)
					|| claims.getIssuedAt().after(now)) {
				return null;
			}
			return claims.getId();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new ServiceException("Validation of the token failed");
		}
	}

	public String buildShortToken(String userType, String userId) throws Exception {
		return this.build(userType, userId, Integer.parseInt(this.getShortExpiryMillis()), this.getTokenAlgo());
	}

	public String buildLongToken(String userType, String userId) throws Exception {
		return this.build(userType, userId, Integer.parseInt(this.getLongExpiryMillis()), this.getTokenAlgo());
	}

	public String validateToken(String userType, String token) throws Exception {
		return this.validate(userType, token, this.getTokenAlgo());
	}

}
