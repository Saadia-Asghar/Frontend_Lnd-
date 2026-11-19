import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Laptop, Home, Shirt, Bike, GraduationCap, Grid } from 'lucide-react';

const iconMap = {
  BookOpen,
  Laptop,
  Home,
  Shirt,
  Bike,
  GraduationCap
};

export default function CategoryTile({ category, isActive = false }) {
  const IconComponent = iconMap[category.icon] || Grid;

  return (
    <Link
      to={`/category/${category.id}`}
      className={`group flex items-center p-4 rounded-2xl border transition-all duration-200 ${
        isActive
          ? 'bg-brand text-white border-brand shadow-glow'
          : 'bg-surface text-navy border-subtle-border hover:border-brand/40 hover:shadow-card hover:-translate-y-0.5'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          isActive
            ? 'bg-white/20 text-white'
            : 'bg-brand-light text-brand group-hover:bg-brand group-hover:text-white'
        }`}
      >
        <IconComponent className="w-6 h-6 stroke-[2]" />
      </div>

      <div className="ml-3.5 min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-semibold truncate transition-colors ${
              isActive ? 'text-white' : 'text-navy group-hover:text-brand'
            }`}
          >
            {category.name}
          </span>
          <span
            className={`text-[11px] px-2 py-0.5 rounded-full font-medium ml-2 ${
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-inset text-navy-secondary'
            }`}
          >
            {category.count}
          </span>
        </div>
        <p
          className={`text-xs truncate mt-0.5 ${
            isActive ? 'text-white/80' : 'text-navy-muted'
          }`}
        >
          {category.description}
        </p>
      </div>
    </Link>
  );
}
