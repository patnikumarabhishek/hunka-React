import axios from 'axios'

export const userService = {
    login,
    register,
    getuserProfileData
};

function login(email, password) {
    const requestOptions = {
        body: { email, password }
    };

    return axios.post('http://localhost:8000/api/login', requestOptions.body)
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data);
      })
}

function register(name, email, mobile, password) {
    const requestOptions = {
        body: { fullname: name, email, mobile, password }
    };

    return axios.post('http://localhost:8000/api/register', requestOptions.body)
      .then((response) => {
          console.log(response)
          return response
      })
      .catch((error) => {
          console.log(error.response.data)
          return Promise.reject(error.response.data)
      })
}

function getuserProfileData(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    return axios.get('http://localhost:8000/api/user', config)
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            return Promise.reject(error.response.data)
        })
}