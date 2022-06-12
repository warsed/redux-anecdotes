import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { addMessage } from '../reducers/notificationReducer'

function AnecdoteList() {
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch();
  const anecdotesSort = anecdotes.slice().sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    dispatch(addVote(id));
    dispatch(addMessage(`Vote ${id}`))
    setTimeout(() => dispatch(addMessage(null)), 5000)
  };

  return (
    <>
      {anecdotesSort.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
