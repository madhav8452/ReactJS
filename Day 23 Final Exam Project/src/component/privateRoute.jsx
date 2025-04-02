import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const [state, setState] = useState(localStorage.getItem('isAuthenticated') || false)

  return (
    <>
      {state == 'true' ? children : <Navigate to={'/login'}></Navigate>}
    </>
  )
}

export default PrivateRoute
