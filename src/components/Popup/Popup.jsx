import React from 'react'
import './Popup.css'

const Popup = ({ displayPopup, onClickHandler, onYesHandler, onNoHandler }) => {
    return (
        <div onClick={() => onClickHandler()} className='popup' style={{ display: displayPopup }}>
            <div onClick={e => e.stopPropagation()} className='popup__content'>
                <div className='popup__header'>Вы действительно хотите удалить пользователя?</div>
                <div className='popup__btns'>
                    <div onClick={onYesHandler} className='popup__yes'>Да</div>
                    <div onClick={onNoHandler} className='popup__no'>Нет</div>
                </div>
            </div>
        </div>
    )
}

export default Popup
