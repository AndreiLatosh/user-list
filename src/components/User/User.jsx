import React from 'react'
import { convertDate } from '../../helpers/helpers'
import './User.css'

const User = ({ user, onDeleteHandler }) => {
    return (
        <div className='user'>
            <div className='user__name'>{user.username}</div>
            <div className='user__email'>{user.email}</div>
            <div className='user__date'>{convertDate(user.registration_date)}</div>
            <div className='user__raiting'>{user.rating}</div>
            <div className='user__delete' onClick={() => onDeleteHandler(user.id)}>X</div>
        </div>
    )
}

export default User

