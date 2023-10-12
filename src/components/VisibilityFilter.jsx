import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
    <label>
    <input type="radio" name="filter"
      onChange={() => dispatch(filterChange('ALL'))} />
      All
    </label>

    <label>
    <input type="radio" name="filter"
      onChange={() => dispatch(filterChange('IMPORTANT'))} />
      Important
    </label>

    <label>
    <input type="radio" name="filter"
      onChange={() => dispatch(filterChange('NONIMPORTANT'))} />
      Non-Important
    </label>
  </div>
  )
}

export default VisibilityFilter