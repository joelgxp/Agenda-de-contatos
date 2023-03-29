import { PostSignup } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(signup)
        const dados = Object.fromEntries(fd)
        PostSignup(dados)
            .then((sucesso) => {
                console.log(sucesso.data.nome)
            })
            .catch((erro) => {
                console.log(erro.data.nome)
            })

    })
}

export const Signup = () => {
    signup.innerHTML = `
        <label for="email">E-mail</label>
        <input type="email" name="email">

        <label for="senha">Senha</label>
        <input type="password" name="senha">

        <label for="nome">Nome</label>
        <input type="text" name="nome">

        <button type="submit">Cadastrar</button>
    `
    eventos()
    return signup
}