const cardContact = document.createElement('div')
cardContact.setAttribute('class', 'c-card-contact')

export const CardContact = (contato) => {
    cardContact.innerHTML = `
        <p>${contato.nome}</>
        <a href="contact-detail">Visualizar</a>
    `

    return cardContact.cloneNode(true)
}