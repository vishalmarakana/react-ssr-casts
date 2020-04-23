import React from 'react'

const NotFound = ({ staticContext }) => {

  if (staticContext) {

    staticContext.notFound = true

  }

  return (

    <div>
      404 PAGE NOT FOUND
    </div>

  )

}

export default NotFound
