const fnValidar01 = () => {

	var xTexto1 = document.getElementById("txtTexto1").value;
	if(xTexto1=="" || /^\s+$/.test(xTexto1)) {
		alert("Falta TEXTO...");
		return false;
	}

    var xNumero1 = document.getElementById("txtNumero1").value;
	if(xNumero1== "") {
		alert("Falta NÚMERO...");
		return false;
	}

    var xNumero3 = document.getElementById("txtNumero2").value;
	if(!(/^\d{3}\s\d{3}$/.test(xNumero1))) {
		alert("Falta Numero de 2 dijitos...");
		return false;
	}

    return true;    
}