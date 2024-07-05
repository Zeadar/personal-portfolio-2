import { useState } from "react"
import "./App.css"
import ProjectBox from "./components/ProjectBox"
import Todo from "./components/Todo"

const projects = [
    {
        link: "https://github.com/Zeadar/BudgetOrDie",
        desc: "Budgeting Console App in C#",
        img: "../resource/budget_or_die.png",
    },
    {
        // link: "https://github.com/Zeadar/cakesite",
        link: "https://zeadar.github.io/cakesite",
        desc: "A mock store site for cakes. The store exists but this website is fake.",
        img: "https://d2j6dbq0eux0bg.cloudfront.net/images/16830190/1498589015.jpg",
    },
    {
        link: "https://zeadar.github.io/html_cv",
        desc: "My CV! Written in HTML and CSS",
        img: "",
    },
    {
        link: "https://github.com/Zeadar/do_or_die",
        desc: "A Console ToDo list application written in Rust!",
        img: "../resource/do_or_die.png",
    },
]

function App() {
    const [main, setMain] = useState(true)

    function switchState() {
        setMain(!main)
    }

    const todoComponent = Todo()

    const featsComponent = (
        <main className="Main-content">
            <div className="Description">
                <span className="IntroductionText">
                    Hey! I'm Kalle, based in general and based in Sweden in particular.
                </span>
                <span className="IntroductionText">Loves to write code!</span>
                <span className="IntroductionText">Does not love to write HTML & CSS.</span>
            </div>
            <div className="Space"></div>
            <div className="Git-grid">
                {projects.map((props) => {
                    return ProjectBox(props)
                })}
            </div>
            <div className="Space"></div>
        </main>
    )

    return (
        <div className="App">
            <div style={{ height: "1rem" }}></div>
            <button className="Flip-view" onClick={switchState}>
                {main ? "Todo" : "Back"}
            </button>
            <header className="App-header">
                <h2>Kalle's Portfolio</h2>
            </header>
            {main ? featsComponent : todoComponent}
        </div>
    )
}

export default App
