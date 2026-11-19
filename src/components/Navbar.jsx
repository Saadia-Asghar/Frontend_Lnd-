import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Plus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function Navbar() {
  const { searchTerm, setSearchTerm } = useMarketplace();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== '/' && !location.pathname.startsWith('/category')) {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white shadow-glow transition-transform duration-200 group-hover:scale-105">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-navy leading-none">
                Campus<span className="text-brand">Mart</span>
              </span>
              <span className="text-[11px] font-medium text-navy-muted tracking-wide mt-1">
                Student Exchange
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-md hidden sm:block relative"
          >
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-navy-muted absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search textbooks, tech, dorm essentials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-inset hover:bg-slate-100 focus:bg-white text-navy placeholder-navy-muted text-sm rounded-xl pl-10 pr-4 py-2.5 border border-transparent focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10 transition-all duration-200"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 text-xs font-semibold text-navy-muted hover:text-navy"
                >
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* Action Links & Sell Button */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-light text-brand text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Campus Verified</span>
            </div>

            <Link
              to="/sell"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-xl shadow-glow transition-all duration-200 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Post an Item</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar below header */}
        <div className="sm:hidden pb-3">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-navy-muted absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search items on campus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-inset text-navy placeholder-navy-muted text-sm rounded-xl pl-10 pr-4 py-2 border border-transparent focus:border-brand focus:outline-none"
            />
          </div>
        </div>

      </div>
    </header>
  );
}
