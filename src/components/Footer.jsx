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
              <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center text-white font-bold text-xs">
                <span>On</span>
              </div>
              <span className="text-lg font-bold text-navy">
                Campus<span className="text-brand">Mart</span>
                <span className="ml-2 text-xs font-bold text-coral uppercase tracking-wide">GIKI</span>
              </span>
            </div>
            <p className="text-sm text-navy-secondary max-w-sm leading-relaxed">
              The verified peer-to-peer marketplace for Ghulam Ishaq Khan Institute (GIKI) students. Safely buy and sell textbooks, calculators, hostel room appliances, and batch gear across all hostels in Pakistani Rupees (PKR).
            </p>
            <div className="flex items-center gap-4 text-xs text-navy-muted pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand" /> GIKI Verified Network
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-brand" /> Zero Commission
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">GIKI Categories</h4>
            <ul className="space-y-2.5 text-sm text-navy-secondary">
              <li>
                <Link to="/category/books" className="hover:text-brand transition-colors">Textbooks & Course Guides</Link>
              </li>
              <li>
                <Link to="/category/electronics" className="hover:text-brand transition-colors">Scientific Calculators & Tech</Link>
              </li>
              <li>
                <Link to="/category/hostel-living" className="hover:text-brand transition-colors">Hostel Room Essentials</Link>
              </li>
              <li>
                <Link to="/category/clothing" className="hover:text-brand transition-colors">Batch Hoodies & Campus Wear</Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-brand transition-colors">Post an Item for Sale</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">Campus Exchange Zones</h4>
            <div className="p-3.5 rounded-2xl bg-canvas border border-subtle-border space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
                <MapPin className="w-3.5 h-3.5 text-brand" /> Recommended Handover Spots
              </div>
              <p className="text-xs text-navy-secondary leading-normal">
                TUC Cafe, Central Library Quad, Raju Cafe, or daytime hostel gate. No courier fees—direct GIKian handovers.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-subtle-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-muted">
          <p>© {new Date().getFullYear()} CampusMart GIKI Edition • Topi, Swabi, KPK.</p>
          <p className="flex items-center gap-2">
            <span>Built for Ghulam Ishaq Khan Institute Students</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
