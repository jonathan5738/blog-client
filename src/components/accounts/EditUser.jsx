import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserAction } from '../../features/accounts/accountSlice'
function EditUser() {
  const currentUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_PROFILE))
  const [username, setUsername] = useState(currentUser?.username) 
  const [firstName, setFirstName] = useState(currentUser?.first_name)
  const [lastName, setLastName] = useState(currentUser?.last_name)
  const [email, setEmail] = useState(currentUser?.email) 
  const dispatch = useDispatch()
  const status = useSelector(state => state.accounts.status)

  const handleSubmit = e => {
     e.preventDefault() 
     const data = {username, first_name: firstName, last_name: lastName, email}
     dispatch(editUserAction(data))
  }
  return (
    <div>
        <h3>Edit your profile</h3>
        {status === 'succeed' && (
            <p>user edited successfully</p>
        )}
        {status === 'failed' && (
            <p>user unhanble to edit profile</p>
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
            <button>sign in</button>
        </form>
    </div>
  )
}

export default EditUser