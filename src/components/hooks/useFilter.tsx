import { SortBy, UserType } from '../../types.d'
import { useState, useMemo } from 'react'
export const useFilter = ({ users }: { users: UserType[] }) => {
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterByCountry, setFilterByCountry] = useState('')

  const toggleSort = () => {
    sorting === SortBy.NONE
      ? setSorting(SortBy.COUNTRY)
      : setSorting(SortBy.NONE)
  }

  const handleFilterByCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByCountry(event.target.value)
  }

  const handleSort = (sort: SortBy) => {
    setSorting(sort)
  }

  const filteredUsers = useMemo(() => {
    return filterByCountry != null && filterByCountry.length > 0
      ? users.filter((user) => {
        return user.location.country
          .toLowerCase()
          .includes(filterByCountry.toLowerCase())
      })
      : users
  }, [filterByCountry, users])

  const filteredUsersClone = structuredClone(filteredUsers)

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: UserType) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LASTNAME]: user => user.name.last
    }

    return filteredUsersClone.sort((a, b) => {
      const extractProperty = compareProperties[sorting]

      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsersClone, sorting, filteredUsers])

  return {
    sortedUsers,
    toggleSort,
    sorting,
    handleFilterByCountry,
    handleSort
  }
}
