import { Outlet, Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Layout() {
  return (
    <div>
     <Nav/>

      <main >
        <Outlet />
      </main>

      <footer className='bg-black text-white text-center' >  
        <p>© 2025 My App</p>
      </footer>
    </div>
  )
}
