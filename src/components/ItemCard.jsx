import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function ItemCard({ item }) {
  const { toggleSaveItem, isItemSaved } = useMarketplace();
  const saved = isItemSaved(item.id) || item.isLiked;

  return (
    <div className="group relative flex flex-col transition-all duration-200">
      
      {/* 1. Upper Product Image Box (Matching Dribbble soft grey rounded container) */}
      <div className="relative aspect-square sm:aspect-[4/3] w-full bg-[#EEF2F7] rounded-2xl sm:rounded-3xl overflow-hidden p-3 sm:p-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
        
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl sm:rounded-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />

        {/* Condition pill or New badge on image */}
        {item.isNew && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-surface text-brand text-[10px] font-bold shadow-xs">
            NEW
          </span>
        )}

      </div>

      {/* 2. Content Details below image */}
      <div className="pt-3 px-1 flex flex-col gap-1">
        
        {/* Time Ago (e.g. '4 hours ago' from Dribbble shot) */}
        <span className="text-[11px] font-medium text-navy-muted leading-none">
          {item.timeAgo || item.createdAt}
        </span>

        {/* Title & Size row */}
        <div className="flex items-start justify-between gap-2 mt-0.5">
          <Link
            to={`/item/${item.id}`}
            className="text-sm font-semibold text-navy leading-snug line-clamp-1 group-hover:text-brand transition-colors"
          >
            {item.title}
          </Link>

          {item.size && (
            <span className="text-xs font-semibold text-navy-muted flex-shrink-0">
              {item.size}
            </span>
          )}
        </div>

        {/* Price & Heart Row */}
        <div className="flex items-center justify-between pt-0.5">
          <span className="text-base sm:text-lg font-bold text-navy">
            ${item.price}
          </span>

          <button
            type="button"
            onClick={(e) => toggleSaveItem(item.id, e)}
            title={saved ? 'Favorited' : 'Add to favorites'}
            className="p-1 rounded-full text-navy-muted hover:text-coral transition-colors"
          >
            <Heart
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors ${
                saved
                  ? 'fill-coral text-coral'
                  : 'text-navy-muted hover:text-coral'
              }`}
            />
          </button>
        </div>

      </div>

      {/* Clickable Card Link covering the container */}
      <Link
        to={`/item/${item.id}`}
        aria-label={`View ${item.title}`}
        className="absolute inset-0 z-0"
      />
      {/* Interactive buttons sit on z-10 */}
      <div className="pointer-events-none relative z-10" />
    </div>
  );
}
