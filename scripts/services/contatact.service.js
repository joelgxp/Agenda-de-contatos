const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')

export const PostGetAllContacts = async () => {
    headers.append('Authorization', sessionStorage.getItem('@token'))

    const resposta = await fetch(urlBase + 'contact', {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}