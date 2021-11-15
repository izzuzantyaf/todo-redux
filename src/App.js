import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todo/TodoList'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>To Do App</h2>
        <Header />
        <TodoList />
      </section>
    </div>
  )
}

export default App
