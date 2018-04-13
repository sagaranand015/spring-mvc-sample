package com.pr.website.storage;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.pr.website.exceptions.StorageException;

public interface Storage {

	/**
	 * @param path
	 * @param fileName
	 * @param file
	 * @return the name of the saved file. Otherwise, returns an empty string
	 * @throws StorageException
	 */
	public String saveFile(String path, String fileName, MultipartFile file) throws StorageException;

	/**
	 * @param fileName
	 * @param file
	 * @return the name of the saved profile Image, otherwise empty string
	 * @throws StorageException
	 */
	public String saveProfileImgToLocalStorage(String fileName, MultipartFile file) throws StorageException;

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
			throws StorageException, IOException;

	/**
	 * @param fileName
	 * @return the profile image, given the fileName and using default paramters
	 *         for profile Image. Otherwise, returns the default image
	 * @throws StorageException
	 */
	public byte[] retrieveProfileImg(String fileName) throws StorageException;

}
