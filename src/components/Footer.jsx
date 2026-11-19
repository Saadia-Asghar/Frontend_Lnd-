import React from 'react';
import { ShoppingBag, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-subtle-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-navy">
                Campus<span className="text-brand">Mart</span>
              </span>
            </div>
            <p className="text-sm text-navy-secondary max-w-sm leading-relaxed">
              The verified peer-to-peer student marketplace. Safely exchange textbooks, tech, dorm furniture, and campus gear with students on your campus.
            </p>
            <div className="flex items-center gap-4 text-xs text-navy-muted pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand" /> Verified Student Network
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-brand" /> Zero Commission
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-navy-secondary">
              <li>
                <Link to="/" className="hover:text-brand transition-colors">Browse All Listings</Link>
              </li>
              <li>
                <Link to="/category/textbooks" className="hover:text-brand transition-colors">Textbooks & Notes</Link>
              </li>
              <li>
                <Link to="/category/electronics" className="hover:text-brand transition-colors">Laptops & Tech</Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-brand transition-colors">Post an Item for Sale</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">Campus Safety</h4>
            <div className="p-3.5 rounded-xl bg-canvas border border-subtle-border space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-navy">
                <MapPin className="w-3.5 h-3.5 text-brand" /> Safe Exchange Zones
              </div>
              <p className="text-xs text-navy-secondary leading-normal">
                Always meet in daylight at the University Library, Student Union, or campus dining halls.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-subtle-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-muted">
          <p>© {new Date().getFullYear()} CampusMart. Designed for student communities.</p>
          <p className="flex items-center gap-2">
            <span>Powered by React + Vite + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
