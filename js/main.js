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
await constroiCard(); //await para carregar os botoes de exclusão

function excluirManga() {
    const btnExcluirmanga = document.querySelectorAll('.item__excluir');
    btnExcluirmanga.forEach(manga => manga.addEventListener('click', async function() {
        const conexao = await fetch(`http://localhost:3000/mangas/${manga.id}`, {
            method: 'DELETE', 
            headers: {"Content-type": "application/json"}
        })
        constroiCard();
    }))
}
excluirManga()

console.log(document.getElementById('titulo'))
