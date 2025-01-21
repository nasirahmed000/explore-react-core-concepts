import Counter from './Counter'
import Users from './Users'
import Team from './Team'
import Friends from './friends'
import './App.css'


function App() {
  function handleClick(){
    alert ('Button Clicked')
  }
  const handleClick2=()=>{
    alert('Button Clicked 2')
  }
  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Counter></Counter>
    <Team></Team>

    <h3>React core concept 2</h3>
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Click me2</button>
    </>
  )
}

export default App
