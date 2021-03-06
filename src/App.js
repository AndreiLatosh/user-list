import './App.css';
import UserList from './components/UserList/UserList';
import { useEffect, useMemo, useState } from 'react';
import Paginator from './components/Paginator/Paginator';
import Sort from './components/Sort/Sort';
import { getDate } from './helpers/helpers';
import Popup from './components/Popup/Popup';
import SearchBar from './components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions/users';
import { setUsers } from './reducers/usersReducer';

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState('')
  const [isAsc, setIsAsc] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showPopup, setShowPopup] = useState('none')
  const [deleteId, setDeleteId] = useState(null)
  const [portionNumber, setPortionNumber] = useState(1)
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  const sortedUsers = useMemo(() => {
    if (sortType) {
      if (sortType === 'rating') {
        if (isAsc === true) {
          return [...users].sort((a, b) => a[sortType] - b[sortType])
        } else {
          return [...users].sort((a, b) => b[sortType] - a[sortType])
        }
      }
      if (sortType === 'registration_date') {
        if (isAsc === true) {
          return [...users].sort((a, b) => getDate(a[sortType]) - getDate(b[sortType]))
        } else {
          return [...users].sort((a, b) => getDate(b[sortType]) - getDate(a[sortType]))
        }
      }
    }
    return users
  }, [sortType, users, isAsc])

  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(user => {
      return user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery, sortedUsers])

  const onPageChanged = (page) => {
    setCurrentPage(page)
  }

  const onSortChanged = (type) => {
    setSortType(type);
    setIsAsc(!isAsc);
  }

  const onClearClickHandler = () => {
    setSortType('')
    setSearchQuery('')
    setIsAsc(true)
  }

  const onDeleteHandler = (id) => {
    setDeleteId(id)
    setShowPopup('flex')
  }

  const onYesHandler = () => {
    dispatch(setUsers(users.filter(user => user.id !== deleteId)))
    setShowPopup('none')
  }

  const onNoHandler = () => {
    setShowPopup('none')
  }

  const onSearchChanged = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
    setPortionNumber(1)
  }

  return (
    <div className='App'>
      <h2>???????????? ??????????????????????????</h2>
      <SearchBar
        value={searchQuery}
        onChangeHandler={onSearchChanged}
        onClearClickHandler={onClearClickHandler}
      />
      <Sort
        onSortChanged={onSortChanged}
        sortType={sortType}
      />
      <UserList
        onDeleteHandler={onDeleteHandler}
        users={sortedAndSearchedUsers.slice((currentPage - 1) * 5, currentPage * 5)}
      />
      <Paginator
        totalUsersCount={sortedAndSearchedUsers.length}
        pageSize={5}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        portionNumber={portionNumber}
        setPortionNumber={setPortionNumber}
      />
      <Popup
        onNoHandler={onNoHandler}
        onYesHandler={onYesHandler}
        displayPopup={showPopup}
        onClickHandler={() => setShowPopup('none')}
      />
    </div>
  );
}

export default App;
