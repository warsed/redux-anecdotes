import { useEffect } from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/AnecdoteFilter';
import { useDispatch } from 'react-redux';
import { initializeAnecdote } from './reducers/anecdoteReducer';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdote())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
}

export default App;
