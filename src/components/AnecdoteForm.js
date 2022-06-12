import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { addMessage } from '../reducers/notificationReducer'

function AnecdoteForm() {
  const dispatch = useDispatch();

  const add = (e) => {
    const value = e.target.anecdote.value
    e.preventDefault();
    dispatch(addAnecdote(value));
    dispatch(addMessage(`Add ${value}`))
    setTimeout(() => dispatch(addMessage(null)), 5000)
  };

  return (
    <form onSubmit={add}>
      <div><input name="anecdote" type="text" /></div>
      <button type="submit">create</button>
    </form>
  );
}

export default AnecdoteForm;
