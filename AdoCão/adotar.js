function enviaradoc(){
	var a = document.cadastro.nome.value;
	var b = document.cadastro.ende.value;
	var c = document.cadastro.cida.value;
	var d = document.cadastro.esta.value;
	var e = document.cadastro.tele.value;
	var f = document.cadastro.emai.value;
	var x = parseInt(f.indexOf("@"));
	var y = parseInt(f.indexOf("."));
	var g = document.cadastro.anim.value;

	if(a == ""){
		alert("O campo nome é obrigatório.");
		cadastro.nome.focus();
		return false;
	}
	else if(b == ""){
		alert("O campo endereço é obrigatório.");
		cadastro.ende.focus();
		return false;
	}
	else if(c == ""){
		alert("O campo cidade é obrigatório.");
		cadastro.cida.focus();
		return false;
	}
	else if(d == ""){
		alert("O campo estado é obrigatório.");
		cadastro.esta.focus();
		return false;
	}
	else if(e == ""){
		alert("O campo telefone é obrigatório.");
		cadastro.tele.focus();
		return false;
	}
	else if(f == ""){
		alert("O campo e-mail é obrigatório.");
		cadastro.emai.focus();
		return false;
	}
	else if((x == -1) || (y == -1)){
		alert("O e-mail digitado é inválido.");
		cadastro.emai.focus();
		return false;
	}
	else if(g == ""){
		alert("O campo animal é obrigatório.");
		cadastro.anim.focus();
		return false;
	}
	else{
		return true;
	}
}