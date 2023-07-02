import { SortBy } from '../types.d'

function Header ({
  filterByCountry,
  restoreData,
  toggleColor,
  toggleSort,
  sorting
}: {
  filterByCountry: (event: React.ChangeEvent<HTMLInputElement>) => void
  restoreData: () => void
  toggleColor: () => void
  toggleSort: () => void
  sorting: SortBy
}) {
  return (
    <header>
      <h1>Prueba Técnica</h1>
      <section>
        <button onClick={toggleColor}>Colorear filas</button>
        <button onClick={toggleSort}>
          {sorting === SortBy.NONE
            ? 'Ordenar por Países'
            : 'No ordenar por Países'}{' '}
        </button>
        <button onClick={restoreData}>Recuperar personal</button>
        <input
          onChange={filterByCountry}
          type='text'
          placeholder='Filtra por País'
        />
      </section>
    </header>
  )
}

export default Header
