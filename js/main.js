import conectaApi from './conectaApi.js'
const listaDeMangas = document.querySelector('[data-lista]');

async function constroiCard () {
    const conexao = await conectaApi();
    listaDeMangas.innerHTML = ``;  //iniciar vazio
    conexao.forEach(element => listaDeMangas.innerHTML += `
        <div class="conteudo__lista__item">
        <img src="${element.capa}" alt="capa do manga ${element.titulo} volume ${element.volume}">
        <div class="item__descricao">
        <p>${element.titulo}</p>
        <p>vol.${element.volume}</p>
        </div>
        <div class="item__descricao">
        <p>R$ ${element.preco}</p>
        <img src="../image/delete.png" alt="icone de remover manga da lista">
        </div>
        </div>
        `)

    return listaDeMangas;
}
constroiCard();
