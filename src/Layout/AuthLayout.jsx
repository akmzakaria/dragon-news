import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-full md:w-11/12 mx-auto py-3 md:py-4 px-3 md:px-0">
        <Navbar></Navbar>
      </header>
      <main className="w-full md:w-11/12 mx-auto py-3 md:py-5 px-3 md:px-0">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
