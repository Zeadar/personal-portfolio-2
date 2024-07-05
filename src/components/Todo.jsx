import React, { useState, useReducer } from "react"
import "./Todo.css"

function loadData() {
    if (listOfTasks.length == 0) {
        const json = window.localStorage.getItem("todo")
        if (json) {
            listOfTasks.push(...JSON.parse(json))
        }
    }
}

function saveData() {
    window.localStorage.setItem("todo", JSON.stringify(listOfTasks))
}

const listOfTasks = []

const Todo = () => {
    const [date, setDate] = useState(new Date(Date.now()).toISOString().slice(0, 10))
    const [input, setInput] = useState("")
    const [_ignored, forceUpdate] = useReducer((x) => x + 1, 0)

    function dateChange(evt) {
        setDate(evt.target.value)
    }

    function inputChange(evt) {
        setInput(evt.target.value)
    }

    function pushed() {
        const data = {
            date: date,
            input: input,
        }
        listOfTasks.push(data)
        listOfTasks.sort((a, b) => a.date.localeCompare(b.date))
        saveData()
        setInput("")
    }

    loadData()

    return (
        <div className="Main">
            <div className="Display">
                <div className="Date-time">
                    <input className="Inputs" type="text" onChange={inputChange} value={input} size={50} />
                    <input className="Inputs" type="date" onChange={dateChange} value={date} />
                    <button id="Enter" onClick={pushed} className="Buttons">
                        Enter
                    </button>
                </div>
                <div className="Tasks">
                    {listOfTasks.map((task, i) => {
                        const taskDate = new Date(task.date).toISOString().slice(0, 10)
                        const today = new Date(Date.now()).toISOString().slice(0, 10)
                        let color = "white"

                        if (taskDate.localeCompare(today) == -1) {
                            color = "pink"
                        }

                        if (taskDate.localeCompare(today) == 1) {
                            color = "lightblue"
                        }

                        return (
                            <div className="Item">
                                <span className="Item-text" style={{ color: color }}>
                                    {task.date}
                                </span>
                                <span className="Item-text" style={{ color: color }}>
                                    {task.input}
                                </span>
                                <button
                                    className="Buttons"
                                    onClick={() => {
                                        listOfTasks.splice(i, 1)
                                        saveData()
                                        forceUpdate()
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
