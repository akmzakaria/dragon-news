import React, { use, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router'
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider'
import { HiMenu, HiX } from 'react-icons/hi'
import Alert from './Alert'

const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault()
    logOut()
      .then(() => {
        setAlertMsg('Logged Out Successfully!')
        setTimeout(() => {
          setAlertMsg('')
          navigate('/auth/login')
        }, 1500)
      })
      .catch(() => {
        // console.log(err);
      })
  }

  const location = useLocation()

  // Check if we're on / or /category/*
  const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/category')

  const linkClass = (isActive) =>
    isActive
      ? 'border-b-2 border-[#d72050] text-[#d72050] pb-1 transition-colors'
      : 'text-gray-600 hover:text-[#d72050] transition-colors'

  return (
    <div className="flex flex-col w-full">
      {alertMsg && <Alert type="success" message={alertMsg} onClose={() => setAlertMsg('')} />}
      <div className="flex justify-between items-center gap-2">
        {/* User Email - Hidden on mobile */}
        <div className="hidden md:block text-sm font-semibold text-accent">
          {user ? user.email : 'Guest'}
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex nav gap-5 text-accent">
          <NavLink className={() => linkClass(isHomeActive)} to={'/'}>
            Home
          </NavLink>
          <NavLink className={() => linkClass(location.pathname === '/about')} to={'/about'}>
            About
          </NavLink>
          <NavLink className={() => linkClass(location.pathname === '/career')} to={'/career'}>
            Career
          </NavLink>
        </div>

        {/* Auth Section - Desktop */}
        <div className="hidden md:flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`${user ? user.photoURL : userIcon}`}
            alt="user"
          />
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-primary btn-sm px-6">
              Log Out
            </Link>
          ) : (
            <Link to={'/auth/login'} className="btn btn-primary btn-sm px-6">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-base-100 shadow-lg p-4 md:hidden z-50 border-t-2 border-base-200">
            <div className="flex flex-col gap-3">
              {/* Mobile User Email */}
              <div className="text-sm font-semibold text-accent border-b pb-2">
                {user ? user.email : 'Guest'}
              </div>

              {/* Mobile Navigation */}
              <NavLink
                className={() => linkClass(isHomeActive)}
                to={'/'}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={() => linkClass(location.pathname === '/about')}
                to={'/about'}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                className={() => linkClass(location.pathname === '/career')}
                to={'/career'}
                onClick={() => setMenuOpen(false)}
              >
                Career
              </NavLink>

              {/* Mobile Auth */}
              <div className="flex gap-2 items-center pt-2 border-t">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={`${user ? user.photoURL : userIcon}`}
                  alt="user"
                />
                {user ? (
                  <Link
                    onClick={(e) => {
                      handleLogOut(e)
                      setMenuOpen(false)
                    }}
                    className="btn btn-primary btn-sm px-4"
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link
                    to={'/auth/login'}
                    className="btn btn-primary btn-sm px-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
