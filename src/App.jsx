import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy, reset } from './store/slices/counter'
import { useState } from 'react'

function App() {

  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');




  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <p>count is: {counter}</p>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
         <button type='button' onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button type='button' onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button type='button' onClick={() => dispatch(incrementBy(Number(incrementAmount)))}>
          Increment By 2
        </button>
        <button type='button' onClick={() => dispatch(reset())}>
          Reset
        </button>
    </div>
    </div>
  )
}

export default App
