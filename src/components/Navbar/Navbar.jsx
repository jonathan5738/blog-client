import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../features/accounts/accountSlice'

function Navbar() {
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(logoutUser())}>logout</button>
    </div>
  )
}

export default Navbar