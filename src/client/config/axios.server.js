import axios from 'axios'

const axiosServerInstance = (req) => {

  const cookie = req.get('cookie') || ''

  return axios.create({

    baseURL: 'https://react-ssr-api.herokuapp.com',

    headers: {

      cookie,

    }

  })

}

export default axiosServerInstance
