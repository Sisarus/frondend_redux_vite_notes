import Notes from "./components/Notes"
import NewNote from "./components/NewNote"

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }
  return(
    <div>
      <NewNote />
      <div>
        <label>
        <input type="radio" name="filter"
          onChange={() => filterSelected('ALL')} />
          All
        </label>

        <label>
        <input type="radio" name="filter"
          onChange={() => filterSelected('IMPORTANT')} />
          Important
        </label>

        <label>
        <input type="radio" name="filter"
          onChange={() => filterSelected('NONIMPORTANT')} />
          Non-Important
        </label>
      </div>
      <Notes />
    </div>
  )
}

export default App