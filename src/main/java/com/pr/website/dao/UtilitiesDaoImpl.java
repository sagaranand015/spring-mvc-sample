package com.pr.website.dao;

import javax.persistence.NoResultException;
import javax.persistence.NonUniqueResultException;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.annotation.Transactional;

import com.pr.website.exceptions.DalException;

public class UtilitiesDaoImpl implements UtilitiesDao {

	private static final Logger logger = LoggerFactory.getLogger(UtilitiesDaoImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

}
