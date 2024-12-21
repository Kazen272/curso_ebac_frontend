const form = document.getElementById("formulario");

form.addEventListener('submit', function (e) {
    let formValido = false;
    e.preventDefault();
}
);

function validaNumero() {
    const numeroA = parseFloat(document.getElementById("numberA").value);
    const numeroB = parseFloat(document.getElementById("numberB").value);

    if (numeroB > numeroA){
        return alert("Numero B é maior que o Numero A");
    }else{
        alert("Numero B não é maior que o Numero A");
    }
}
