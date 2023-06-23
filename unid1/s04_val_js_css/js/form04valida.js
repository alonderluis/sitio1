const fnValidar04 = () => {

    let elementoPref = document.getElementsByName("chkPrefer1");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	} 

    if(!eligioPreferencia){
		alert("Debe elegir 2 opciones...");
		return false;
	}else{
		alert("Su preferencias son " + valorElegidoPreferencia );
	}

    /// Caso contrario ///
	return true;
}