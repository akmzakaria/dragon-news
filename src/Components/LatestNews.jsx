import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 md:gap-5 bg-base-200 p-2 md:p-3 rounded-md">
      <p className="text-white bg-secondary px-2 md:px-3 py-1 md:py-2 text-xs md:text-base font-semibold whitespace-nowrap">latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold text-xs md:text-base text-accent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis recusandae facilis ab, temporibus reprehenderit.
        </p>
        <p className="font-bold text-xs md:text-base text-accent mx-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis recusandae facilis ab, temporibus reprehenderit.
        </p>
        <p className="font-bold text-xs md:text-base text-accent mx-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet omnis recusandae facilis ab, temporibus reprehenderit.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
