import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetUserPassword } from '../../features/accounts/accountSlice'

function ResetPassword() {
  const [oldPassword, setOldPassword] = useState('') 
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
     e.preventDefault()
     const data = {old_password: oldPassword, new_password: newPassword}
     data.confirm_password = confirmPassword 
     dispatch(resetUserPassword(data))
  }
  return (
    <div>
        <h3>Reset password</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="password" placeholder='old password'
                 value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='new password'
                 value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='confirm password'
                 value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button>reset password</button>
        </form>
    </div>
  )
}

export default ResetPassword