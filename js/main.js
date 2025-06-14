$(document).ready(function() {
    // Evento de submit do formulário
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Capturar o valor da tarefa
        var tarefa = $('#tarefa').val();

        // Limpar o campo de input
        $('#tarefa').val('');

        // Adicionar a tarefa na lista
        $('#listaTarefas').append('<li><a href="#">' + tarefa + '</a></li>');
    });

    // Evento de clique nas li (usando delegação de eventos)
    $('#listaTarefas').on('click', 'li', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        $(this).toggleClass('tarefa-Concluida');
    });
});