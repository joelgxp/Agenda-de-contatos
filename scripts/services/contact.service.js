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

export const getContact = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'GET'
    })

    return await resposta.json()
}

export const postContact = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'POST'
    })

    return await resposta.json()
}

export const patchContact = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'PATCH'
    })

    return await resposta.json()
}

export const deleteContact = async () => {
    const url = urlBase + 'contact'
    headers.append('Authorization', `${sessionStorage.getItem('@token')}`)

    const resposta = await fetch(url, {
        headers,
        method: 'DELETE'
    })

    return await resposta.json()
}