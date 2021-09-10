import axios from 'axios'

export const vacanciesService = {
    getVacancies
};

function getVacancies(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    return axios.get('http://localhost:8000/api/vacancies', config)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            return Promise.reject(error.response.data)
        })
}