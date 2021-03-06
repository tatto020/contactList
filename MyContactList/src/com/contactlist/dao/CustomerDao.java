package com.contactlist.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.contactlist.model.Customer;

public class CustomerDao extends Dao{

	public List<Customer> getList() throws SQLException{
		List<Customer> customers = new ArrayList<Customer>();

		PreparedStatement stm = null;
		String sql = "SELECT * FROM customer";

		try {
			stm = super.getConnection().prepareStatement(sql);

			ResultSet rs = stm.executeQuery();

			while(rs.next()) {
				Customer customer = new  Customer();
				customer.setName(rs.getString("name"));
				customer.setPhone(rs.getString("phone"));
				customers.add(customer);
			}
			
		} catch (ClassNotFoundException | SQLException e) {
			return null;
			
		}finally {
			
			if(stm != null) {
				stm.close();
			}
			
		}
		
		return customers;

	}

}
