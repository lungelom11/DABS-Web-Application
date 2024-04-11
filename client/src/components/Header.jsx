import {Navbar, Button} from "flowbite-react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center text-sm sm:text-xl font-semibold p-2 bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-400 rounded-lg text-white" >DABS</Link>
        
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>Services</Link>
            </Navbar.Link>
      </Navbar.Collapse>
      <Link className="p-3" to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'>
              Sign In
            </Button>
        </Link>
    </Navbar>
  )
}

export default Header