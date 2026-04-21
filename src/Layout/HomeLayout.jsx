import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="min-h-screen">
      <header>
        <Header></Header>
        <section className="w-full md:w-11/12 mx-auto my-2 md:my-3 px-3 md:px-0">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-full md:w-11/12 mx-auto my-2 md:my-3 px-3 md:px-0">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-full md:w-11/12 mx-auto my-2 md:my-3 px-3 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
        {/* Left Sidebar - Hidden on mobile, visible on md and above */}
        <aside className="hidden md:block md:col-span-3 sticky overflow-y-auto self-start top-0 h-screen custom-scrollbar">
          <LeftAside></LeftAside>
        </aside>
        
        {/* Main Content */}
        <section className="main col-span-1 md:col-span-6">
          {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        
        {/* Right Sidebar - Hidden on mobile, visible on md and above */}
        <aside className="hidden md:block md:col-span-3 sticky overflow-y-auto self-start top-0 h-screen">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
