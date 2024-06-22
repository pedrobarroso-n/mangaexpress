import conectaApi from './conectaApi.js'
const listaDeItens = document.querySelector('[data-lista]');
const btnAdiconarManga = document.getElementById('adicionar');

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
    const btnExcluirManga = document.querySelectorAll('.item__excluir');
    btnExcluirManga.forEach(manga => manga.addEventListener('click', async function() {
        const conexao = await fetch(`http://localhost:3000/mangas/${manga.id}`, {
            method: 'DELETE', 
            headers: {"Content-type": "application/json"}
        })
        return constroiCard();
    }))
}
excluirManga()

const adicionarManga = async function() {
    const titulo = document.getElementById('titulo').value;
    const volume = document.getElementById('volume').value;
    const preco = document.getElementById('preco').value;
    const capa = document.getElementById('capa').value;
    const conexao = await fetch('http://localhost:3000/mangas', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            'titulo': titulo,
            'volume': volume,
            'preco': preco,
            'capa': capa
        })
    })
}
btnAdiconarManga.addEventListener("click", adicionarManga)
