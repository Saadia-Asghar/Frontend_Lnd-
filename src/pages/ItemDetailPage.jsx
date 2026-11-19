import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Clock, ShieldCheck, Heart, 
  MessageCircle, Share2, AlertTriangle 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import ItemCard from '../components/ItemCard';
import SellerContactModal from '../components/SellerContactModal';

export default function ItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, isItemSaved, toggleSaveItem } = useMarketplace();
  const [showContactModal, setShowContactModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const item = items.find((i) => i.id === id);
  const saved = item ? isItemSaved(item.id) || item.isLiked : false;

  if (!item) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-navy">Item Not Found</h2>
        <p className="text-sm text-navy-secondary mt-2">
          This listing may have been sold or removed by the student seller.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Active Listings</span>
        </Link>
      </div>
    );
  }

  // Related items in the same category
  const relatedItems = items
    .filter((i) => i.categoryId === item.categoryId && i.id !== item.id)
    .slice(0, 4);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Bar with Back, Share, and Heart */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold text-navy-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle-border bg-surface text-xs font-semibold text-navy hover:bg-inset transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-navy-muted" />
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={(e) => toggleSaveItem(item.id, e)}
            className={`p-2 rounded-full border transition-colors ${
              saved
                ? 'bg-coral text-white border-coral'
                : 'bg-surface text-navy-muted border-subtle-border hover:text-coral'
            }`}
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Product Photo matching Dribbble soft grey rounded container */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-[#EEF2F7] border border-subtle-border/80 p-6 sm:p-10 flex items-center justify-center aspect-[4/3] w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain mix-blend-multiply"
            />
            {item.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface text-brand text-xs font-bold shadow-xs">
                NEW
              </span>
            )}
          </div>

          {/* Campus Location Meetup Strip */}
          <div className="p-4 rounded-2xl bg-surface border border-subtle-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-light text-brand flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs text-navy-muted block">Campus Handover Location</span>
              <span className="text-sm font-bold text-navy truncate block">{item.campusLocation}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Listing Details & Seller Actions */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-6">
            
            {/* Category Pill & Time */}
            <div className="flex items-center justify-between text-xs">
              <Link
                to={`/category/${item.categoryId}`}
                className="px-3 py-1 rounded-full bg-brand-light text-brand font-bold hover:bg-brand hover:text-white transition-colors"
              >
                {item.categoryName}
              </Link>
              <span className="flex items-center gap-1 text-navy-muted font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.timeAgo || item.createdAt}</span>
              </span>
            </div>

            {/* Title, Subtitle, Size & Price */}
            <div>
              <div className="flex items-start justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-navy leading-snug">
                  {item.title}
                </h1>
                {item.size && (
                  <span className="px-2.5 py-1 rounded-full bg-inset text-navy-secondary text-xs font-bold flex-shrink-0">
                    {item.size}
                  </span>
                )}
              </div>

              {item.subtitle && (
                <p className="text-sm text-navy-secondary mt-1">{item.subtitle}</p>
              )}

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-navy">
                  ${item.price}
                </span>
                <span className="text-xs text-navy-muted font-medium">student direct price</span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-subtle-border">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-muted mb-2">
                Description
              </h3>
              <p className="text-sm text-navy-secondary leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Contact Seller CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full py-4 px-6 bg-brand hover:bg-brand-hover text-white text-base font-bold rounded-full shadow-glow transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Seller</span>
              </button>
              <p className="text-[11px] text-navy-muted text-center mt-2.5">
                No upfront online charges. Verify in person on campus.
              </p>
            </div>

          </div>

          {/* Seller Card */}
          <div className="p-6 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-muted">
              Student Seller
            </h3>
            
            <div className="flex items-center gap-3.5">
              <img
                src={item.seller.avatar}
                alt={item.seller.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-light"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-navy text-sm truncate">{item.seller.name}</span>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-brand-light text-brand text-[10px] font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs text-navy-secondary truncate mt-0.5">{item.seller.campusRole}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-2.5 rounded-2xl bg-canvas border border-subtle-border text-center">
                <span className="text-navy-muted block text-[11px]">Rating</span>
                <span className="font-bold text-navy text-sm">{item.seller.rating} ★</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-canvas border border-subtle-border text-center">
                <span className="text-navy-muted block text-[11px]">Replies</span>
                <span className="font-bold text-brand text-sm">{item.seller.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Safety Reminder */}
          <div className="p-4 rounded-2xl bg-status-amberLight/40 border border-status-amber/20 flex items-start gap-2.5 text-xs text-navy-secondary">
            <AlertTriangle className="w-4 h-4 text-status-amber flex-shrink-0 mt-0.5" />
            <span>
              Always meet in busy campus spaces like the Student Union or Library.
            </span>
          </div>

        </div>

      </div>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <section className="pt-8 border-t border-subtle-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-navy">More in {item.categoryName}</h2>
            <Link
              to={`/category/${item.categoryId}`}
              className="text-xs font-bold text-brand hover:underline"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedItems.map((relItem) => (
              <ItemCard key={relItem.id} item={relItem} />
            ))}
          </div>
        </section>
      )}

      {/* Contact Seller Modal */}
      {showContactModal && (
        <SellerContactModal
          item={item}
          onClose={() => setShowContactModal(false)}
        />
      )}

    </div>
  );
}
