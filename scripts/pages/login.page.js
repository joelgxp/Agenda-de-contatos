import { AuthService } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const eventos = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dados = Object.fromEntries(fd)
        
        AuthService(dados)
            .then(({data}) => {
                sessionStorage.setItem('@token', data.token)
                location.href = '#contacts'
            })
            .catch(({data}) => { // desestruturação
                console.log(erro)
            })
    })
}

export const Login = () => {
    login.innerHTML = `
        <label for="usuario">E-mail</label>
        <input type="email" name="email" id="email">

        <label for="senha">Senha</label>
        <input type="password" name="senha" id="senha">

        <fieldset>
            <input type="checkbox" name="salvar" id="salvar"  value="salvar">
            <label for="salvar">Salvar login?</label>
        </fieldset>

        <button type="submit">Entrar</button>

        <br>
        <p>Não tem conta? 
        <a href="#signup"> Crie aqui</a>
        </p>
    `
    eventos()
    return login
}