import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, Sparkles, Plus, Check } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import CategoryTile from '../components/CategoryTile';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const { items, categories, searchTerm } = useMarketplace();

  // Filter states
  const [selectedCondition, setSelectedCondition] = useState('all'); // 'all', 'new', 'used'
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high'
  const [maxPrice, setMaxPrice] = useState(400);

  // Compute filtered items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesLoc = item.campusLocation.toLowerCase().includes(query);
        const matchesCategory = item.categoryName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesLoc && !matchesCategory) return false;
      }

      // Condition filter: 'all', 'new', 'used'
      if (selectedCondition === 'new') {
        if (!item.isNew && item.condition !== 'New') return false;
      } else if (selectedCondition === 'used') {
        if (item.isNew || item.condition === 'New') return false;
      }

      // Price filter
      if (item.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0; // default order
    });
  }, [items, searchTerm, selectedCondition, sortBy, maxPrice]);

  return (
    <div className="space-y-12">
      
      {/* Hero Banner (Clean, no purple gradients, crisp brand blue) */}
      <section className="relative overflow-hidden rounded-3xl bg-surface border border-subtle-border shadow-card p-6 sm:p-10 lg:p-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Student Marketplace</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-[1.15]">
            Buy & sell on campus. <br />
            <span className="text-brand">Fast, local, student-priced.</span>
          </h1>

          <p className="mt-4 text-base text-navy-secondary leading-relaxed">
            Trade textbooks, calculators, dorm essentials, and electronics with classmates next door. Skip shipping wait times and high retail margins.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-xl shadow-glow transition-all duration-200 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Sell Something</span>
            </Link>

            <a
              href="#listings"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-inset hover:bg-slate-200 text-navy text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              <span>Explore Listings</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Decorative badge indicator in top right */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-80 p-5 rounded-2xl bg-canvas border border-subtle-border shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-navy-muted mb-3">Campus Exchange Stats</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-navy-secondary">Average savings</span>
              <span className="font-bold text-navy">Up to 60%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-navy-secondary">Delivery time</span>
              <span className="font-bold text-brand">Same-day pickup</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-navy-secondary">Verification</span>
              <span className="font-bold text-navy flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-status-green" /> .edu students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (6 Categories) */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">Browse by Category</h2>
            <p className="text-sm text-navy-secondary mt-0.5">Find student gear sorted by semester needs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Main Listings with Filters */}
      <section id="listings" className="pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Campus Listings'}
            </h2>
            <p className="text-sm text-navy-secondary mt-0.5">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} available for campus pickup
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Condition Filter Chips (All, New, Used) */}
            <div className="inline-flex p-1 bg-surface rounded-full border border-subtle-border shadow-xs">
              <button
                type="button"
                onClick={() => setSelectedCondition('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  selectedCondition === 'all'
                    ? 'bg-brand text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedCondition('new')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  selectedCondition === 'new'
                    ? 'bg-brand text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                New Only
              </button>
              <button
                type="button"
                onClick={() => setSelectedCondition('used')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  selectedCondition === 'used'
                    ? 'bg-brand text-white shadow-xs'
                    : 'text-navy-secondary hover:text-navy'
                }`}
              >
                Used Only
              </button>
            </div>

            {/* Price Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-surface text-navy text-xs font-semibold rounded-xl px-3 py-2 border border-subtle-border focus:border-brand focus:outline-none cursor-pointer"
              >
                <option value="default">Sort: Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Price Cap Filter */}
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-xl border border-subtle-border text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-navy-muted" />
              <span className="text-navy-secondary font-medium">Max:</span>
              <span className="font-bold text-navy">${maxPrice}</span>
              <input
                type="range"
                min="10"
                max="400"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-20 accent-brand cursor-pointer"
              />
            </div>

          </div>
        </div>

        {/* Listings Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-surface border border-subtle-border">
            <div className="w-12 h-12 rounded-xl bg-inset text-navy-muted flex items-center justify-center mx-auto mb-3">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy">No matching items found</h3>
            <p className="text-sm text-navy-secondary mt-1 max-w-sm mx-auto">
              Try adjusting your price slider, condition filter, or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCondition('all');
                setMaxPrice(400);
              }}
              className="mt-4 px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-xl hover:bg-brand hover:text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
