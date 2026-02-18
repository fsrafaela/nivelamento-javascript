let app = "MinhaApp";

function mostrarInfo() {
    let versao = "1.0";
    console.log(app);
    console.log(versao);
}

mostrarInfo();

function executarTarefa(nomeTarefa, callback) {
    console.log("Iniciando: " + nomeTarefa);
    callback();
}

executarTarefa("Backup do sistema", () => {
    console.log("Tarefa concluída!");
});

async function buscarPerfil() {
    return "Perfil carregado: Usuário Padrão";
}

buscarPerfil().then(resultado => {
    console.log(resultado);
});
