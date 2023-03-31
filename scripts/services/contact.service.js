const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')

export const getAllContacts = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}