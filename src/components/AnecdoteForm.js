import { useDispatch } from 'react-redux';
import { createNewAnecdote } from '../reducers/anecdoteReducer';
import { setMessage, clearMessage } from '../reducers/notificationReducer';

function AnecdoteForm() {
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value
    const newAnecdote = {content, votes: 0}
    dispatch(createNewAnecdote(newAnecdote))
      dispatch(setMessage(`Add ${newAnecdote.content}`))
      setTimeout(() => dispatch(clearMessage()), 5000)
    e.target.anecdote.value = ''
  };

  return (
    <form onSubmit={add}>
      <div><input name="anecdote" type="text" /></div>
      <button type="submit">create</button>
    </form>
  );
}

export default AnecdoteForm;
