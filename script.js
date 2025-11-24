let cardContainer = document.querySelector(".card-container");
let dados = [];

// Função para remover acentos de uma string
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function iniciarBusca() {
    const inputBusca = document.getElementById("input-busca");
    // Normaliza o termo de busca: remove acentos e converte para minúsculas
    const termoBusca = removerAcentos(inputBusca.value.toLowerCase());

    let resposta = await fetch("data.json");
    let dados = await resposta.json();

    const dadosFiltrados = dados.filter(dado => {
        // Normaliza o nome do time para a comparação
        const nomeNormalizado = removerAcentos(dado.nome.toLowerCase());
        return nomeNormalizado.includes(termoBusca);
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os resultados anteriores

    for (let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}"target="_blank"> Saiba mais</a>
        ` 
        cardContainer.appendChild(article); 
    }

}