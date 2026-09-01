document.addEventListener("DOMContentLoaded", function() {
    
    function exibirSaudacao() {
        let nome = prompt("Digite seu nome:");
        let sobrenome = prompt("Digite seu sobrenome:");
        
        if (!nome || !sobrenome) {
            nome = "Usuário";
            sobrenome = "";
        }
        
        const usuario = `${nome} ${sobrenome}`.trim();
        const agora = new Date();
        
        const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
        const diaSemana = diasSemana[agora.getDay()];
        const diaMes = String(agora.getDate()).padStart(2, '0');
        const mes = String(agora.getMonth() + 1).padStart(2, '0');
        const ano = agora.getFullYear();
        const hora = String(agora.getHours()).padStart(2, '0');
        const minuto = String(agora.getMinutes()).padStart(2, '0');

        const dataAtual = `${diaSemana}, ${diaMes}/${mes}/${ano} - ${hora}:${minuto}`;
        const mensagem = `Olá, ${usuario}! Hoje é ${dataAtual}`;

        const elementoSaudacao = document.querySelector("#saudacao");
        if (elementoSaudacao) {
            elementoSaudacao.textContent = mensagem;
        }
    }

    exibirSaudacao();
    
    // Filtro de Busca
    const inputBusca = document.querySelector("#campoBusca");
    const itensTabela = document.querySelectorAll(".item-tabela");

    if (inputBusca) {
        inputBusca.addEventListener("input", function(e) {
            const termo = e.target.value.toLowerCase();

            itensTabela.forEach(item => {
                const texto = item.textContent.toLowerCase();
                if (texto.includes(termo)) {
                    item.style.display = ""; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    }
    
    
    const btnTema = document.querySelector("#btnTema");
    if (btnTema) {
        btnTema.addEventListener("click", function() {
            document.body.classList.toggle("dark-theme");
        });
    }
    
    
    const btnMenu = document.querySelector("#btnMenuToggle");
    const sidebar = document.querySelector("#sidebar");

    if (btnMenu && sidebar) {
        btnMenu.addEventListener("click", function(event) {
            event.preventDefault();
            
            if (sidebar.style.display === "none") {
                sidebar.style.display = "block";
            } else {
                sidebar.style.display = "none";
            }
        });
    }
    
    
    const metricas = document.querySelectorAll(".valor-metrica");
    if (metricas.length > 0) {
        setInterval(function() {
            metricas.forEach(metrica => {
                let valorAtual = parseInt(metrica.textContent) || 20;
                let variacao = Math.floor(Math.random() * 5) - 2;
                metrica.textContent = valorAtual + variacao;
            });
        }, 3000);
    }

    
    const formParametrizacao = document.querySelector("#formParametrizacao");
    if (formParametrizacao) {
        formParametrizacao.addEventListener("submit", function(e) {
            e.preventDefault();
            const ipInput = document.querySelector("#ipDispositivo").value;
            const emailInput = document.querySelector("#emailContato").value;

            const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regexIP.test(ipInput)) {
                alert("Endereço IP inválido!");
                return;
            }

            if (!regexEmail.test(emailInput)) {
                alert("E-mail inválido!");
                return;
            }

            alert("Parâmetros salvos com sucesso!");
            formParametrizacao.reset();
        });
    }
});
