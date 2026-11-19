import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Bell, X, ShieldCheck } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function Navbar() {
  const { searchTerm, setSearchTerm } = useMarketplace();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== '/' && !location.pathname.startsWith('/category')) {
      navigate('/');
    }
    setShowSearchModal(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* GIKI CampusMart Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-coral flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span>On</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand leading-none">
                Campus<span className="text-navy">Mart</span>
              </span>
              <span className="text-[10px] font-bold text-coral tracking-wider mt-1 uppercase">
                GIKI Edition • Topi
              </span>
            </div>
          </Link>

          {/* Search Bar on Desktop */}
          <form 
            onSubmit={handleSearchSubmit}
            className="flex-1 max-w-md hidden md:block relative"
          >
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-navy-muted absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search GIKI textbooks, calculators, hostel gear..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-inset hover:bg-slate-100 focus:bg-white text-navy placeholder-navy-muted text-sm rounded-full pl-10 pr-4 py-2.5 border border-transparent focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10 transition-all duration-200"
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

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* GIKI Verified Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-light text-brand text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>@giki.edu.pk</span>
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchModal(!showSearchModal)}
              title="Search items"
              className="md:hidden p-2.5 rounded-full text-navy-secondary hover:text-navy hover:bg-inset transition-colors"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Notification Bell with red badge '2' */}
            <div className="relative">
              <button
                onClick={() => setHasUnread(false)}
                title="GIKI Notifications"
                className="p-2.5 rounded-full text-navy-secondary hover:text-navy hover:bg-inset transition-colors"
              >
                <Bell className="w-5 h-5 stroke-[2]" />
              </button>
              {hasUnread && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-coral text-white text-[10px] font-bold rounded-full flex items-center justify-center pointer-events-none ring-2 ring-surface">
                  2
                </span>
              )}
            </div>

            {/* Post Listing Link */}
            <Link
              to="/sell"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-light text-brand text-xs font-bold hover:bg-brand hover:text-white transition-colors"
            >
              <span>+ Post in GIKI</span>
            </Link>

          </div>

        </div>

        {/* Mobile Search Dropdown */}
        {showSearchModal && (
          <div className="md:hidden pb-3 pt-1 border-t border-subtle-border animate-in fade-in">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="w-4 h-4 text-navy-muted absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                autoFocus
                placeholder="Search GIKI items (Calculus, Casio, Cycles)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-inset text-navy placeholder-navy-muted text-sm rounded-full pl-10 pr-9 py-2 border border-transparent focus:border-brand focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowSearchModal(false)}
                className="absolute right-2.5 p-1 text-navy-muted hover:text-navy"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </header>
  );
}
