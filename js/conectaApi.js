export default async function conectaApi() {
    try {
        const conexao = await fetch('http://localhost:3000/mangas');
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch(e) {
        console.log(e)
        alert('Erro! Problemas de conexão, porfavor aguarde')
    }
}
