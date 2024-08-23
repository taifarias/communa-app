
import { Outlet } from 'react-router-dom'
import './index.css'; 
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
