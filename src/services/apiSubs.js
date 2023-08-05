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

function getSub(token){
    const promise = axios.get(`${BASE_URL}/memberships/ID_DO_PLANO`, createConfig(token))
    return promise
}

function signSub(token){
    const promise = axios.post(BASE_URL, createConfig(token))
    return promise
}

const apiSubs = { getSubs, getSub, signSub }
export default apiSubs