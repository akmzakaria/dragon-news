import React, { use } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    // console.log('user trying to log out');
    logOut()
      .then(() => {
        alert('Logged Out Successfully!');
        navigate('/auth/login');
      })
      .catch(() => {
        // console.log(err);
      });
  };

  const location = useLocation();

  // Check if we're on / or /category/*
  const isHomeActive = location.pathname === '/' || location.pathname.startsWith('/category');

  const linkClass = (isActive) =>
    isActive
      ? 'border-b-2 border-[#d72050] text-[#d72050] pb-1'
      : 'text-gray-600 hover:text-[#d72050]';

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink className={() => linkClass(isHomeActive)} to={'/'}>
          Home
        </NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary px-10">
            Log Out
          </Link>
        ) : (
          <Link to={'/auth/login'} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
