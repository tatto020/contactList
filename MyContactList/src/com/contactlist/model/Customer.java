package com.contactlist.model;

import com.contactlist.constants.CountryCode;

public class Customer {
	private int id;
	private String	name,
	phone,
	state;
	private CountryCode country;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		setCountry(phone);
		setState(phone);
		this.phone = phone;
	}
	
	public String getState() {
		return state;
	}
	public void setState(String phone) {

		switch (this.getCountry()) {
		case "CAMEROON":
			this.state = (phone.matches("\\(237\\)\\ ?[2368]\\d{7,8}$"))?"Valid":"Not Valid";
			break;
		case "ETHIOPIA":
			this.state = (phone.matches("\\(251\\)\\ ?[1-59]\\d{8}$"))?"Valid":"Not Valid";
			break;
		case "MOROCCO":
			this.state = (phone.matches("\\(212\\)\\ ?[5-9]\\d{8}$"))?"Valid":"Not Valid";
			break;
		case "MOZAMBIQUE":
			this.state = (phone.matches("\\(258\\)\\ ?[28]\\d{7,8}$"))?"Valid":"Not Valid";
			break;
		case "UGANDA":
			this.state = (phone.matches("\\(256\\)\\ ?\\d{9}$"))?"Valid":"Not Valid";
			break;
		default:
			this.state = "Invalid";
			break;
		}


	}
	public String getCountry() {
		return country.toString();
	}
	private void setCountry(String phone) {
		int countryCode = Integer.parseInt(phone.substring(1, 4));

		switch (countryCode) {

		case 237:
			this.country = CountryCode.CAMEROON;
			break;
		case 251:
			this.country = CountryCode.ETHIOPIA;
			break;
		case 212:
			this.country = CountryCode.MOROCCO;
			break;
		case 258:
			this.country = CountryCode.MOZAMBIQUE;
			break;
		case 256:
			this.country = CountryCode.UGANDA;
			break;
		default:
			this.country = CountryCode.NOT_AVAILABLE;
			break;

		}

	}

}
