import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getSubs(token) {
    const promise = axios.get(BASE_URL, createConfig(token))
    return promise
}

const apiSubs = { getSubs }
export default apiSubs