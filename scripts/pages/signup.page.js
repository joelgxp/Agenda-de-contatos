import { SignupService } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const eventos = () => {
    signup.addEventListener('submit', (e) => {
        e.preventDefault()

        const msg = signup.querySelector('span')

        const fd = new FormData(signup)
        const dados = Object.fromEntries(fd)
        
        SignupService(dados)
            .then((resposta) => {

                if(resposta.status === 409) {
                    msg.innerText = resposta.mensagem     
                    
                    setTimeout(() => {
                        msg.innerText = null
                    }, 3000)
                }
                else if(resposta.status === 200) {
                    window.location.href = '#login'
                }
            })
            .catch((erro) => {
                msg.innerText = 'Erro interno'
                console.error(erro)
            })

    })
}

export const Signup = () => {
    signup.innerHTML = `
    <label for="nome">Nome</label>
    <input type="text" name="nome" required>
    
    <label for="email">E-mail</label>
    <input type="email" name="email" required>
    
    <label for="senha">Senha</label>
    <input type="password" name="senha" required>

        <button type="submit">Cadastrar</button>
    `
    eventos()
    return signup
}