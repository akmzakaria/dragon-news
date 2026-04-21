import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { IoBookmarkOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, id } = news;

  return (
    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Author & Share */}
      <div className="flex bg-base-200 justify-between items-center px-3 md:px-4 pt-3 md:pt-4 gap-2 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img src={author.img} alt={author.name} className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-gray-800 text-sm md:text-base truncate">{author.name}</p>
            <p className="text-xs md:text-sm text-gray-500">
              {format(new Date(author.published_date), 'dd-MM-yyyy')}
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-gray-500 text-sm md:text-base flex-shrink-0">
          <IoBookmarkOutline className="cursor-pointer hover:text-secondary transition-colors" />
          <FaShareAlt className="cursor-pointer hover:text-secondary transition-colors" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-3 md:px-4 mt-2 md:mt-3 text-base md:text-lg font-semibold text-gray-900 line-clamp-2">{title}</h2>

      {/* Thumbnail */}
      <div className="px-3 md:px-4 mt-2 md:mt-3">
        <img src={thumbnail_url} alt={title} className="w-full h-40 md:h-56 object-cover rounded-lg" />
      </div>

      {/* Details */}
      <div className="px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">
        {details.slice(0, 180)}...
        <Link to={`/news-details/${id}`} className="text-blue-500 font-medium cursor-pointer ml-1 hover:text-blue-700 transition-colors">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-3 md:px-4 pb-3 md:pb-4 text-gray-600 gap-2 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-xs md:text-base ${i < rating.number ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
          <span className="ml-1 font-medium text-xs md:text-sm">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
          <FaEye className="text-xs md:text-base" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
