import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialItems, categories } from '../data';

const MarketplaceContext = createContext();

export function MarketplaceProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('giki_mart_items_v2');
    return saved ? JSON.parse(saved) : initialItems;
  });

  const [savedItemIds, setSavedItemIds] = useState(() => {
    const saved = localStorage.getItem('giki_mart_saved_ids');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('giki_mart_items_v2', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('giki_mart_saved_ids', JSON.stringify(savedItemIds));
  }, [savedItemIds]);

  const addItem = (newItem) => {
    const itemWithDefaults = {
      ...newItem,
      id: `item-${Date.now()}`,
      createdAt: 'Just now',
      timeAgo: 'Just now',
      isNew: newItem.condition === 'New',
      seller: {
        name: newItem.sellerName || 'Verified GIKian',
        email: newItem.sellerEmail,
        phone: newItem.sellerPhone || '+92 300 1234567',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        responseTime: '< 30 mins',
        rating: '5.0',
        campusRole: 'GIKI Student • Verified Campus Member'
      }
    };
    setItems((prev) => [itemWithDefaults, ...prev]);
    return itemWithDefaults.id;
  };

  const toggleSaveItem = (id, e) => {
    if (e) e.stopPropagation();
    setSavedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isItemSaved = (id) => savedItemIds.includes(id);

  return (
    <MarketplaceContext.Provider
      value={{
        items,
        categories,
        addItem,
        savedItemIds,
        toggleSaveItem,
        isItemSaved,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
}
