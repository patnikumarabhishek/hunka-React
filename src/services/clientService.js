import axios from 'axios'

export const clientService = {
    getClients
}

function getClients(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get('http://localhost:8000/api/client', config)
        .then((response) => {
            console.log('response', response)
            return response
        })
        .catch((error) => {
            console.log('error', error.response.data)
            return Promise.reject(error.response.data)
        })
}