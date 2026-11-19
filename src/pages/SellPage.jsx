import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  PlusCircle, AlertCircle, Image as ImageIcon, CheckCircle2, 
  Sparkles, ArrowLeft, ShieldCheck 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

const PRESET_IMAGES = [
  { label: 'Sneakers (Adidas)', url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80' },
  { label: 'Hoodie / Jacket', url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80' },
  { label: 'Denim Jacket', url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80' },
  { label: 'Textbook / Notes', url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80' },
  { label: 'iPad / Tablet', url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80' },
  { label: 'Calculator / Tech', url: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=700&q=80' }
];

export default function SellPage() {
  const navigate = useNavigate();
  const { categories, addItem } = useMarketplace();

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    categoryId: 'clothing',
    price: '',
    size: 'M',
    condition: 'Used - Like New',
    campusLocation: '',
    image: '',
    description: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: ''
  });

  // Errors State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Item title is required';
    } else if (formData.title.trim().length < 4) {
      newErrors.title = 'Title must be at least 4 characters long';
    }

    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a category';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Enter a valid price greater than $0';
    }

    if (!formData.campusLocation.trim()) {
      newErrors.campusLocation = 'Campus pickup spot is required (e.g. Student Union, Library)';
    }

    if (!formData.image.trim()) {
      newErrors.image = 'An image URL or preset selection is required';
    } else if (!formData.image.startsWith('http')) {
      newErrors.image = 'Please enter a valid image URL (starts with http/https)';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe the item condition and features';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Description should be at least 15 characters';
    }

    if (!formData.sellerName.trim()) {
      newErrors.sellerName = 'Your name is required';
    }

    if (!formData.sellerEmail.trim()) {
      newErrors.sellerEmail = 'Your student email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.sellerEmail)) {
      newErrors.sellerEmail = 'Please provide a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const selectedCategory = categories.find((c) => c.id === formData.categoryId);

    const newItemData = {
      title: formData.title.trim(),
      subtitle: formData.subtitle.trim(),
      categoryId: formData.categoryId,
      categoryName: selectedCategory ? selectedCategory.name : 'General',
      price: Number(formData.price),
      size: formData.size.trim(),
      condition: formData.condition,
      isNew: formData.condition === 'New',
      campusLocation: formData.campusLocation.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      sellerName: formData.sellerName.trim(),
      sellerEmail: formData.sellerEmail.trim(),
      sellerPhone: formData.sellerPhone.trim() || '+1 (555) 012-3456',
      timeAgo: 'Just now'
    };

    setTimeout(() => {
      const newId = addItem(newItemData);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => {
        navigate(`/item/${newId}`);
      }, 1200);
    }, 400);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-16">
      
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-navy-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>
      </div>

      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Post an Item</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">
            Create Listing
          </h1>
          <p className="text-xs sm:text-sm text-navy-secondary mt-1">
            Publish an item for instant handover with students on your campus.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-status-green font-bold bg-status-greenLight px-3 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          <span>Zero Fees</span>
        </div>
      </div>

      {/* Success banner */}
      {submittedSuccess && (
        <div className="p-4 rounded-2xl bg-status-greenLight border border-status-green/30 flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-status-green flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-status-green">Listing Published!</h4>
            <p className="text-xs text-navy-secondary mt-0.5">Opening your live listing now...</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-6">
        
        {/* Title */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Title <span className="text-status-error">*</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Adidas Shoes for Men"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
              errors.title
                ? 'border-status-error focus:ring-1 focus:ring-status-error'
                : 'border-subtle-border focus:border-brand focus:ring-2 focus:ring-brand/10'
            }`}
          />
          {errors.title && (
            <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.title}</span>
            </p>
          )}
        </div>

        {/* Subtitle / Model */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Subtitle / Model <span className="text-navy-muted font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            name="subtitle"
            placeholder="e.g. Ultraboost 20 Triple Black"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all"
          />
        </div>

        {/* Category & Condition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Category <span className="text-status-error">*</span>
            </label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Condition <span className="text-status-error">*</span>
            </label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all cursor-pointer"
            >
              <option value="New">New (With Tags / Box)</option>
              <option value="Used - Like New">Used - Like New</option>
              <option value="Used - Good">Used - Good</option>
              <option value="Used - Fair">Used - Fair</option>
            </select>
          </div>
        </div>

        {/* Price & Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Price (USD) <span className="text-status-error">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-muted font-bold text-sm">$</span>
              <input
                type="number"
                name="price"
                placeholder="199"
                value={formData.price}
                onChange={handleChange}
                className={`w-full pl-8 pr-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.price
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
            </div>
            {errors.price && (
              <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.price}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-navy mb-1.5">
              Size / Dimensions <span className="text-navy-muted font-normal">(e.g. M, 10.5, Standard)</span>
            </label>
            <input
              type="text"
              name="size"
              placeholder="e.g. M"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Campus Meetup Location */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Campus Pickup Spot <span className="text-status-error">*</span>
          </label>
          <input
            type="text"
            name="campusLocation"
            placeholder="e.g. Student Union Lobby or Library Quad"
            value={formData.campusLocation}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
              errors.campusLocation
                ? 'border-status-error focus:ring-1 focus:ring-status-error'
                : 'border-subtle-border focus:border-brand'
            }`}
          />
          {errors.campusLocation && (
            <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.campusLocation}</span>
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-navy mb-1.5">
            Description <span className="text-status-error">*</span>
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Detail any wear, sizing notes, or course codes..."
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all resize-y ${
              errors.description
                ? 'border-status-error focus:ring-1 focus:ring-status-error'
                : 'border-subtle-border focus:border-brand'
            }`}
          />
          {errors.description && (
            <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* Photo Image URL & Presets */}
        <div className="space-y-3 pt-2 border-t border-subtle-border">
          <label className="block text-xs font-bold text-navy">
            Product Photo <span className="text-status-error">*</span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Paste image URL (https://...)"
            value={formData.image}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
              errors.image
                ? 'border-status-error focus:ring-1 focus:ring-status-error'
                : 'border-subtle-border focus:border-brand'
            }`}
          />
          {errors.image && (
            <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.image}</span>
            </p>
          )}

          {/* Quick presets */}
          <div>
            <span className="text-[11px] text-navy-muted block mb-2 font-medium">Or pick a studio photo preset:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESET_IMAGES.map((preset, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, image: preset.url }));
                    if (errors.image) setErrors((prev) => ({ ...prev, image: null }));
                  }}
                  className={`p-2 rounded-xl text-xs font-medium text-left border flex items-center gap-2 transition-all ${
                    formData.image === preset.url
                      ? 'border-brand bg-brand-light text-brand font-bold'
                      : 'border-subtle-border bg-canvas text-navy-secondary hover:border-brand/40'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {formData.image && (
            <div className="mt-3 p-3 rounded-2xl bg-canvas border border-subtle-border flex items-center gap-3">
              <img
                src={formData.image}
                alt="Preview"
                className="w-14 h-14 rounded-xl object-cover bg-white"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="text-xs">
                <span className="font-bold text-navy block">Selected Photo</span>
                <span className="text-navy-muted truncate max-w-xs block">{formData.image}</span>
              </div>
            </div>
          )}
        </div>

        {/* Seller Info */}
        <div className="space-y-4 pt-2 border-t border-subtle-border">
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy-muted">
            Your Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Your Name <span className="text-status-error">*</span>
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="e.g. Alex Vance"
                value={formData.sellerName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.sellerName
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
              {errors.sellerName && (
                <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.sellerName}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Campus Email <span className="text-status-error">*</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                placeholder="e.g. student@campus.edu"
                value={formData.sellerEmail}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-2xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.sellerEmail
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
              {errors.sellerEmail && (
                <p className="flex items-center gap-1 text-xs text-status-error font-semibold mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.sellerEmail}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-subtle-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-muted">
            All listings are free for verified students.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand hover:bg-brand-hover text-white text-sm font-bold rounded-full shadow-glow transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isSubmitting ? 'Publishing...' : 'Publish Listing'}</span>
          </button>
        </div>

      </form>

    </div>
  );
}
