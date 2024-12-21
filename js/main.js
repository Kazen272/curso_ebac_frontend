const form = document.getElementById("formulario");

form.addEventListener('submit', function (e) {
    let formValido = false;
    e.preventDefault();
});

function validaNumero() {
    const numeroA = parseFloat(document.getElementById("numberA").value);
    const numeroB = parseFloat(document.getElementById("numberB").value);
    const mensagemSucesso = document.querySelector(".success-message");
    const mensagemErro = document.querySelector(".error-message");

    if (numeroB > numeroA){
        mensagemSucesso.style.display = "block"; // Mostra a mensagem de sucesso
        mensagemErro.style.display = "none";    // Esconde a mensagem de erro
    }else{
        mensagemSucesso.style.display = "none"; // Esconde a mensagem de sucesso
        mensagemErro.style.display = "block";  // Mostra a mensagem de erro
    if (!numeroA && !numeroB) {
        mensagemSucesso.style.display = "none"; // Esconde a mensagem de sucesso
        mensagemErro.style.display = "none"; // Esconde a mensagem de Erro
        }
    }
    
} 

