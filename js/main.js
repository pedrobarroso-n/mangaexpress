import conectaApi from './conectaApi.js'
const listaDeItens = document.querySelector('[data-lista]');

async function constroiCard () {
    const conexao = await conectaApi();
    listaDeItens.innerHTML = ``;  //iniciar vazio
    conexao.forEach(element => listaDeItens.innerHTML += `
        <div class="conteudo__lista__item">
        <img class="item__capa" src="${element.capa}" alt="capa do manga ${element.titulo} volume ${element.volume}">
        <div class="item__descricao">
        <p>${element.titulo}</p>
        <p>vol.${element.volume}</p>
        </div>
        <div class="item__descricao">
        <p>$ ${element.preco}</p>
        <img class="item__excluir" id=${element.id} src="../image/delete.png" alt="icone de remover manga da lista" >
        </div>
        </div>`
    )
    
    return listaDeItens;
}
constroiCard();
