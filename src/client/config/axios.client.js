import axios from 'axios'

const dev = process.env.NODE_ENV === 'development'
const axiosClientInstance = () => axios.create({

  baseURL: dev ? 'https://react-ssr-api.herokuapp.com' : '/api',

})

export default axiosClientInstance
