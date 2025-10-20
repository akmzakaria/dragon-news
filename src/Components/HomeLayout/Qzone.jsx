import React from 'react';
import swmImg from '../../assets/swimming.png';
import ClsImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 py-5 px-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swmImg} alt="" />
        <img src={ClsImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
