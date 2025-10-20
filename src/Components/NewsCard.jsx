import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { IoBookmarkOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, id } = news;

  return (
    <div className="max-w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Author & Share */}
      <div className="flex bg-base-200 justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), 'dd-MM-yyyy')}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <IoBookmarkOutline />
          <FaShareAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 mt-3 text-lg font-semibold text-gray-900">{title}</h2>

      {/* Thumbnail */}
      <div className="px-4 mt-3">
        <img src={thumbnail_url} alt={title} className="w-full h-56 object-cover rounded-lg" />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.slice(0, 180)}...
        <Link to={`/news-details/${id}`} className="text-blue-500 font-medium cursor-pointer ml-1">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-gray-600">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-yellow-500' : 'text-gray-300'} />
          ))}
          <span className="ml-1 font-medium">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
