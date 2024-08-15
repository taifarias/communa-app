
import { Outlet } from 'react-router-dom'
import './App.css'
import Navebar from './components/Navbar'


function App() {
  return (
    <div className='App'>
      <Navebar />

      
      
      <Outlet />
    </div>
  )
}

export default App 
