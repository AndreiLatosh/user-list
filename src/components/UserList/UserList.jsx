import React from 'react'
import User from '../User/User'
import './UserList.css'

const Userlist = ({users, onDeleteHandler}) => {


    return (
        <div className='filelist'>
            <div className='filelist__header'>
                <div className='filelist__name'>Имя пользователя</div>
                <div className='filelist__email'>E-mail</div>
                <div className='filelist__date'>Дата регистрации</div>
                <div className='filelist__raiting'>Рейтинг</div>
            </div>
            {users.map(user => <User onDeleteHandler={onDeleteHandler} key={user.id} user={user} />)}
        </div>
    )
}

export default Userlist

