import axios from 'axios'

const axiosClientInstance = () => axios.create({

  baseURL: process.env.BASE_API_URL,

})

export default axiosClientInstance
