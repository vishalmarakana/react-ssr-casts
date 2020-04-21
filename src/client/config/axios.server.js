import axios from 'axios'

const axiosServerInstance = (req) => axios.create({

  baseURL: 'https://react-ssr-api.herokuapp.com',

  headers: { authCookie: req.get('authCookie') || '' }

})

export default axiosServerInstance
