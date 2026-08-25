
function exibirSaudacao() {

    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    if (!nome || !sobrenome) {
        nome = "Usuário";
        sobrenome = "";
    }

    const usuario =` ${nome} ${sobrenome.trim()}`;

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
 
    const elementoSaudacao =
        document.querySelector("#saudacao");

    if (elementoSaudacao) {
        elementoSaudacao.textContent = mensagem;
    }
}

document.addEventListener("DOMContentLoaded", exibirSaudacao);

const btnTema = document.querySelector("#btnTema");

if (btnTema) {
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
}

const btnMenu = document.querySelector("#btnMenu");
const menuLateral = document.querySelector("#menuLateral");

if (btnMenu && menuLateral) {
    btnMenu.addEventListener("click", () => {
        menuLateral.classList.toggle("ativo");
    });
}

const campoBusca = document.querySelector("#campoBusca");

if (campoBusca) {

    campoBusca.addEventListener("input", () => {

        const texto = campoBusca.value.toLowerCase();

        const cards = document.querySelectorAll(".itemBusca");

        cards.forEach(card => {

            const conteudo = card.textContent.toLowerCase();

            if (conteudo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
