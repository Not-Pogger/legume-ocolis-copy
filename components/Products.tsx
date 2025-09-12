"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { cn } from '@/lib/utils';
import prices from '@/lib/prices.json';
import { GradientButton } from '@/components/ui/GradientButton';

interface Product {
  id: string;
  category: string;
  image: string;
  emoji: string;
  title: string;
  description: string;
  price?: string | null;
  status?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative"
  >
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={cn(
            "object-cover group-hover:scale-110 transition-transform duration-500",
            !product.price && "grayscale"
          )}
        />
        {product.price && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            {product.price}
          </div>
        )}
        {!product.price && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold font-heading text-red-200">
              {product.status || 'Indisponibil'}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 text-4xl">
          {product.emoji}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-2 text-gray-800" style={{ letterSpacing: '-0.1rem' }}>
          {product.title}
        </h3>
        <p className="text-gray-600 font-body mb-4">
          {product.description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function Products() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const greenColors = { start: '#10b981', end: '#84cc16', from: '#84cc16', to: '#10b981' };

  const products = useMemo(() => {
    const productsData = [
      { id: 'tomatoes', category: 'tomatoes', image: '/images/rosii1.jpg', emoji: '🍅', ...t.products.items.tomatoes },
      { id: 'peppers', category: 'peppers', image: '/images/ardei1.jpg', emoji: '🌶️', ...t.products.items.peppers },
      { id: 'hotPeppers', category: 'peppers', image: '/images/ardei2.jpg', emoji: '🌶️', ...t.products.items.hotPeppers },
      { id: 'semiHotPeppers', category: 'peppers', image: '/images/ardei5.jpg', emoji: '🌶️', ...t.products.items.semiHotPeppers },
      { id: 'kapiaPeppers', category: 'peppers', image: '/images/ardei3.jpg', emoji: '🌶️', ...t.products.items.kapiaPeppers },
      { id: 'gogosari', category: 'peppers', image: '/images/ardei4.jpg', emoji: '🌶️', ...t.products.items.gogosari },
      { id: 'eggplants', category: 'others', image: '/images/vinete1.jpg', emoji: '🍆', ...t.products.items.eggplants },
      { id: 'cabbage', category: 'others', image: '/images/varza2.jpg', emoji: '🥬', ...t.products.items.cabbage },
      { id: 'corn', category: 'others', image: '/images/porumb1.jpg', emoji: '🌽', ...t.products.items.corn },
      { id: 'potatoes', category: 'others', image: '/images/cartofi1.jpg', emoji: '🥔', ...t.products.items.potatoes },
      { id: 'cucumbers', category: 'others', image: '/images/castraveti1.jpg', emoji: '🥒', ...t.products.items.cucumbers },
      { id: 'watermelon', category: 'others', image: '/images/lebenita1.jpg', emoji: '🍉', ...t.products.items.watermelon },
      { id: 'spinach', category: 'others', image: '/images/spanac1.jpg', emoji: '🥬', ...t.products.items.spinach },
      { id: 'radishes', category: 'others', image: '/images/ridichi1.jpg', emoji: '🤷', ...t.products.items.radishes },
      { id: 'onions', category: 'others', image: '/images/ceapa1.jpg', emoji: '🧅', ...t.products.items.onions },
    ];
    return productsData.map(p => ({
      ...p,
      price: prices[p.id as keyof typeof prices] || null,
    }));
  }, [t]);

  const { availableProducts, unavailableProducts } = useMemo(() => {
    const available = products.filter(p => p.price);
    const unavailable = products.filter(p => !p.price);
    return { availableProducts: available, unavailableProducts: unavailable };
  }, [products]);

  const getFiltered = (items: Product[]) => {
    if (activeFilter === 'all') return items;
    return items.filter(p => p.category === activeFilter);
  };

  const filters = [
    { id: 'all', label: t.products.filterAll },
    { id: 'tomatoes', label: t.products.filterTomatoes },
    { id: 'peppers', label: t.products.filterPeppers },
    { id: 'others', label: t.products.filterOthers },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{ letterSpacing: '-0.1rem' }}>
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.products.subtitle}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            const grayColors = { start: '#f3f4f6', end: '#e5e7eb', from: '#d1d5db', to: '#e5e7eb' };
            return (
              <GradientButton
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                colors={isActive ? greenColors : grayColors}
                className={`px-6 py-2 rounded-full font-body font-medium transition-all ${isActive ? 'text-white shadow-lg scale-105' : 'text-gray-700'}`}
              >
                {filter.label}
              </GradientButton>
            )
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {getFiltered(availableProducts).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {getFiltered(unavailableProducts).length > 0 && (
          <div className="text-center mt-12">
            {!showUnavailable ? (
              <GradientButton
                key="show"
                onClick={() => setShowUnavailable(true)}
                colors={greenColors}
                className="bg-gray-200 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-all"
              >
                {t.products.showMore || 'Vezi și produsele indisponibile'}
              </GradientButton>
            ) : (
              <AnimatePresence>
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {getFiltered(unavailableProducts).map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        )}

        {showUnavailable && getFiltered(unavailableProducts).length > 0 && (
           <div className="text-center mt-12">
              <GradientButton
                key="hide"
                onClick={() => setShowUnavailable(false)}
                colors={greenColors}
                className="bg-gray-200 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition-all"
              >
                {t.products.showLess || 'Ascunde produsele indisponibile'}
              </GradientButton>
            </div>
        )}
      </div>
    </section>
  );
}
