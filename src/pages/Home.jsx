import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import StudentSplashBanner from '../components/StudentSplashBanner';
import CategoryTile from '../components/CategoryTile';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const { items, categories, searchTerm } = useMarketplace();

  // Filters
  const [selectedCondition, setSelectedCondition] = useState('all'); // 'all', 'new', 'used'
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(50000);

  // Compute filtered items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCat = item.categoryName?.toLowerCase().includes(query);
        const matchesLoc = item.campusLocation?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCat && !matchesLoc) return false;
      }

      // Condition filter
      if (selectedCondition === 'new') {
        if (!item.isNew && item.condition !== 'New') return false;
      } else if (selectedCondition === 'used') {
        if (item.isNew || item.condition === 'New') return false;
      }

      // Price filter in Rupees
      if (Number(item.price) > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [items, searchTerm, selectedCondition, sortBy, maxPrice]);

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. GIKI Splash Banner */}
      <StudentSplashBanner />

      {/* 2. Categories Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
              GIKI Categories
            </h2>
            <p className="text-xs text-navy-muted">Browse textbooks, lab tools, and hostel gear</p>
          </div>
          <Link
            to="/category/books"
            className="inline-flex items-center gap-1 text-sm font-bold text-coral hover:text-coral-hover transition-colors"
          >
            <span>See All</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Category Horizontal Row / Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 overflow-x-auto scrollbar-none pb-2">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 3. Recently Added Items Section */}
      <section id="recent-items" className="pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
              Recently Added items
            </h2>
            <p className="text-xs text-navy-secondary mt-0.5">
              {filteredItems.length} active listings across GIKI Hostels & Campus
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Condition Filters */}
            <div className="inline-flex p-1 bg-surface rounded-full border border-subtle-border shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedCondition('all')}
                className={`px-3.5 py-1 text-xs font-bold rounded-full transition-all ${
                  selectedCondition === 'all'
                    ? 'bg-navy text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedCondition('new')}
                className={`px-3.5 py-1 text-xs font-bold rounded-full transition-all ${
                  selectedCondition === 'new'
                    ? 'bg-navy text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                New
              </button>
              <button
                type="button"
                onClick={() => setSelectedCondition('used')}
                className={`px-3.5 py-1 text-xs font-bold rounded-full transition-all ${
                  selectedCondition === 'used'
                    ? 'bg-navy text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                Used
              </button>
            </div>

            {/* Price Cap Filter in PKR */}
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full border border-subtle-border text-xs">
              <span className="text-navy-muted font-medium">Under</span>
              <span className="font-bold text-navy">Rs. {maxPrice.toLocaleString()}</span>
              <input
                type="range"
                min="1000"
                max="90000"
                step="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-16 accent-brand cursor-pointer"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface text-navy text-xs font-semibold rounded-full px-3 py-1.5 border border-subtle-border focus:border-brand focus:outline-none cursor-pointer"
            >
              <option value="default">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

          </div>
        </div>

        {/* 2-column on mobile, 4-column on desktop matching Dribbble shot */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-surface border border-subtle-border shadow-card">
            <div className="w-12 h-12 rounded-full bg-inset text-navy-muted flex items-center justify-center mx-auto mb-3">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy">No GIKI items match this filter</h3>
            <p className="text-xs text-navy-secondary mt-1 max-w-sm mx-auto">
              Try adjusting your price slider or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCondition('all');
                setMaxPrice(50000);
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-brand text-white text-xs font-bold rounded-full shadow-sm hover:bg-brand-hover transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
