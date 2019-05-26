function builtTr(contact) {
	var contactTr = document.createElement("tr");
	contactTr.classList.add("contact");

	contactTr.appendChild(builtTd(contact.name, "cName"));
	contactTr.appendChild(builtTd(contact.phone, "cPhone"));
	contactTr.appendChild(builtTd(contact.country, "cCountry"));
	contactTr.appendChild(builtTd(contact.state, "cState"));

	return contactTr;
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