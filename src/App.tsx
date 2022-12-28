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
  const [editInput, setEditInput] = React.useState('')
  const [currFilter, setFilter] = React.useState<
    'all' | 'active' | 'completed'
  >('all')

  const addTask = e => {
    setInput(e.target.value)
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
    list.forEach(item => {
      if (item.completed) {
        destroyTask(item.id)
      }
    })
  }

  const completeTask = (id: string) => {
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
    setList(state => state.filter(item => item.id !== id))
  }

  const changeFilter = filter => {
    if (filter !== currFilter) {
      setFilter(filter)
    }
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

  const handleEdit = e => {}

  let currentList: Task[] | [] = []
  let currentItemsLeft = 0

  if (currFilter === 'all') {
    currentList = list
    currentItemsLeft = list.filter(item => !item.completed).length
  }
  if (currFilter === 'active') {
    currentList = list.filter(item => !item.completed)
    currentItemsLeft = currentList.length
  }
  if (currFilter === 'completed') {
    currentList = list.filter(item => item.completed)
    currentItemsLeft = 0
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
            {currentList.map((item: Task) => (
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
                  <label onDoubleClick={handleEdit}>{item.content}</label>
                  <button
                    onClick={() => destroyTask(item.id)}
                    className="destroy"
                  ></button>
                </div>
                <input
                  value={'item.content'}
                  className="editing"
                  style={{
                    // TODO: implement edit
                    background: 'red',
                  }}
                  onChange={() => {}}
                />
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{currentItemsLeft}</strong>{' '}
            {currentItemsLeft === 1 ? 'item ' : 'items '}
            left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
          {/* // Component does not re-render on window.location.pathName change
              // I'm avoiding class components and react-router, state it is then */}
          <ul className="filters">
            <li>
              <a
                onClick={() => changeFilter('all')}
                className={currFilter === 'all' ? 'selected' : ''}
                href="#/"
              >
                All
              </a>
            </li>
            <li>
              <a
                onClick={() => changeFilter('active')}
                className={currFilter === 'active' ? 'selected' : ''}
                href="#/active"
              >
                Active
              </a>
            </li>
            <li>
              <a
                onClick={() => changeFilter('completed')}
                className={currFilter === 'completed' ? 'selected' : ''}
                href="#/completed"
              >
                Completed
              </a>
            </li>
          </ul>
          {list.some(item => item.completed) ? (
            <button onClick={clearCompleted} className="clear-completed">
              Clear completed
            </button>
          ) : null}
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
          Created by <a href="http://todomvc.com">Rei Krom</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  )
}

export default App
