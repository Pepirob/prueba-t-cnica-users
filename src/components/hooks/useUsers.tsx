import { useState, useEffect, useRef } from 'react'
import { UserType } from '../../types'
import { getUsers } from '../../services/usersService'
export const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const usersRestore = useRef<UserType[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getUsers()
    setUsers(data.results)
    usersRestore.current = data.results
  }

  const handleDelete = (id: string) => {
    const newState = users.filter(user => user.id.value !== id)

    setUsers(newState)
  }

  const restoreData = () => {
    setUsers(usersRestore.current)
  }

  return { users, handleDelete, restoreData }
}
