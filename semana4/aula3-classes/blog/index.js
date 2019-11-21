class post {
    constructor (titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

let arrayPosts = []

function aoClicarCriarPost() {
    const tituloDoPost = document.getElementById("titulo-post")
    const autorDoPost = document.getElementById("autor-post")
    const conteudoDoPost = document.getElementById("conteudo-post")
    const novoPost = new post(tituloDoPost.value, autorDoPost.value, conteudoDoPost.value)
    arrayPosts.push(novoPost)
    tituloDoPost.value = ""
    autorDoPost.value = ""
    conteudoDoPost.value = ""
    console.log(arrayPosts)
    /* console.log(novoPost.titulo)
    console.log(novoPost.autor)
    console.log(novoPost.conteudo) */
}