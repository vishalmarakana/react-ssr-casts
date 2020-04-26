import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = ({ staticContext }) => {

  if (staticContext) {

    staticContext.notFound = true

  }

  return (

    <>

      <Helmet>

        <title>REACT SSR - PAGE NOT FOUND</title>

      </Helmet>

      404 PAGE NOT FOUND

    </>

  )

}

export default NotFound
