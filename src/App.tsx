import React from 'react'
import logo from './logo.svg'
import { nanoid } from 'nanoid'
import './App.css'
import 'todomvc-app-css/index.css'

interface Task {
    id: string
    content: string
    status: 'active' | 'completed'
}

function App() {
    const [list, setList] = React.useState<Task[] | []>([])
    const [input, setInput] = React.useState<string>('')
    const [filter, setFilter] = React.useState<'all' | 'active' | 'completed'>(
        'all'
    )

    const addTask = (e) => {
        setInput(e.target.value)
        // e.target.value
    }

    const submitTask = () => {
        const newTask: Task = {
            id: nanoid(),
            content: input,
            status: 'active',
        }
        setList((state) => {
            return [...state, newTask]
        })
        setInput('')
    }

    const clearCompleted = () => {
        // clear all
    }

    const completeTask = (id: string) => {
        // clear by id
    }
    const destroyTask = (id: string) => {
        // clear by id
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
        // if there are some active
        //  then toggle all active to complete
        // if all are completed
        // then toggle all to active
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
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        {/* <!-- These are here just to show the structure of the list items -->
				                  	<!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
                        <li className="completed">
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked
                                />
                                <label>Taste JavaScript</label>
                                <button className="destroy"></button>
                            </div>
                            <input
                                className="edit"
                                value="Create a TodoMVC template"
                            />
                        </li>
                        <li>
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>Buy a unicorn</label>
                                <button className="destroy"></button>
                            </div>
                            <input className="edit" value="Rule the web" />
                        </li>
                        {list.map((item) => {
                            return item.status === 'active' ? (
                                <li>
                                    <div className="view">
                                        <input
                                            className="toggle"
                                            type="checkbox"
                                        />
                                        <label>{item.content}</label>
                                        <button className="destroy"></button>
                                    </div>
                                    <input
                                        className="edit"
                                        value="Rule the web"
                                    />
                                </li>
                            ) : (
                                <li className="completed">
                                    <div className="view">
                                        <input
                                            className="toggle"
                                            type="checkbox"
                                            checked
                                        />
                                        <label>Taste JavaScript</label>
                                        <button className="destroy"></button>
                                    </div>
                                    <input
                                        className="edit"
                                        value="Create a TodoMVC template"
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </section>
                {/* <!-- This footer should be hidden by default and shown when there are todos --> */}
                <footer className="footer">
                    {/* <!-- This should be `0 items left` by default --> */}
                    <span className="todo-count">
                        <strong>0</strong> item left
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
                    Template by{' '}
                    <a href="http://sindresorhus.com">Sindre Sorhus</a>
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
