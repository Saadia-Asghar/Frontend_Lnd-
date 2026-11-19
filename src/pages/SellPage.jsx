import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  PlusCircle, AlertCircle, Image as ImageIcon, CheckCircle2, 
  Sparkles, ArrowLeft, ShieldCheck, DollarSign 
} from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';

const PRESET_IMAGES = [
  { label: 'Textbook / Notes', url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80' },
  { label: 'Laptop / Tablet', url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80' },
  { label: 'Calculator / Tech', url: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=800&q=80' },
  { label: 'Dorm Furniture / Lamp', url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80' },
  { label: 'Campus Wear / Hoodie', url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' },
  { label: 'Bike / Scooter', url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80' }
];

export default function SellPage() {
  const navigate = useNavigate();
  const { categories, addItem } = useMarketplace();

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    categoryId: '',
    price: '',
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

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Item title is required';
    } else if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters long';
    }

    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a campus category';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid price greater than $0';
    }

    if (!formData.condition) {
      newErrors.condition = 'Item condition is required';
    }

    if (!formData.campusLocation.trim()) {
      newErrors.campusLocation = 'Campus pickup spot is required (e.g. Library Quad)';
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
      // Scroll to top of form smoothly
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const selectedCategory = categories.find((c) => c.id === formData.categoryId);

    const newItemData = {
      title: formData.title.trim(),
      categoryId: formData.categoryId,
      categoryName: selectedCategory ? selectedCategory.name : 'General',
      price: Number(formData.price),
      condition: formData.condition,
      isNew: formData.condition === 'New',
      campusLocation: formData.campusLocation.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      sellerName: formData.sellerName.trim(),
      sellerEmail: formData.sellerEmail.trim(),
      sellerPhone: formData.sellerPhone.trim() || '+1 (555) 012-3456'
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
    <div className="max-w-3xl mx-auto space-y-8">
      
      {/* Back button */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-navy-secondary hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Marketplace</span>
        </Link>
      </div>

      {/* Page Title Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Seller Desk</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">
            Post an Item for Sale
          </h1>
          <p className="text-sm text-navy-secondary mt-1">
            Connect with classmates looking for books, electronics, and dorm gear.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-status-green font-semibold bg-status-greenLight px-3 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          <span>Free Student Listing</span>
        </div>
      </div>

      {/* Success Notification Banner */}
      {submittedSuccess && (
        <div className="p-4 rounded-2xl bg-status-greenLight border border-status-green/30 flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-status-green flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-status-green">Listing Published!</h4>
            <p className="text-xs text-navy-secondary mt-0.5">Redirecting you to your new listing page...</p>
          </div>
        </div>
      )}

      {/* Sell Form */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-surface border border-subtle-border shadow-card space-y-8">
        
        {/* Section 1: Basic Information */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-navy border-b border-subtle-border pb-2">
            1. Listing Details
          </h2>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Item Title <span className="text-status-error">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. TI-84 Plus CE Graphing Calculator (Mint Condition)"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                errors.title
                  ? 'border-status-error focus:ring-1 focus:ring-status-error'
                  : 'border-subtle-border focus:border-brand focus:ring-2 focus:ring-brand/10'
              }`}
            />
            {errors.title && (
              <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.title}</span>
              </p>
            )}
          </div>

          {/* Category & Condition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Category Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Category <span className="text-status-error">*</span>
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all cursor-pointer ${
                  errors.categoryId
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              >
                <option value="">Select a category...</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.categoryId}</span>
                </p>
              )}
            </div>

            {/* Condition Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Condition <span className="text-status-error">*</span>
              </label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all cursor-pointer"
              >
                <option value="New">New (Unopened / With Tags)</option>
                <option value="Used - Like New">Used - Like New</option>
                <option value="Used - Good">Used - Good (Normal Wear)</option>
                <option value="Used - Fair">Used - Fair (Functional)</option>
              </select>
            </div>

          </div>

          {/* Price & Campus Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Price */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Price (USD) <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-muted text-sm font-semibold">
                  $
                </span>
                <input
                  type="number"
                  name="price"
                  placeholder="35"
                  min="1"
                  step="any"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full pl-8 pr-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                    errors.price
                      ? 'border-status-error focus:ring-1 focus:ring-status-error'
                      : 'border-subtle-border focus:border-brand'
                  }`}
                />
              </div>
              {errors.price && (
                <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.price}</span>
                </p>
              )}
            </div>

            {/* Campus Meetup Spot */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Campus Meetup Location <span className="text-status-error">*</span>
              </label>
              <input
                type="text"
                name="campusLocation"
                placeholder="e.g. Student Union, Library 1st Floor"
                value={formData.campusLocation}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.campusLocation
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
              {errors.campusLocation && (
                <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.campusLocation}</span>
                </p>
              )}
            </div>

          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Description <span className="text-status-error">*</span>
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Describe what's included, any flaws, wear-and-tear, or class codes it was used for..."
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all resize-y ${
                errors.description
                  ? 'border-status-error focus:ring-1 focus:ring-status-error'
                  : 'border-subtle-border focus:border-brand'
              }`}
            />
            {errors.description && (
              <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.description}</span>
              </p>
            )}
          </div>

        </div>

        {/* Section 2: Photo Setup */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-navy border-b border-subtle-border pb-2">
            2. Photo / Image
          </h2>

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Image URL <span className="text-status-error">*</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://images.unsplash.com/photo-..."
              value={formData.image}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                errors.image
                  ? 'border-status-error focus:ring-1 focus:ring-status-error'
                  : 'border-subtle-border focus:border-brand'
              }`}
            />
            {errors.image && (
              <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.image}</span>
              </p>
            )}
          </div>

          {/* Quick preset selector */}
          <div>
            <span className="text-xs text-navy-muted block mb-2">Or pick a campus sample image:</span>
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
                      ? 'border-brand bg-brand-light text-brand font-semibold'
                      : 'border-subtle-border bg-canvas text-navy-secondary hover:border-brand/40'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Image Preview Box */}
          {formData.image && (
            <div className="mt-3 p-3 rounded-2xl bg-canvas border border-subtle-border flex items-center gap-4">
              <img
                src={formData.image}
                alt="Preview"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="w-16 h-16 rounded-xl object-cover border border-subtle-border"
              />
              <div className="text-xs">
                <span className="font-semibold text-navy block">Image Preview</span>
                <span className="text-navy-muted truncate max-w-xs block">{formData.image}</span>
              </div>
            </div>
          )}

        </div>

        {/* Section 3: Seller Contact Details */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-navy border-b border-subtle-border pb-2">
            3. Seller Contact Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Seller Name */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Your Full Name <span className="text-status-error">*</span>
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="e.g. Taylor Swift"
                value={formData.sellerName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.sellerName
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
              {errors.sellerName && (
                <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.sellerName}</span>
                </p>
              )}
            </div>

            {/* Seller Student Email */}
            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5">
                Campus Email <span className="text-status-error">*</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                placeholder="e.g. yourname@university.edu"
                value={formData.sellerEmail}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-navy bg-canvas focus:bg-white focus:outline-none transition-all ${
                  errors.sellerEmail
                    ? 'border-status-error focus:ring-1 focus:ring-status-error'
                    : 'border-subtle-border focus:border-brand'
                }`}
              />
              {errors.sellerEmail && (
                <p className="flex items-center gap-1 text-xs text-status-error font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.sellerEmail}</span>
                </p>
              )}
            </div>

          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Phone / SMS <span className="text-navy-muted font-normal">(Optional, for fast text coordination)</span>
            </label>
            <input
              type="tel"
              name="sellerPhone"
              placeholder="+1 (555) 012-3456"
              value={formData.sellerPhone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-subtle-border text-sm text-navy bg-canvas focus:bg-white focus:border-brand focus:outline-none transition-all"
            />
          </div>

        </div>

        {/* Submission Button */}
        <div className="pt-4 border-t border-subtle-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-muted">
            By publishing, you agree to arrange safe handovers on university grounds.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-xl shadow-glow transition-all duration-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isSubmitting ? 'Publishing...' : 'Publish Campus Listing'}</span>
          </button>
        </div>

      </form>

    </div>
  );
}
