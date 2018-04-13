package com.pr.website.dao;

import javax.persistence.PersistenceException;

import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.CannotCreateTransactionException;
import org.springframework.transaction.annotation.Transactional;

import com.pr.website.constants.ErrorCodes;
import com.pr.website.constants.SuccessCodes;
import com.pr.website.constants.SuccessMessages;
import com.pr.website.controllers.ApiController;
import com.pr.website.exceptions.DalException;
import com.pr.website.payloads.ServiceResponse;

public class GenericDaoImpl implements GenericDao {

	private static final Logger logger = LoggerFactory.getLogger(GenericDaoImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	/**
	 * Checks the connection with the database and returns the boolean
	 */
	@Transactional
	public boolean getDbStatus() throws DalException {
		try {
			Session session = this.sessionFactory.getCurrentSession();
			Query query = session.createNativeQuery("show tables");
			if (!query.getResultList().isEmpty()) {
				return true;
			}
		} catch (CannotCreateTransactionException e) {
			logger.error(e.getMessage(), e);
			throw new DalException(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage());
		} catch (HibernateException e) {
			logger.error(e.getMessage(), e);
			throw new DalException(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage());
		} catch (PersistenceException e) {
			logger.error(e.getMessage(), e);
			throw new DalException(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage());
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new DalException(ErrorCodes.INTERNAL_SERVER_ERROR, e.getMessage());
		}
		return false;
	}

}
