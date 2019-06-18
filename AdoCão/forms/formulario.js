function verificaCAMPOS(){
var a = document.formulario.nome.value;
var b = document.formulario.dat_nas.value;
var c = document.formulario.rg.value;
var d = document.formulario.cpf.value;
var f = document.formulario.ende.value;
var g = document.formulario.bair.value;
var h = document.formulario.estado.value;
var i = document.formulario.muni.value;
var j = document.formulario.tele.value;
var k = document.formulario.email.value;
var m = document.formulario.prod.value;
var n = document.formulario.tipop.value;
var kk = parseInt(k.indexOf("@"));
var kkk = parseInt(k.indexOf("."));
var CPFnumeros = d.substr(0,9);
var CPFdigitos = d.substr(9,2);
var x;
var soma = 0;
var primdig = 0;
var segudig = 0;
var supostosdig = 0;


for(x = 0; x < 9; x++){soma += (CPFnumeros.charAt(x)) * (10 - x);}
primdig = (soma * 10) % 11;
soma = 0;
for(x = 0; x < 9; x++){soma += (CPFnumeros.charAt(x)) * (11 - x);}
soma += primdig * 2;
segudig = (soma * 10) % 11;
soma = 0;
supostosdig = primdig * 10 + segudig;

if(a == ""){
	alert("O campo nome é obrigatório!");
	formulario.nome.focus();
	return false;
}
else if(b == ""){
	alert("O campo data de nascimento é obrigatório!");
	formulario.dat_nas.focus();
	return false;
}
else if(c == ""){
	alert("O campo RG é obrigatório!");
	formulario.rg.focus();
	return false;
}
else if(d == ""){
	alert("O campo CPF é obrigatório!");
	formulario.cpf.focus();
	return false;
}
else if(supostosdig != CPFdigitos || d == "00000000000" || d == "11111111111" || d == "12345678978"){
	alert("O CPF digitado é inválido, por favor digite um CPF válido.");
	formulario.cpf.focus();
	return false;
}
else if(f == ""){
	alert("O campo endereço é obrigatório!");
	formulario.ende.focus();
	return false;
}
else if(g == ""){
	alert("O campo bairro é obrigatório!");
	formulario.bair.focus();
	return false;
}
else if(i == ""){
	alert("O campo município é obrigatório!");
	formulario.muni.focus();
	return false;
}
else if(h == "estado"){
	alert("O campo estado é obrigatório!");
	formulario.estado.focus();
	return false;
}
else if(j == ""){
	alert("O campo telefone é obrigatório!");
	formulario.tele.focus();
	return false;
}
else if(k == ""){
	alert("O campo e-mail é obrigatório!");
	formulario.email.focus();
	return false;
}
else if((kk == -1) || (kkk == -1)){
	alert("O e-mail digitado é inválido, por favor digite um e-mail válido.");
	formulario.email.focus();
	return false;
}
else if(m == ""){
	alert("O campo produto é obrigatório!");
	formulario.prod.focus();
	return false;
}
else if(n == ""){
	alert("O campo tipo de pagamento  é obrigatório!");
	formulario.tipop.focus();
	return false;
}
else{
	return true;
}
}