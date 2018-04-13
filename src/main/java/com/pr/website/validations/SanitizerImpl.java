package com.pr.website.validations;

import org.owasp.html.HtmlPolicyBuilder;
import org.owasp.html.PolicyFactory;
import org.owasp.html.Sanitizers;

public class SanitizerImpl {

	/**
	 *
	 * @param val
	 * @return the sanitized input, containing only the block elements. All
	 *         other html elements will be removed.
	 */
	public String sanitizeForBlocksAndFormatting(String val) {
		PolicyFactory policy = Sanitizers.FORMATTING.and(Sanitizers.BLOCKS).and(Sanitizers.LINKS);
		return policy.sanitize(val);
	}

	/**
	 *
	 * @param val
	 * @return the sanitized input, containing only the block elements. All
	 *         other html elements will be removed.
	 */
	public String sanitizeForLinks(String val) {
		PolicyFactory policy = new HtmlPolicyBuilder().allowElements("a").allowUrlProtocols("http")
				.allowUrlProtocols("https").allowAttributes("href").onElements("a").toFactory();
		return policy.sanitize(val);
	}

}
