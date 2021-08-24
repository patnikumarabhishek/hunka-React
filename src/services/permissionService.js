import axios from 'axios'

export const permissionService = {
    getPermissions
}

function getPermissions(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get('http://localhost:8000/api/permissions', config)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            return Promise.reject(error.response.data)
        })
}