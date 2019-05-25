package com.contactlist.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.contactlist.dao.CustomerDao;
import com.contactlist.model.Customer;
import com.google.gson.Gson;


@WebServlet("/Controller")
public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		List<Customer> list = null;
		String json = "";
		PrintWriter out = response.getWriter();


		try {
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			list = new CustomerDao().getList();
			json = new Gson().toJson(list);
			out.print(json);
			out.flush();
		} catch (Exception e) {
			json = e.getMessage();
			out.print(json);
			out.flush();
		}


	}

}
