package com.contactlist.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Dao {	

	public Connection getConnection() throws ClassNotFoundException, SQLException {

		Connection conn = null;

		String url = "jdbc:sqlite:/var/www/sample.db";
			Class.forName("org.sqlite.JDBC");
			conn = DriverManager.getConnection(url);

		return conn;
	}

}
