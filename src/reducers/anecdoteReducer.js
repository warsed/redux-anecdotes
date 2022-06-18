import { createSlice } from "@reduxjs/toolkit";
import { getAll, createNew, changeVote } from '../services/anecdotes';

/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = anecdotesAtStart.map((el) => ({ content: el, votes: 0, id: getId() }));
*/

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      const content = action.payload
      state.push(content)
    },
    addVote(state, action) {
      const id = action.payload.id
      const toFind = state.find((el) => el.id === id);
      const toChange = { ...toFind, votes: toFind.votes + 1 };
      return state.map((el) => (el.id !== toChange.id ? el : toChange));
    },
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

/*
export const addAnecdote = (anecdote) => ({
  type: 'NEW_ANECDOTE',
  data: {
    content: anecdote,
    votes: 0,
    id: getId(),
  },
});

export const addVote = (id) => ({
  type: 'ADD_VOTE',
  data: {
    id,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    case 'ADD_VOTE':
      const toFind = state.find((el) => el.id === action.data.id);
      const toChange = { ...toFind, votes: toFind.votes + 1 };
      return state.map((el) => (el.id !== toChange.id ? el : toChange));
    default:
      return state;
  }
};
*/

const {addAnecdote, addVote, setAnecdote} = anecdoteSlice.actions;

export const initializeAnecdote = () => {
  return async dispatch => {
    const result = await getAll()
    dispatch(setAnecdote(result))
  }
}

export const createNewAnecdote = content => {
  return async dispatch => {
    const result = await createNew(content)
    dispatch(addAnecdote(result))
  }
}

export const addNewVote = (id, object) => {
  return async dispatch => {
    const result = await changeVote(id, object)
    dispatch(addVote(result))
  }
}

export default anecdoteSlice.reducer
