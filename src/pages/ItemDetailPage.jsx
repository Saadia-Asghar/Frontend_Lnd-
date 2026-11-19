import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Clock, ShieldCheck, Heart, 
  MessageCircle, Share2, AlertTriangle, CheckCircle2 
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
  const saved = item ? isItemSaved(item.id) : false;

  if (!item) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-navy">Item Not Found</h2>
        <p className="text-sm text-navy-secondary mt-2">
          This listing may have been sold or removed by the student seller.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Active Listings</span>
        </Link>
      </div>
    );
  }

  // Related items in the same category (excluding current item)
  const relatedItems = items
    .filter((i) => i.categoryId === item.categoryId && i.id !== item.id)
    .slice(0, 4);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getConditionStyle = (condition) => {
    if (condition === 'New' || condition === 'Used - Like New') {
      return 'bg-status-greenLight text-status-green border-status-green/20';
    }
    return 'bg-inset text-navy-secondary border-subtle-border';
  };

  return (
    <div className="space-y-10">
      
      {/* Back and Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-navy-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to listings</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-subtle-border bg-surface text-xs font-medium text-navy hover:bg-inset transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-navy-muted" />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={(e) => toggleSaveItem(item.id, e)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
              saved
                ? 'bg-brand text-white border-brand'
                : 'bg-surface text-navy border-subtle-border hover:bg-inset'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
            <span>{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Main Item Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Media Presentation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-inset border border-subtle-border shadow-card aspect-[4/3] w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Condition overlay */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border shadow-sm ${getConditionStyle(
                  item.condition
                )}`}
              >
                {item.condition}
              </span>
            </div>
          </div>

          {/* Safe Campus Pickup Box */}
          <div className="p-4 rounded-2xl bg-surface border border-subtle-border flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-light text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy">Campus Handover Location</h4>
              <p className="text-xs text-navy-secondary mt-0.5">
                The seller suggests meeting at <strong>{item.campusLocation}</strong>.
                Always inspect the item thoroughly before concluding the exchange.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Listing Details & Seller Actions */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-6">
            
            {/* Category tag & Post age */}
            <div className="flex items-center justify-between text-xs">
              <Link
                to={`/category/${item.categoryId}`}
                className="px-2.5 py-1 rounded-full bg-brand-light text-brand font-semibold hover:bg-brand hover:text-white transition-colors"
              >
                {item.categoryName}
              </Link>
              <span className="flex items-center gap-1 text-navy-muted">
                <Clock className="w-3.5 h-3.5" />
                <span>Posted {item.createdAt}</span>
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-navy leading-snug">
                {item.title}
              </h1>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-brand">
                  ${item.price}
                </span>
                <span className="text-xs text-navy-muted">student price</span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-subtle-border">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-muted mb-2">
                Item Description
              </h3>
              <p className="text-sm text-navy-secondary leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full py-4 px-6 bg-brand hover:bg-brand-hover text-white text-base font-semibold rounded-xl shadow-glow transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Seller</span>
              </button>
              <p className="text-[11px] text-navy-muted text-center mt-2.5">
                No upfront payment required. Inspect and hand over in person.
              </p>
            </div>

          </div>

          {/* Seller Profile Card */}
          <div className="p-6 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-muted">
              About the Student Seller
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
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-brand-light text-brand text-[10px] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs text-navy-secondary truncate mt-0.5">{item.seller.campusRole}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-2.5 rounded-xl bg-canvas border border-subtle-border text-center">
                <span className="text-navy-muted block text-[11px]">Rating</span>
                <span className="font-bold text-navy text-sm">{item.seller.rating} ★</span>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas border border-subtle-border text-center">
                <span className="text-navy-muted block text-[11px]">Replies</span>
                <span className="font-bold text-brand text-sm">{item.seller.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Safety Reminder */}
          <div className="p-4 rounded-2xl bg-status-amberLight/40 border border-status-amber/20 flex items-start gap-2.5 text-xs text-navy-secondary">
            <AlertTriangle className="w-4 h-4 text-status-amber flex-shrink-0 mt-0.5" />
            <span>
              For your safety, conduct trades in public campus locations and check electronics before parting with cash.
            </span>
          </div>

        </div>

      </div>

      {/* Related Items Section */}
      {relatedItems.length > 0 && (
        <section className="pt-8 border-t border-subtle-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-navy">More in {item.categoryName}</h2>
              <p className="text-xs text-navy-secondary mt-0.5">Explore related listings on campus</p>
            </div>
            <Link
              to={`/category/${item.categoryId}`}
              className="text-xs font-semibold text-brand hover:underline"
            >
              View all {item.categoryName} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
