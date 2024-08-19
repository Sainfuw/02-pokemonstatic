import Trash from '@/icons/trash'
import type { FavoritePokemon } from '@/interfaces/pokemon'
import { createSignal, For } from 'solid-js'

export default function FavoritePokemons() {
  /* global localStorage, window */
  const [favorites, setFavorites] = createSignal(
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  )

  function handleDelete(e: MouseEvent, id: string) {
    e.stopPropagation()

    const newFavorites = favorites().filter(
      (favorite: FavoritePokemon) => favorite.id != id,
    )
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return (
    <section class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {favorites().length > 0 ? (
        <For each={favorites()}>
          {({ id, name }) => (
            <div
              onClick={() => (window.location.href = `pokemon/${id}`)}
              class={
                'relative grid transform place-items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 hover:bg-slate-700'
              }
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={name}
                class={'size-32 object-cover'}
                style={{ 'view-transition-name': `${name}-image` }}
              />
              <h3 class={'capitalize'}>{name}</h3>
              <button
                class="absolute right-8 top-2 grid size-8 place-items-center rounded-full bg-red-800 hover:bg-red-700"
                onClick={(e) => handleDelete(e, id)}
              >
                <Trash />
              </button>
            </div>
          )}
        </For>
      ) : (
        <div>No favorites yet!</div>
      )}
    </section>
  )
}
