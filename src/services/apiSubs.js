import axios from "axios";


const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"



function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getSubs(token) {
    const promise = axios.get(`${BASE_URL}/memberships`, createConfig(token))
    return promise
}

function getSub(token, id_do_plano){
    const promise = axios.get(`${BASE_URL}/memberships/${id_do_plano}`, createConfig(token))
    return promise
}

function signSub(form, token){
    const promise = axios.post(BASE_URL, form, createConfig(token))
    return promise
}

const apiSubs = { getSubs, getSub, signSub }
export default apiSubs