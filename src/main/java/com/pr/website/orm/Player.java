package com.pr.website.orm;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Player")
public class Player {

	@Id
	@Column(name = "playerId")
	private String playerId;

	@Column(name = "playerName")
	private String playerName;

	@Column(name = "playerImg")
	private String playerImg;

	@Column(name = "playerDesc")
	private String playerDesc;

	@Column(name = "playerEmail")
	private String playerEmail;

	@Column(name = "playerContact")
	private String playerContact;

	@Column(name = "playerPwd")
	private String playerPwd;

	@Column(name = "playerMetric")
	private String playerMetric;

	@Column(name = "playerSocial")
	private String playerSocial;

	@Column(name = "isApproved")
	private boolean isApproved;

	@Column(name = "createdOn")
	private Timestamp createdOn;

	@Column(name = "lastUpdatedOn")
	private Timestamp lastUpdatedOn;

	public Player() {
		super();
	}

	public Player(String playerId, String playerName, String playerImg, String playerDesc, String playerEmail,
			String playerContact, String playerPwd, String playerMetric, String playerSocial, boolean isApproved,
			Timestamp createdOn, Timestamp lastUpdatedOn) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.playerImg = playerImg;
		this.playerDesc = playerDesc;
		this.playerEmail = playerEmail;
		this.playerContact = playerContact;
		this.playerPwd = playerPwd;
		this.playerMetric = playerMetric;
		this.playerSocial = playerSocial;
		this.isApproved = isApproved;
		this.createdOn = createdOn;
		this.lastUpdatedOn = lastUpdatedOn;
	}

	public Player(String playerId, String playerName, String playerEmail, String playerContact, String playerPwd,
			boolean isApproved) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.playerEmail = playerEmail;
		this.playerContact = playerContact;
		this.playerPwd = playerPwd;
		this.isApproved = isApproved;
	}

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getPlayerImg() {
		return playerImg;
	}

	public void setPlayerImg(String playerImg) {
		this.playerImg = playerImg;
	}

	public String getPlayerDesc() {
		return playerDesc;
	}

	public void setPlayerDesc(String playerDesc) {
		this.playerDesc = playerDesc;
	}

	public String getPlayerEmail() {
		return playerEmail;
	}

	public void setPlayerEmail(String playerEmail) {
		this.playerEmail = playerEmail;
	}

	public String getPlayerContact() {
		return playerContact;
	}

	public void setPlayerContact(String playerContact) {
		this.playerContact = playerContact;
	}

	public String getPlayerPwd() {
		return playerPwd;
	}

	public void setPlayerPwd(String playerPwd) {
		this.playerPwd = playerPwd;
	}

	public String getPlayerMetric() {
		return playerMetric;
	}

	public void setPlayerMetric(String playerMetric) {
		this.playerMetric = playerMetric;
	}

	public String getPlayerSocial() {
		return playerSocial;
	}

	public void setPlayerSocial(String playerSocial) {
		this.playerSocial = playerSocial;
	}

	public boolean isApproved() {
		return isApproved;
	}

	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	public Timestamp getLastUpdatedOn() {
		return lastUpdatedOn;
	}

	public void setLastUpdatedOn(Timestamp lastUpdatedOn) {
		this.lastUpdatedOn = lastUpdatedOn;
	}

}
