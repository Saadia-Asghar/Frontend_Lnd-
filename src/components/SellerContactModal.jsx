import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SellerContactModal({ item, onClose }) {
  const [message, setMessage] = useState(
    `Hi ${item.seller.name}, I am interested in your listing "${item.title}". Is it still available to meet near ${item.campusLocation}?`
  );
  const [buyerEmail, setBuyerEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buyerEmail.trim() || !buyerEmail.includes('@')) {
      setError('Please provide a valid campus email address');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-surface rounded-3xl border border-subtle-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-subtle-border bg-canvas/50">
          <div>
            <h3 className="text-lg font-bold text-navy">Contact Seller</h3>
            <p className="text-xs text-navy-secondary mt-0.5">Direct peer-to-peer campus communication</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-navy-muted hover:text-navy hover:bg-inset transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Seller Preview Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-inset/70 border border-subtle-border mb-6">
            <img
              src={item.seller.avatar}
              alt={item.seller.name}
              className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-navy text-sm truncate">{item.seller.name}</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-light text-brand text-[10px] font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-navy-secondary truncate mt-0.5">{item.seller.campusRole}</p>
              <div className="flex items-center gap-3 mt-1.5 text-[11px] text-navy-muted">
                <span>Rating: <strong className="text-navy">{item.seller.rating} ★</strong></span>
                <span>•</span>
                <span>Replies {item.seller.responseTime}</span>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="text-center py-6 px-4">
              <div className="w-14 h-14 rounded-full bg-status-greenLight text-status-green flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-navy">Message Dispatched!</h4>
              <p className="text-sm text-navy-secondary mt-2 max-w-sm mx-auto">
                We sent your inquiry directly to <strong>{item.seller.name}</strong> at their campus email. Responses will appear in your student inbox.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-xl shadow-glow transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">
                  Your Campus Email <span className="text-status-error">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. student@university.edu"
                  value={buyerEmail}
                  onChange={(e) => {
                    setBuyerEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                    error ? 'border-status-error focus:ring-1 focus:ring-status-error' : 'border-subtle-border focus:border-brand'
                  }`}
                />
                {error && <p className="text-xs text-status-error font-medium mt-1">{error}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">
                  Inquiry Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all resize-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-canvas border border-subtle-border text-xs text-navy-secondary flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>
                  Suggested meetup location: <strong>{item.campusLocation}</strong>. Always arrange handoffs in daylight at high-traffic campus zones.
                </span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl border border-subtle-border text-sm font-semibold text-navy hover:bg-inset transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </div>

              {/* Direct Channels */}
              <div className="pt-3 border-t border-subtle-border text-center">
                <span className="text-[11px] text-navy-muted">Prefer direct campus contact?</span>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <a
                    href={`mailto:${item.seller.email}?subject=Interested in ${encodeURIComponent(item.title)} on CampusMart`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{item.seller.email}</span>
                  </a>
                  <span className="text-navy-muted">•</span>
                  <a
                    href={`tel:${item.seller.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.seller.phone}</span>
                  </a>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
