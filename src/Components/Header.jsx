import React from 'react';
import logoImg from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-3 flex-col mt-5">
      <img className="w-[350px]" src={logoImg} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
    </div>
  );
};

export default Header;
