const form = document.getElementById("formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

function validaNumero() {
    const numeroA = parseFloat(document.getElementById("numberA").value);
    const numeroB = parseFloat(document.getElementById("numberB").value);
    const mensagemSucesso = document.querySelector(".success-message");
    const mensagemErro = document.querySelector(".error-message");

    if (isNaN(numeroA) || isNaN(numeroB)) {
        mensagemSucesso.style.display = "none";
        mensagemErro.style.display = "none";
        return;
    }

    if (numeroB > numeroA) {
        mensagemSucesso.style.display = "block"; // Mostra a mensagem de sucesso
        mensagemErro.style.display = "none";    // Esconde a mensagem de erro
    } else {
        mensagemSucesso.style.display = "none"; // Esconde a mensagem de sucesso
        mensagemErro.style.display = "block";  // Mostra a mensagem de erro
    }
}