import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = () => {
    return axios.get(baseUrl)
    .then(response => response.data)
}

const createNew = (object) => {
    return axios.post(baseUrl, object)
    .then(response => response.data)
}

const changeVote = (id, object) => {
    return axios.put(`${baseUrl}/${id}`, object)
    .then(response => response.data)
}

export { getAll, createNew, changeVote }