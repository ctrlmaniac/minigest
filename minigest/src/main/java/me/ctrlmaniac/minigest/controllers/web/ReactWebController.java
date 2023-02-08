package me.ctrlmaniac.minigest.controllers.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class ReactWebController {

	@GetMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}", "/error" })
	public String getClient(HttpServletRequest request) {
		String url = request.getRequestURI();

		if (url.startsWith("/admin")) {
			return "/admin/index.html";
		} else if (url.startsWith("/app")) {
			return "/app/index.html";
		}

		return "/www/index.html";
	}
}