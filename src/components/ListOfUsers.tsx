import User from './User'
import { SortBy, UserType } from '../types.d'

function ListOfUsers ({
  users,
  showColor,
  deleteUser,
  handleSort
}: {
  users: UserType[]
  showColor: boolean
  deleteUser: (id: string) => void
  handleSort: (sort: SortBy) => void
}) {
  const toggleColor = showColor ? 'table--showColor' : ''
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th className='pointer' onClick={() => handleSort(SortBy.NAME)}>
              Nombre
            </th>
            <th className='pointer' onClick={() => handleSort(SortBy.LASTNAME)}>
              Apellidos
            </th>
            <th className='pointer' onClick={() => handleSort(SortBy.COUNTRY)}>
              País
            </th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody className={toggleColor}>
          {users?.map((user) => {
            return (
              <tr key={user.email}>
                <User
                  thumbnail={user.picture.thumbnail}
                  name={user.name.first}
                  lastName={user.name.last}
                  country={user.location.country}
                  id={user.id.value}
                  deleteUser={deleteUser}
                />
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}

export default ListOfUsers
