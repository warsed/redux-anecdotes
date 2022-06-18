import { useSelector, useDispatch } from 'react-redux';
import { addNewVote } from '../reducers/anecdoteReducer';
import { setMessage, clearMessage } from '../reducers/notificationReducer';

function AnecdoteList() {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    return filter
    ? anecdotes.filter(el => el.content.includes(filter))
    : anecdotes
  });
  const dispatch = useDispatch();
  const anecdotesSort = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    const findVote = anecdotesSort.find(el => el.id === id)
    const newObj = {...findVote, votes: findVote.votes + 1}
    dispatch(addNewVote(id, newObj))
      dispatch(setMessage(`Vote ${id}`))
      setTimeout(() => dispatch(clearMessage()), 5000)
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
