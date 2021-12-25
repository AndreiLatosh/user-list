import './Sort.css'

const Sort = ({ onSortChanged, sortType }) => {

    return (
        <div className='sort'>
            <div>Сортировка: </div>
            <div className={sortType === 'registration_date' ? 'selected' : null}
                onClick={() => onSortChanged('registration_date')}>Дата регистрации</div>
            <div className={sortType === 'rating' ? 'selected' : null}
                onClick={() => onSortChanged('rating')}>Рейтинг</div>
        </div>
    )
}

export default Sort
