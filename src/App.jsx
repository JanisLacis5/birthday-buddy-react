import data from "./data"
import List from "./List"
import {useState} from "react"

const App = () => {
    const [people, setPeople] = useState(data)
    const buttonClick = () => {
        setPeople([])
    }
    return (
        <section className="container">
            <h3 className="title">{people.length} Birthdays Today</h3>
            <ul>
                <List people={people} />
                <button
                    className="btn btn-block"
                    type="button"
                    onClick={buttonClick}>
                    Clear All
                </button>
            </ul>
        </section>
    )
}
export default App
