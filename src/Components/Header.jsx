import React from 'react';
import logoImg from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-3 flex-col mt-3 md:mt-5 px-3 md:px-0">
      <img className="w-40 md:w-[350px] object-contain" src={logoImg} alt="Dragon News Logo" />
      <p className="text-accent text-sm md:text-base">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold text-xs md:text-sm">{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
    </div>
  );
};

export default Header;
