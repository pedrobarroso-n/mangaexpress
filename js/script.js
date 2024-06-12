function autoYear() {
    const year = new Date().getFullYear();
    document.querySelector('.rodape__descricao > p + p').innerHTML += ` ${year}`;
}
