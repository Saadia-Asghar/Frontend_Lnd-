import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, BookOpen, Gamepad2, Laptop, Home, Bike, Grid } from 'lucide-react';

const iconMap = {
  Shirt,
  BookOpen,
  Gamepad2,
  Laptop,
  Home,
  Bike
};

export default function CategoryTile({ category, isActive = false }) {
  const IconComponent = iconMap[category.icon] || Grid;

  return (
    <Link
      to={`/category/${category.id}`}
      className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Icon Container matching Dribbble shot */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-sm border ${
          isActive
            ? 'bg-brand text-white border-brand shadow-glow'
            : 'bg-surface border-subtle-border group-hover:border-brand/40 group-hover:shadow-card'
        }`}
        style={{
          color: isActive ? '#FFFFFF' : category.color || '#4D7BF3'
        }}
      >
        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
      </div>

      {/* Category Label (Centered, 12-13px, bold, clean) */}
      <span
        className={`mt-2.5 text-xs sm:text-[13px] font-semibold leading-tight max-w-[90px] transition-colors ${
          isActive ? 'text-brand' : 'text-navy group-hover:text-brand'
        }`}
      >
        {category.name}
      </span>
    </Link>
  );
}
