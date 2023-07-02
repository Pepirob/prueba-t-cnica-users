
import './App.css'
import Header from './components/Header'
import ListOfUsers from './components/ListOfUsers'
import { useState, useCallback } from 'react'
import { useUsers } from './components/hooks/useUsers'
import { useFilter } from './components/hooks/useFilter'

function App () {
  const { users, handleDelete, restoreData } = useUsers()
  const [showColor, setShowcolor] = useState(false)
  const {
    sortedUsers,
    toggleSort,
    sorting,
    handleFilterByCountry,
    handleSort
  } = useFilter({ users })

  const handleToggleColor = useCallback(() => setShowcolor(!showColor), [showColor])

  return (
    <>
      <Header
        sorting={sorting}
        toggleColor={handleToggleColor}
        toggleSort={toggleSort}
        restoreData={restoreData}
        filterByCountry={handleFilterByCountry}
      />
      <ListOfUsers
        handleSort={handleSort}
        deleteUser={handleDelete}
        users={sortedUsers}
        showColor={showColor}
      />
    </>
  )
}

export default App
