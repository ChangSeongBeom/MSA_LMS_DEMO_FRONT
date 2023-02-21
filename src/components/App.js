import React,{useState} from 'react'
import './App.css';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';

function App() {
  const [isAuthenticated] = useState(false);

  return (
    <div>
      {
        isAuthenticated===false? <Login/>: <Main/>
      }
      
    </div>
  )
}

export default App