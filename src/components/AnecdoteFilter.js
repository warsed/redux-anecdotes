import { useDispatch } from "react-redux/es/exports"
import { addValue } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        const value = e.target.value
        dispatch(addValue(value))
    }

    return (
        <div style={{marginBottom: 10}}>
            <input type="text" onChange={handleFilter} />
        </div>
    )
}

export default Filter