function validar() {

    let nombre = document.formulario.txt_nombre.value
    let numero = document.formulario.txt_numero.value
    let asunto = document.formulario.txt_asunto.value
    let descripcion = document.formulario.txt_descripcion.value



    let expNombre = /^[a-zA-Z]{1,}$/;
    if (!expNombre.test(nombre)) {
        alert("El nombre es obligatorio\nNo poner numeros \n  **Gracias** ");
        document.formulario.txt_nombre.focus();
        return false;
    }



    let expNumero = /^(\s?)[98765432]\d{7}$/;
    if (!expNumero.test(numero)) {
        alert("Numero es obligatorio\nNo poner letras y solo este formato  \n  9 12345678 \n  **Gracias**");
        document.formulario.txt_numero.focus();
        return false;
    }



    if (asunto == "Seleccione") {
        alert("Tipo de asunto es obligatoria");
        document.formulario.txt_asunto.focus();
        return false;
    }

    var exp_descripcion = /^[a-zA-Z]{20,300}$/;
    if (!exp_descripcion.test(descripcion)) {
        alert("        *** Minimo 20 y Maximo 300 Caracteres ***  ");
        document.formulario.txt_descripcion.focus();
        return false;
    }

    alert("Todos los datos son correctos");




}
