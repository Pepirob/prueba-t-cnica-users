
function User ({
  id,
  thumbnail,
  name,
  lastName,
  country,
  deleteUser
}: {
  thumbnail: string
  name: string
  lastName: string
  country: string
  id: string
  deleteUser: (id: string) => void
}) {
  return (
    <>
      <td>
        <img src={thumbnail} alt={`a thumbnail of ${name}`} />
      </td>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{country}</td>
      <td>
        <button onClick={() => deleteUser(id)}>Borrar</button>
      </td>
    </>
  )
}

export default User
