const fnValidar10 = () => {
	let xTexto = document.getElementById("txtNombre").value;
	if(xTexto=="" || /^\s+$/.test(xTexto)) {
		alert("Falta NOMBRE y APELLIDO...");
		return false;
	}

	let xNumero = document.getElementById("txtEdad").value;
	if(xNumero== "") {
		alert("Falta EDAD...");
		return false;
	}

	/// Caso contrario ///
	return true;	
}