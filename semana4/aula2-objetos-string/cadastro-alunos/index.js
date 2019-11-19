function cadastraAluno() {
    const nome = document.getElementById("nome-aluno").value
    const idade = document.getElementById("idade-aluno").value
    const email = document.getElementById("email-aluno").value
    const container = document.getElementById("aluno-cadastrado")
    
    container.innerHTML += "<p> Nome: " + nome + "</p>"
    container.innerHTML += "<p> Idade: " + idade + "</p>"
    container.innerHTML += "<p> Email: " + email + "</p>"

    document.getElementById("nome-aluno").value = ""
    document.getElementById("idade-aluno").value = ""
    document.getElementById("email-aluno").value = ""

}