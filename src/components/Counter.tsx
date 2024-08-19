import type { JSX } from 'astro/jsx-runtime'
import { createSignal, type Component } from 'solid-js'

interface Props {
  initValue: number
  children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {
  const initValue = () => props.initValue
  const [counter, setCounter] = createSignal(initValue())

  return (
    <div class="my-8 flex flex-col gap-4">
      {props.children}
      <h1 class="text-3xl">Counter</h1>
      <h3 class="text-xl">Value: {counter()}</h3>
      <div class="grid grid-cols-2 gap-8">
        <button
          class="rounded bg-red-500 px-4 py-2"
          onClick={() => setCounter(counter() - 1)}
        >
          Decrement
        </button>
        <button
          class="rounded bg-blue-500 px-4 py-2"
          onClick={() => setCounter(counter() + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
