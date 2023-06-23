function fnValidar02() {
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre === "" || /^\s+$/.test(xNombre)) {
        alert("Escriba su nombre");
        return false;
    }

    let preferencias = document.getElementsByName("preferencia");
    let contador = 0;
    for (let i = 0; i < preferencias.length; i++) {
        if (preferencias[i].checked) {
            contador++;
        }
    }

    if (contador < 3) {
        alert("Seleccione al menos 3 preferencias");
        return false;
    }

    return true;
}
