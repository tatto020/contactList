var button = document.querySelector("#get-list");

button.addEventListener("click", function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET","Controller");
	xhr.addEventListener("load",function(){

		if(xhr.status==200){
			var response = xhr.responseText;
			var contactList = JSON.parse(response);

			contactList.forEach(function(contact){
				addContactToList(contact);
			});
		}else{
			console.log(xhr.status);
			
		}
	});
	xhr.send();

});