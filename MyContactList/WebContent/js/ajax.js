//var button = document.querySelector("#get-list");

//button.addEventListener("click", function(){
window.onload = ajax;


function ajax(){
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
			var response = xhr.responseText;
			console.log(response);
			console.log(xhr.status);

		}
	});
	xhr.send();

}