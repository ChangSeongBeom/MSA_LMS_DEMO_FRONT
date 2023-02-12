import React,{useState} from 'react'
import './App.css';
import Login from './Login';
import Main from './Main';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {
        isAuthenticated===false? <Login/>: <Main/>
      }
      
    </div>
  )
}

export default App