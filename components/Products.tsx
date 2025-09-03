"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { cn } from '@/lib/utils';

export default function Products() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 'tomatoes',
      category: 'tomatoes',
      image: '/images/rosii1.jpg',
      emoji: '🍅',
      ...t.products.items.tomatoes,
    },
    {
      id: 'peppers',
      category: 'peppers',
      image: '/images/ardei1.jpg',
      emoji: '🌶️',
      ...t.products.items.peppers,
    },
    {
      id: 'eggplants',
      category: 'others',
      image: '/images/vinete1.jpg',
      emoji: '🍆',
      ...t.products.items.eggplants,
    },
    {
      id: 'cabbage',
      category: 'others',
      image: '/images/varza2.jpg',
      emoji: '🥬',
      ...t.products.items.cabbage,
    },
    {
      id: 'corn',
      category: 'others',
      image: '/images/porumb1.jpg',
      emoji: '🌽',
      ...t.products.items.corn,
    },
    {
      id: 'potatoes',
      category: 'others',
      image: '/images/cartofi1.jpg',
      emoji: '🥔',
      ...t.products.items.potatoes,
    },
    {
      id: 'cucumbers',
      category: 'others',
      image: '/images/castraveti1.jpg',
      emoji: '🥒',
      ...t.products.items.cucumbers,
    },
    {
      id: 'watermelon',
      category: 'others',
      image: '/images/lebenita1.jpg',
      emoji: '🍉',
      ...t.products.items.watermelon,
    },
    {
      id: 'spinach',
      category: 'others',
      image: '/images/spanac1.jpg',
      emoji: '🥬',
      ...t.products.items.spinach,
    },
  ];

  const filters = [
    { id: 'all', label: t.products.filterAll },
    { id: 'tomatoes', label: t.products.filterTomatoes },
    { id: 'peppers', label: t.products.filterPeppers },
    { id: 'others', label: t.products.filterOthers },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

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
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.products.subtitle}</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-6 py-2 rounded-full font-body font-medium transition-all',
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Emoji */}
                  <div className="absolute top-4 right-4 text-4xl">
                    {product.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2 text-gray-800" style={{letterSpacing: '-0.1rem'}}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 font-body">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}