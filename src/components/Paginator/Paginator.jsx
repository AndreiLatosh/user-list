import React from 'react'
import './Paginator.css'

const Paginator = ({ totalUsersCount, pageSize = 5, onPageChanged, currentPage, portionSize = 5, portionNumber, setPortionNumber }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className='paginator'>
            {portionNumber > 1 &&
                <div onClick={() => setPortionNumber(portionNumber - 1)} className='page'>&larr;</div>
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page =>
                    <div key={page} onClick={() => onPageChanged(page)} className={page === currentPage ? 'page selected' : 'page'} >{page}</div>)
            }
            {portionNumber < portionCount &&
                <div onClick={() => setPortionNumber(portionNumber + 1)} className='page'>&rarr;</div>
            }
        </div>
    )
}

export default Paginator
