import { useSelector } from 'react-redux'

function Notification() {
  const message = useSelector(state => state.notifications)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    message ?
    <div style={style}>
      {message}
    </div>
    : null
  );
}

export default Notification;
