import axios from 'axios'

const axiosClientInstance = () => axios.create({

  baseURL: '/api',

})

export default axiosClientInstance
