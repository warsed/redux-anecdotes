import { useDispatch } from "react-redux/es/exports"
import { filterAnecdote } from "../reducers/anecdoteReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        const value = e.target.value
        dispatch(filterAnecdote(value))
    }

    return (
        <div style={{marginBottom: 10}}>
            <input type="text" onChange={handleFilter} />
        </div>
    )
}

export default Filter