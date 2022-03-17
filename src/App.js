import NumbersContainer from './components/NumbersContainer'

function App() {
  return (
    <div>
      <h1>Random Number generator</h1>
      <NumbersContainer/>
    </div>
  )
}

// example for counter application
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, incrementBy } from './actions/countAction'

// function App() {
//   const count = useSelector((state) => {
//     return state.count
//   })
//   const dispatch = useDispatch()

//   const handleIncrement = () => {
//     const n = window.prompt("Increment By : ")
//     dispatch(incrementBy(Number(n)))
//   }
//   return (
//     <div>
//       <h1>Count Example using Redux</h1>
//       <h2>Count - {count}</h2>
//       <button onClick={()=> {
//         dispatch(increment())
//       }}> +1 </button>
//       <button onClick={() => {
//         dispatch(decrement())
//       }}> -1 </button>
//       <button onClick={ handleIncrement }> Increment By </button>
//     </div>
//   );
// }

export default App;
