package me.ctrlmaniac.minigest.interfaces;

import me.ctrlmaniac.minigest.dao.EmailDetails;

public interface EmailServiceInterface {
	String sendSimpleEmail(EmailDetails details);

	String sendEmailWithAttachment(EmailDetails details);
}
