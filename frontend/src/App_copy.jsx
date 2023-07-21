import {useState} from 'react'
import './App.css'

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() == ''){
      return 
    }
    setTodos((currTodos) => {
      return [...currTodos, {id: crypto.randomUUID(), task: newItem, complete: false}]
    })
    setNewItem('')
  }

  function deleteTodo(id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => {
        return todo.id != id
      })
    })
  }

  function setComplete(id, complete) {
    setTodos(currTodos => {
        let arr = currTodos.map(todo => {
          if (todo.id == id) {
            todo.complete = complete
          }
          return todo
        })
      return arr
    })
  }


  function emptyTodos() {
    if (todos.length == 0) {
      return (
        <h2>No Todos</h2>
      )
    }else{
      return todos.map(todo => {
        return (
          <li key={todo.id}>
          <label htmlFor={todo.id}>
            <input type='checkbox' id={todo.id} onChange={(e) => setComplete(todo.id, e.target.checked)}/>
            {todo.task}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
        </li>
        )
      })

    }
  }
  console.log(todos)
  return (
    <>
      <form className='new-item-form'>

          <label>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' />
  
        <button className='btn' onClick={handleSubmit}>Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className='list'>
        {emptyTodos()}
        {/* {todos.map(todo => {

          return (
            <li key={todo.id}>
            <label htmlFor={todo.id}>
              <input type='checkbox' id={todo.id} onChange={(e) => setComplete(todo.id, e.target.checked)}/>
              {todo.task}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
          </li>
          )
        })} */}
        
       
      </ul>
      <script>console.log('hello')</script>
    </>
  )
}