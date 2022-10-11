import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../features/accounts/accountSlice'
function Login() {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const status = useSelector(state => state.accounts.status)
  const dispatch = useDispatch()
  const handleSubmit = e => {
     e.preventDefault()
     const data = {username, password} 
     dispatch(loginUser(data))
  }
  return (
    <div>
        <h3>Log user in</h3>
        {status === 'succeed' && (
            <p>user successfully logged in</p>
        )}
        {status === 'failed' && (
            <p>something went wrong</p>
        )}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}  placeholder="username"/>
            </div>
            <div>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}  placeholder="password"/>
            </div>
            <button>log in</button>
        </form>
        <p>Do you need an account? <Link to="/accounts/signin">sign in</Link></p>
    </div>
  )
}

export default Login