
import { Outlet } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/Auth'


function App() {
  return (
    <div className='App'>
      
        
     <AuthProvider>

       <Outlet />
       
    </AuthProvider> 
      
     
    </div>
  )
}

export default App 
