import React, { use } from 'react'
import { NavLink } from 'react-router'

const categoryPromise = fetch('/categories.json').then((res) => res.json())

const Categories = () => {
  const categories = use(categoryPromise)

  return (
    <div className="mb-4 md:mb-0">
      <h2 className="font-bold text-lg mb-3">All category ({categories.length})</h2>

      <div className="grid catg grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={
              'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent text-xs md:text-sm justify-start'
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories
