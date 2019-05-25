
var filter = document.querySelector("#list-filter");

filter.addEventListener("input", function(){

	var contacts = document.querySelectorAll(".contact");

	if(this.value.length > 0){
		for (var i = 0; i < contacts.length; i++) {
			var contact		= contacts[i];
			var tdName 		= contact.querySelector(".cName");
			var name 		= tdName.textContent;
			var express		 = new RegExp(this.value,"i");
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

});