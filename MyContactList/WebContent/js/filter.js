
var filter = document.querySelector("#list-filter");

filter.addEventListener("input", function(){

	var option = document.querySelector("#fOption option:checked").id;
	var search = this.value;
	switch (option){
	case "0":
		name(search);
		break;

	case "1":
		country(search);
		break;

	case "2":
		phone(search);
		break;
		
	default:
		name(search);
	break;
	}

});


function name(search){
	var contacts = document.querySelectorAll(".contact");

	if(search.length > 0){
		for (var i = 0; i < contacts.length; i++) {
			var contact		= contacts[i];
			var tdName 		= contact.querySelector(".cName");
			var name 		= tdName.textContent;
			var express		 = new RegExp(search,"i");
			if(!express.test(name)){
				contact.classList.add("invisible");
			}else{				
				contact.classList.remove("invisible");
			}

		}
	}else{
		for (var i = 0; i < contacts.length; i++) {
			var contact = contacts[i];
			contact.classList.remove("invisible");

		}
	}
}

function country(search){
	var contacts = document.querySelectorAll(".contact");

	if(search.length > 0){
		for (var i = 0; i < contacts.length; i++) {
			var contact		= contacts[i];
			var tdCountry 		= contact.querySelector(".cCountry");
			var country 		= tdCountry.textContent;
			var express		 = new RegExp(search,"i");
			if(!express.test(country)){
				contact.classList.add("invisible");
			}else{				
				contact.classList.remove("invisible");
			}

		}
	}else{
		for (var i = 0; i < contacts.length; i++) {
			var contact = contacts[i];
			contact.classList.remove("invisible");

		}
	}
}

function phone(search){
	var contacts = document.querySelectorAll(".contact");

	if(search.length > 0){
		for (var i = 0; i < contacts.length; i++) {
			var contact		= contacts[i];
			var tdPhone 		= contact.querySelector(".cPhone");
			var phone 		= tdPhone.textContent;
			var express		 = new RegExp(search,"i");
			if(!express.test(phone)){
				contact.classList.add("invisible");
			}else{				
				contact.classList.remove("invisible");
			}

		}
	}else{
		for (var i = 0; i < contacts.length; i++) {
			var contact = contacts[i];
			contact.classList.remove("invisible");

		}
	}
}