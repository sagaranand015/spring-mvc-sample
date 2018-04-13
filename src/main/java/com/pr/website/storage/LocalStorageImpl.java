package com.pr.website.storage;

import java.io.BufferedOutputStream;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.pr.website.exceptions.StorageException;
import com.pr.website.validations.ValidatorImpl;

public class LocalStorageImpl implements Storage {

	private static final Logger logger = LoggerFactory.getLogger(LocalStorageImpl.class);

	@Autowired
	private ValidatorImpl validator;

	private String profileImgStoragePath;

	private String defaultProfileImgName;

	public String getDefaultProfileImgName() {
		return defaultProfileImgName;
	}

	public void setDefaultProfileImgName(String defaultProfileImgName) {
		this.defaultProfileImgName = defaultProfileImgName;
	}

	public String getProfileImgStoragePath() {
		return profileImgStoragePath;
	}

	public void setProfileImgStoragePath(String profileImgStoragePath) {
		this.profileImgStoragePath = profileImgStoragePath;
	}

	/**
	 * @param path
	 * @param fileName
	 * @param file
	 * @return the name of the saved file. Otherwise, returns an empty string
	 * @throws StorageException
	 */
	public String saveFile(String path, String fileName, MultipartFile file) throws StorageException {
		try {
			if (!file.isEmpty()) {
				byte[] bytes = file.getBytes();
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(path + fileName)));
				stream.write(bytes);
				stream.flush();
				stream.close();
				return fileName;
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new StorageException(e.getMessage());
		}
		return "";
	}

	/**
	 * @param fileName
	 * @param file
	 * @return the name of the saved profile Image, otherwise empty string
	 * @throws StorageException
	 */
	public String saveProfileImgToLocalStorage(String fileName, MultipartFile file) throws StorageException {
		return saveFile(this.getProfileImgStoragePath(), fileName, file);
	}

	/**
	 * @param path
	 * @param defaultFileName
	 * @param fileName
	 * @returns the file from the storage given the path and the file name.
	 *          Otherwise, returns the default image
	 * @throws StorageException
	 * @throws IOException
	 */
	public byte[] retrieveFile(String path, String defaultFileName, String fileName)
			throws StorageException, IOException {
		File serverFile = new File(path + defaultFileName);
		try {
			if (!validator.validateString(fileName)) {
				serverFile = new File(path + defaultFileName);
			} else {
				serverFile = new File(path + fileName);
				if (!serverFile.exists()) {
					serverFile = new File(path + defaultFileName);
				}
			}
			return Files.readAllBytes(serverFile.toPath());
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new StorageException(e.getMessage());
		}
	}

	/**
	 * @param fileName
	 * @return the profile image, given the fileName and using default paramters
	 *         for profile Image. Otherwise, returns the default image
	 * @throws StorageException
	 */
	public byte[] retrieveProfileImg(String fileName) throws StorageException {
		try {
			return retrieveFile(this.getProfileImgStoragePath(), this.getDefaultProfileImgName(), fileName);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			throw new StorageException(e.getMessage());
		}
	}

}
