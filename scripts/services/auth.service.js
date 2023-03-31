const urlBase = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('content-type', 'application/json')

export const AuthService = async (dados) => {
    
    const resposta = await fetch(urlBase + 'auth', {
        headers,
        method: 'POST',
        body: JSON.stringify(dados)
    })

    return await resposta.json()
}