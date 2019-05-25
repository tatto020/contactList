var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	var paciente = novoPaciente(form);
	var pacienteTr = montaTr(paciente);
	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMsgsErros(erros);
		return;
	}

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();
	var msgsErr = document.querySelector("#mensagens-erro");
	msgsErr.innerHTML = "";
});

function novoPaciente(form) {

	var paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(!validaPeso(paciente.peso)){
		erros.push("Peso Invalido");
	}
	if(!validaAltura(paciente.altura)){
		erros.push("Altura Invalida");
	}
	if(		paciente.peso.length < 1 
			|| paciente.altura.length < 1
			|| paciente.nome.length < 1
			|| paciente.gordura.length < 1){
		erros.push("Form invalido, campo vazio.")
	}
	return erros;

}

function exibeMsgsErros(erros){
//	var msgErr = document.querySelector("#mensagem-erro");
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML ="";

	erros.forEach(function(erro){ // For each, para cada item do ERROS
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})

}