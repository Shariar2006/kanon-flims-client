import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <div className='max-w-6xl mx-auto'>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
