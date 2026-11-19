import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Clock } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function ItemCard({ item }) {
  const { toggleSaveItem, isItemSaved } = useMarketplace();
  const saved = isItemSaved(item.id);

  const getConditionStyle = (condition) => {
    if (condition === 'New' || condition === 'Used - Like New') {
      return 'bg-status-greenLight text-status-green border-status-green/20';
    }
    return 'bg-inset text-navy-secondary border-subtle-border';
  };

  return (
    <div className="group relative bg-surface rounded-2xl border border-subtle-border shadow-card hover:shadow-cardHover transition-all duration-200 hover:-translate-y-1 flex flex-col overflow-hidden">
      
      {/* Image Thumbnail & Overlay Badges */}
      <div className="relative aspect-[4/3] w-full bg-inset overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Condition Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          <span
            className={`px-2.5 py-1 text-[11px] font-semibold rounded-full border shadow-sm ${getConditionStyle(
              item.condition
            )}`}
          >
            {item.condition}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => toggleSaveItem(item.id, e)}
          title={saved ? 'Remove from saved' : 'Save item'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            saved
              ? 'bg-brand text-white shadow-sm'
              : 'bg-white/90 text-navy-secondary hover:text-brand hover:bg-white shadow-sm'
          }`}
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        {/* Category Pill on bottom of image */}
        <div className="absolute bottom-2.5 left-3">
          <span className="px-2 py-0.5 rounded-md bg-navy/80 text-white text-[11px] font-medium backdrop-blur-xs">
            {item.categoryName}
          </span>
        </div>
      </div>

      {/* Card Content Block */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Item Title */}
          <Link to={`/item/${item.id}`} className="block group-hover:text-brand transition-colors">
            <h3 className="text-[15px] font-semibold text-navy leading-snug line-clamp-2 min-h-[42px]">
              {item.title}
            </h3>
          </Link>

          {/* Campus Location */}
          <div className="flex items-center gap-1 mt-2 text-xs text-navy-muted">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-navy-muted" />
            <span className="truncate">{item.campusLocation}</span>
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="mt-4 pt-3 border-t border-subtle-border/60 flex items-center justify-between">
          <div>
            <span className="text-xs text-navy-muted block font-medium">Price</span>
            <span className="text-lg font-bold text-brand leading-none">
              ${item.price}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-navy-muted font-medium">
            <Clock className="w-3 h-3 text-navy-muted" />
            <span>{item.createdAt}</span>
          </div>
        </div>

      </div>

      {/* Clickable Card Area */}
      <Link
        to={`/item/${item.id}`}
        aria-label={`View ${item.title}`}
        className="absolute inset-0 z-0"
      />
      {/* Make sure interactive overlay buttons sit above */}
      <div className="pointer-events-none relative z-10" />
    </div>
  );
}
