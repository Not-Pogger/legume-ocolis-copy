"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useI18n } from '@/lib/i18n-context';
import { Expand } from 'lucide-react';

export default function Gallery() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of all available photos with proper Romanian names
  const photos = [
    { src: '/images/rosii1.jpg', alt: 'Roșii proaspete 1' },
    { src: '/images/rosii2.jpg', alt: 'Roșii proaspete 2' },
    { src: '/images/rosii3.jpg', alt: 'Roșii proaspete 3' },
    { src: '/images/rosii4.jpg', alt: 'Roșii proaspete 4' },
    { src: '/images/rosii5.jpg', alt: 'Roșii proaspete 5' },
    { src: '/images/rosii6.jpg', alt: 'Roșii proaspete 6' },
    { src: '/images/rosii7.jpg', alt: 'Roșii proaspete 7' },
    { src: '/images/rosii8.jpg', alt: 'Roșii proaspete 8' },
    { src: '/images/rosii9.jpg', alt: 'Roșii proaspete 9' },
    { src: '/images/rosii10.jpg', alt: 'Roșii proaspete 10' },
    { src: '/images/rosii11.jpg', alt: 'Roșii proaspete 11' },
    { src: '/images/rosii12.jpg', alt: 'Roșii proaspete 12' },
    { src: '/images/ardei1.jpg', alt: 'Ardei dulci și iuți 1' },
    { src: '/images/ardei2.jpg', alt: 'Ardei dulci și iuți 2' },
    { src: '/images/ardei3.jpg', alt: 'Ardei dulci și iuți 3' },
    { src: '/images/ardei4.jpg', alt: 'Ardei dulci și iuți 4' },
    { src: '/images/ardei5.jpg', alt: 'Ardei dulci și iuți 5' },
    { src: '/images/ardei6.jpg', alt: 'Ardei dulci și iuți 6' },
    { src: '/images/vinete1.jpg', alt: 'Vânăte proaspete 1' },
    { src: '/images/vinete2.jpg', alt: 'Vânăte proaspete 2' },
    { src: '/images/vinete3.jpg', alt: 'Vânăte proaspete 3' },
    { src: '/images/vinete4.jpg', alt: 'Vânăte proaspete 4' },
    { src: '/images/vinete5.jpg', alt: 'Vânăte proaspete 5' },
    { src: '/images/varza2.jpg', alt: 'Varză proaspătă 2' },
    { src: '/images/varza3.jpg', alt: 'Varză proaspătă 3' },
    { src: '/images/porumb1.jpg', alt: 'Porumb tradițional 1' },
    { src: '/images/porumb2.jpg', alt: 'Porumb tradițional 2' },
    { src: '/images/cartofi1.jpg', alt: 'Cartofi roșii' },
    { src: '/images/castraveti1.jpg', alt: 'Castraveți proaspeți' },
    { src: '/images/lebenita1.jpg', alt: 'Lebeniță dulce' },
    { src: '/images/spanac1.jpg', alt: 'Spanac proaspăt 1' },
    { src: '/images/spanac2.jpg', alt: 'Spanac proaspăt 2' },
    { src: '/images/spanac3.jpg', alt: 'Spanac proaspăt 3' },
  ];

  // Define different heights for masonry effect
  const getRandomHeight = (index: number) => {
    const heights = ['h-64', 'h-80', 'h-72', 'h-96'];
    return heights[index % heights.length];
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.gallery.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.gallery.subtitle}</p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.slice(0, 12).map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`relative ${getRandomHeight(index)} w-full`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    className="absolute bottom-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Expand className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Photos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
          >
            <Expand className="w-5 h-5" />
            <span>Vezi toate fotografiile</span>
          </button>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={photos}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      </div>
    </section>
  );
}