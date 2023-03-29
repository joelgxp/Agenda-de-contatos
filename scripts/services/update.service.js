const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')

export const PatchUser = async (dados) => {

    const resposta = await fetch(urlBase + 'user', {
        headers,
        method: 'PATCH',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}