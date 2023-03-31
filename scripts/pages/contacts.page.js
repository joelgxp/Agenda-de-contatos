import { SignupService } from "../services/user.service.js"

const update = document.createElement('form')
contacts.setAttribute('id', 'p-contacts')

const eventos = () => {
    update.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(update)
        const dados = Object.fromEntries(fd)
        SignupService(dados)
            .then((sucesso) => {
                console.log(sucesso.data.nome)
            })
            .catch((erro) => {
                console.log(erro.data.nome)
            })

    })
}

export const Contacts = () => {
    contacts.innerHTML = `
       <h1>lkj</h1>
    `
    eventos()
    return contacts
}