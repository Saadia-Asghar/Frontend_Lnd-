import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageSquare, User, Plus } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isCategory = location.pathname.startsWith('/category');
  const isSell = location.pathname === '/sell';

  return (
    <>
      {/* Floating "+ Sell in GIKI" Button (Dribbble aesthetic) */}
      {!isSell && (
        <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-40">
          <Link
            to="/sell"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-surface rounded-full shadow-floatPill border border-subtle-border/80 hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <div className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-brand-hover">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-bold text-navy tracking-tight">
              Sell in GIKI
            </span>
          </Link>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface/95 backdrop-blur-md border-t border-subtle-border px-6 py-2.5">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          
          <Link
            to="/"
            title="Home"
            className={`p-2 transition-colors ${
              isHome ? 'text-navy font-bold' : 'text-navy-muted hover:text-navy'
            }`}
          >
            <Home className={`w-5 h-5 ${isHome ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          </Link>

          <Link
            to="/category/books"
            title="GIKI Categories"
            className={`p-2 transition-colors ${
              isCategory ? 'text-brand font-bold' : 'text-navy-muted hover:text-navy'
            }`}
          >
            <Compass className={`w-5 h-5 ${isCategory ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          </Link>

          {/* Spacer for the center floating button */}
          <div className="w-12 h-6" />

          <button
            type="button"
            title="GIKI Inquiries"
            onClick={() => alert("GIKI message notifications are sent directly to your student email address.")}
            className="p-2 text-navy-muted hover:text-navy transition-colors"
          >
            <MessageSquare className="w-5 h-5 stroke-[1.8]" />
          </button>

          <Link
            to="/sell"
            title="Post Item"
            className={`p-2 transition-colors ${
              isSell ? 'text-brand' : 'text-navy-muted hover:text-navy'
            }`}
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </Link>

        </div>
      </nav>
    </>
  );
}
