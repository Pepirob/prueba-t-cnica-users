export const getUsers = async () => {
  try {
    const res = await fetch('https://randomuser.me/api/?results=10')
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
