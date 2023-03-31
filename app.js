import { NotFound } from './scripts/pages/404.page.js'
import {Login} from './scripts/pages/login.page.js'
import { Signup } from './scripts/pages/signup.page.js'
import { Update } from './scripts/pages/update.page.js'

function redirectPage() {

    const ROUTER = {
        "#login": { component: Login, private: false},
        "#404": { component: NotFound, private: false},
        "#signup": {component: Signup, private: false},
        "#contacts": {component: Contacts, private: false}
    }

    const route = ROUTER[window.location.hash] || ROUTER['#404']

    const root = document.querySelector('#root')
    root.innerHTML = null
    root.append(route.component())
}

window.addEventListener('load', () => {

    if(!window.location.hash) {
        window.location.href = '#login'
    }
    
    redirectPage()

    window.addEventListener('hashchange', redirectPage)
})