
function exibirSaudacao() {

    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    if (!nome || !sobrenome) {
        nome = "Usuário";
        sobrenome = "";
    }

    const usuario = `${nome} ${sobrenome}`.trim();
 
    const agora = new Date();

    const diasSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    const diaSemana = diasSemana[agora.getDay()];

    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const dataAtual =
        `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (-03:00)`;

    const mensagem =
        `Olá, ${usuario}! Hoje é ${dataAtual}`;

    console.log(mensagem);

    const elementoSaudacao = document.querySelector("#saudacao");

    if (elementoSaudacao) {
        elementoSaudacao.textContent = mensagem;
    }
}

document.addEventListener("DOMContentLoaded", exibirSaudacao);
