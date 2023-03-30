const header = document.createElement('header')
header.setAttribute('id', 'c-header')

const eventos = () => {
    const sair = header.addEventListener('click', (e) => {
        e.preventDefault()
        console.log("Clicou no sair!")
    })
}

export const Header = () => {
    header.innerHTML = `
        <span>Samir</span>
        <a href="#login">Sair</a>
    `

    eventos()
    return header
}