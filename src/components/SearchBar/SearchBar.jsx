import React from 'react'
import './SearchBar.css'

const SearchBar = ({ value, onChangeHandler, onClearClickHandler }) => {
    return (
        <div className='search'>
            <div className='search__input'>
                <input
                    value={value}
                    onChange={e => onChangeHandler(e.target.value)}
                    placeholder='Поиск по имени или e-mail'
                />
            </div>
            <div className='search__btn'>
                <button onClick={onClearClickHandler}>Очистить фильтр</button>
            </div>
        </div>
    )
}

export default SearchBar
