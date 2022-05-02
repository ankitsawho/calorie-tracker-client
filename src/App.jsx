import './App.css';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import {useSelector} from 'react-redux'

function App() {
  const myState = useSelector((state) => state.userReducer)
  return (
    <div className="app">
      {
        myState ? <Main /> : <SignIn /> 
      }
    </div>
  );
}

export default App;
