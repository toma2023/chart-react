import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NavBarbtm from './components/NavBarbtm'

function App() {
  return (
    <div className='px-3 h-screen  '>
      <div className='md:flex h-full w-[100%]  relative rounded-3xl '>
        <div className=' hidden md:block w-[80px] bg-white px-1'>
          <Navbar></Navbar>
        </div>
        <div className='md:hidden w-[100%] fixed left-0 bottom-0 bg-white z-[9900] h-[80px]  '>
         <NavBarbtm></NavBarbtm>
        </div>
        <div className='w-[100%] pb-[80px] md:pb-0 md:w-[calc(100vw-60px)]'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>

  )
}

export default App




