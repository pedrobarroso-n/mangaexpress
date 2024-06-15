export default async function listaMangas() {
    const conexao = await fetch('http://localhost:3000/mangas');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}
