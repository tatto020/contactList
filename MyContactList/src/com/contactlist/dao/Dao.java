package com.contactlist.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.sqlite.SQLite;
import org.sqlite.SQLiteConnection;

public class Dao {	

	public Connection getConnection() throws ClassNotFoundException, SQLException {

		Connection conn = null;

		String url = "jdbc:sqlite:/var/www/sample.sqlite";
		//		try {
		Class.forName("org.sqlite.JDBC");
		conn = DriverManager.getConnection(url);
		//			Commented due to investigating connections problems
		//			with sqlite + docker.
		//		} catch (SQLException e) {
		//			e.printStackTrace();
		//		} catch (ClassNotFoundException e) {
		//			// TODO Auto-generated catch block
		//			e.printStackTrace();
		//		}
		return conn;
	}

}
