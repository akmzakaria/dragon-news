import React, { use, useState } from 'react'
import { NavLink } from 'react-router'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const categoryPromise = fetch('/categories.json').then((res) => res.json())

const Categories = () => {
  const categories = use(categoryPromise)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 md:mb-0">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full btn bg-base-200 border-0 hover:bg-base-300 font-bold text-accent flex justify-between items-center"
        >
          <span>All Categories ({categories.length})</span>
          {isOpen ? <HiChevronUp className="text-xl" /> : <HiChevronDown className="text-xl" />}
        </button>

        {isOpen && (
          <div className="grid catg grid-cols-2 gap-2 mt-3 animate-dropdown">
            {categories.map((category) => (
              <NavLink
                to={`/category/${category.id}`}
                key={category.id}
                onClick={() => setIsOpen(false)}
                className={
                  'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent text-xs justify-start'
                }
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <h2 className="font-bold text-lg mb-3">All category ({categories.length})</h2>
        <div className="grid catg grid-cols-1 gap-3">
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className={
                'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent text-sm justify-start'
              }
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
