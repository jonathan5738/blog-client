import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUser } from '../../features/accounts/accountSlice'

function SignIn() {
  const [username, setUsername] = useState('') 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const status = useSelector(state => state.accounts.status)

  const handleSubmit = e => {
    e.preventDefault()
    const data = {username, first_name: firstName, last_name: lastName, email, password}
    dispatch(signUser(data))
  }
  return (
    <div>
        <h3>Sign user in</h3>
        {status === 'succeed' && (
            <p>user successfully logged in</p>
        )}
        {status === 'failed' && (
            <p>something went wrong</p>
        )}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='username'
                 value={username}  onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder='first name'
                 value={firstName}  onChange={e => setFirstName(e.target.value)}/>

                 <input type="text" placeholder='last name' value={lastName}
                   onChange={e => setLastName(e.target.value)}
                  />
            </div>
            <div>
                <input type="email" placeholder='email'
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='password'
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button>sign in</button>
        </form>
        <p>Do you already have an account? <Link to="/accounts/login">log in</Link></p>
    </div>
  )
}

export default SignIn