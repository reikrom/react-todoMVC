import React from 'react'
import {nanoid} from 'nanoid'
import cn from 'clsx'
import './App.css'
import 'todomvc-app-css/index.css'

interface Task {
  id: string
  content: string
  completed: boolean
}

function App() {
  const [list, setList] = React.useState<Task[] | []>([
    {id: '1', content: 'test1', completed: false},
    {id: '2', content: 'test2', completed: true},
  ])
  const [input, setInput] = React.useState<string>('')
  const [currFilter, setFilter] = React.useState<
    'all' | 'active' | 'completed'
  >('all')

  const addTask = e => {
    setInput(e.target.value)
    // e.target.value
  }

  const submitTask = e => {
    e.preventDefault()
    if (!input) return
    const newTask: Task = {
      id: nanoid(),
      content: input,
      completed: false,
    }
    setList(state => {
      return [...state, newTask]
    })
    setInput('')
  }

  const clearCompleted = () => {
    // clear all
  }

  const completeTask = (id: string) => {
    console.log('%cid%o', 'background: red; color: white;', id)
    setList(state => {
      const newState = [...state]
      return newState.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed}
        }
        return item
      })
    })
  }

  const destroyTask = (id: string) => {
    // clear by id
    setList(state => state.filter(item => item.id !== id))
  }

  const showActive = () => {
    // show all active tasks
  }
  const showCompleted = () => {
    // show all Completed tasks
  }

  const showAll = () => {
    // show all tasks
  }

  const toggleAll = () => {
    setList(state => {
      const newState = [...state] || []
      if (newState.some(item => !item.completed)) {
        return newState.map(item => ({...item, completed: true}))
      }
      return newState.map(item => ({...item, completed: !item.completed}))
    })
  }

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={submitTask}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={addTask}
              value={input}
            />
          </form>
        </header>
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={toggleAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {/* <!-- These are here just to show the structure of the list items -->
				                  	<!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}

            {list.map((item: Task) => (
              <li
                key={item.id}
                className={cn(item.completed ? 'completed' : '')}
              >
                <div className="view">
                  <input
                    checked={item.completed}
                    onChange={() => completeTask(item.id)}
                    className="toggle"
                    type="checkbox"
                  />
                  <label>{item.content}</label>
                  <button
                    onClick={() => destroyTask(item.id)}
                    className="destroy"
                  ></button>
                </div>
                <input
                  value={item.content}
                  className="edit"
                  onChange={() => {}}
                />
              </li>
            ))}
          </ul>
        </section>
        {/* <!-- This footer should be hidden by default and shown when there are todos --> */}
        <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span className="todo-count">
            <strong>{list.length}</strong> item left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {/* <!-- Hidden if no completed items are left ↓ --> */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        {/* <!-- Remove the below line ↓ --> */}
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        {/* <!-- Change this out with your name and url ↓ --> */}
        <p>
          Created by <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  )
}

export default App
