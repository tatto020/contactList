function builtTr(contact) {
	var contactTr = document.createElement("tr");
	contactTr.classList.add("contact");

	contactTr.appendChild(builtTd(contact.name, "cName"));
	contactTr.appendChild(builtTd(contact.phone, "cPhone"));
	contactTr.appendChild(builtTd(getCountry(contact.phone), "cCountry"));

	return contactTr;
}

function getCountry(phone){
	var regExCameroon 	= new RegExp("(237)");
	var regExEtiophia 	= new RegExp("(251)");
	var regExMorocco  	= new RegExp("(212)");
	var regExMozambique = new RegExp("(258)");
	var regExUganada	= new RegExp("(256)");
	
	if(regExCameroon.test(phone)){
		return "Cameroon";		
	}else if(regExEtiophia.test(phone)){
		return "Ethiopia";
	}else if(regExMorocco.test(phone)){
		return "Morocco";
	}else if(regExMozambique.test(phone)){
		return "Mozambique";
	}else if(regExUganada.test(phone)){
		return "Uganada";
	}

}

function builtTd(data, cClass) {
	var td = document.createElement("td");
	td.classList.add(cClass);
	td.textContent = data;

	return td;
}

function addContactToList(contact){
	var contactTr = builtTr(contact);
	var table = document.querySelector("#table-rows");
	table.appendChild(contactTr);
}