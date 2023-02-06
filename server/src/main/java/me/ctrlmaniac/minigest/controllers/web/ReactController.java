package me.ctrlmaniac.minigest.controllers.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class ReactController {

	@GetMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}", "/error" })
	public String getWWW(HttpServletRequest request) {

		return "www/index.html";
	}

	@GetMapping(value = { "/admin" })
	public String getAdmin(HttpServletRequest request) {

		return "admin/index.html";
	}

}
