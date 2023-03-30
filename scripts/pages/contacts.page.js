import { cardContact } from "../components/card-contact.component.js"
import { Header } from "../components/header.component.js"
import { PostGetAllContacts } from "../services/contatact.service.js"

const root = document.querySelector('#root')
const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')

const eventos = () => {
    PostGetAllContacts()
        .then(({data}) => {
            const divContatos = contacts.querySelector('#contatos')
            // data é um array de contatos então eu tenho contato como item
            data.forEach(contato => {
                const cardContact = cardContact(contato)
                divContatos.appendChild(cardContact)
            });
            //console.log(sucesso)
        })
        .catch((erro) => {
            console.log(erro)
        })
}

export const Contacts = () => {

    root.append(Header)
    contacts.innerHTML = `
        <h1>Contatos</h1>
        <div id="contatos"></div>
    `

    eventos()
    return contacts
}