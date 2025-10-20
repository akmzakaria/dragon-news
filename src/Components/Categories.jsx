import { clampWithOptions } from 'date-fns/fp';
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All category ({categories.length})</h2>

      <div className="grid catg grid-cols-1 gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
