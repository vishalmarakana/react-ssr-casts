import axios from 'axios'

const request = axios.create({

  baseURL: 'https://react-ssr-api.herokuapp.com',

})

export default request
