import axios from 'axios'

export const roleService = {
    getRoles
}

function getRoles(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    return axios.get('http://localhost:8000/api/roles', config)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            return Promise.reject(error.response.data)
        })
}