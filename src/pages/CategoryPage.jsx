import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Shirt, BookOpen, Gamepad2, Laptop, Home, Bike, Grid, AlertCircle, RefreshCcw } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import ItemCard from '../components/ItemCard';

const iconMap = {
  Shirt,
  BookOpen,
  Gamepad2,
  Laptop,
  Home,
  Bike
};

export default function CategoryPage() {
  const { id } = useParams();
  const { items, categories } = useMarketplace();

  // Find active category
  const currentCategory = categories.find((c) => c.id === id);

  // Filters
  const [selectedCondition, setSelectedCondition] = useState('all'); // 'all', 'new', 'used'
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(400);

  const IconComponent = currentCategory ? iconMap[currentCategory.icon] || Grid : Grid;

  // Filter items belonging to this category
  const categoryItems = useMemo(() => {
    return items.filter((item) => {
      // Must match category
      if (item.categoryId !== id) return false;

      // Condition filter
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
      return 0;
    });
  }, [items, id, selectedCondition, sortBy, maxPrice]);

  if (!currentCategory) {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-status-errorLight text-status-error flex items-center justify-center mx-auto mb-3">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-navy">Category Not Found</h2>
        <p className="text-sm text-navy-secondary mt-1">
          The category you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Marketplace</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-navy-muted">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <span>/</span>
        <span className="text-navy-secondary">Categories</span>
        <span>/</span>
        <span className="font-semibold text-brand">{currentCategory.name}</span>
      </div>

      {/* Category Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-subtle-border"
            style={{ color: currentCategory.color || '#4D7BF3', backgroundColor: currentCategory.bgLight || '#EFF6FF' }}
          >
            <IconComponent className="w-8 h-8 stroke-[1.8]" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">{currentCategory.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-inset text-navy-secondary text-xs font-bold">
                {categoryItems.length} {categoryItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-navy-secondary mt-1 max-w-xl">
              {currentCategory.description}. Verified campus listings for direct handoff.
            </p>
          </div>
        </div>

        <Link
          to="/sell"
          className="self-start md:self-auto px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-full shadow-glow transition-all whitespace-nowrap"
        >
          + Post in {currentCategory.shortName || currentCategory.name}
        </Link>
      </div>

      {/* Category Quick Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = cat.id === id;
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-brand text-white border-brand shadow-glow'
                  : 'bg-surface text-navy-secondary border-subtle-border hover:border-brand/40 hover:text-navy'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="p-4 rounded-2xl bg-surface border border-subtle-border flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Condition Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-navy-muted">Condition:</span>
          <div className="inline-flex p-1 bg-canvas rounded-full border border-subtle-border">
            <button
              type="button"
              onClick={() => setSelectedCondition('all')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
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
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
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
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                selectedCondition === 'used'
                  ? 'bg-navy text-white shadow-xs'
                  : 'text-navy-secondary hover:text-navy'
              }`}
            >
              Used
            </button>
          </div>
        </div>

        {/* Right: Price slider and Sort */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-canvas px-3 py-1.5 rounded-full border border-subtle-border text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-navy-muted" />
            <span className="text-navy-secondary font-medium">Under:</span>
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

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-canvas text-navy text-xs font-semibold rounded-full px-3 py-1.5 border border-subtle-border focus:border-brand focus:outline-none cursor-pointer"
          >
            <option value="default">Default Order</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Items Grid */}
      {categoryItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-surface border border-subtle-border shadow-card">
          <div className="w-12 h-12 rounded-full bg-inset text-navy-muted flex items-center justify-center mx-auto mb-3">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy">No listings match these filters</h3>
          <p className="text-xs text-navy-secondary mt-1 max-w-sm mx-auto">
            Try adjusting your maximum price cap or switching condition.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setSelectedCondition('all');
                setMaxPrice(400);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-light text-brand text-xs font-bold rounded-full hover:bg-brand hover:text-white transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
            <Link
              to="/sell"
              className="px-4 py-2 bg-brand text-white text-xs font-bold rounded-full hover:bg-brand-hover transition-colors"
            >
              Post First Item
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
