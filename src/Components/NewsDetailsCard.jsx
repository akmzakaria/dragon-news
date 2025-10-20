import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  //   console.log(news);
  return (
    <div className="space-y-5 mb-20">
      <img className="w-full h-[350px] object-cover" src={news.image_url} alt="" />
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p>{news.details}</p>
      <Link to={-1} className="btn btn-secondary">
        <FaArrowLeftLong />
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
