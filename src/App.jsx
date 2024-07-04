import "./App.css"
import ProjectBox from "./components/ProjectBox"

function App() {
    const projects = [
        {
            link: "https://github.com/Zeadar/BudgetOrDie",
            desc: "Budgeting Console App in C#",
            img: "",
        },
        {
            link: "https://github.com/Zeadar/cakesite",
            desc: "A mock store site for cakes. The store exists but this website is fake.",
            img: "",
        },
        {
            link: "https://zeadar.github.io/html_cv",
            desc: "My CV! Written in HTML and CSS",
            img: "",
        },
    ]

    return (
        <div className="App">
            <div style={{ height: "calc(0.5rem + 1vmin)" }}></div>
            <header className="App-header">
                <h2>Kalle's Portfolio</h2>
            </header>
            <main className="Main-content">
                <div className="Description">
                    <span className="IntroductionText">
                        Hey! I'm Kalle, based in general and based in Sweden in particular.
                    </span>
                    <span className="IntroductionText"> Loves to write code!</span>
                    <span className="IntroductionText"> Does not love to write HTML & CSS.</span>
                </div>
                <div className="Space"></div>
                <div className="Git-grid">
                    {projects.map((props) => {
                        return ProjectBox(props)
                    })}
                </div>
                <div className="Space"></div>
            </main>
        </div>
    )
}

export default App
