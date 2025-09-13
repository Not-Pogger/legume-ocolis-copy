"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useI18n } from '@/lib/i18n-context';
import { Expand } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';

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
  { src: '/images/ardei1.jpg', alt: 'Ardei dulci și iuți 1' },
  { src: '/images/ardei2.jpg', alt: 'Ardei dulci și iuți 2' },
  { src: '/images/vinete1.jpg', alt: 'Vânăte proaspete 1' },
  { src: '/images/vinete2.jpg', alt: 'Vânăte proaspete 2' },
  { src: '/images/vinete3.jpg', alt: 'Vânăte proaspete 3' },
  { src: '/images/vinete4.jpg', alt: 'Vânăte proaspete 4' },
  { src: '/images/vinete5.jpg', alt: 'Vânăte proaspete 5' },
  { src: '/images/varza1.jpg', alt: 'Varză proaspătă 1' },
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
  { src: '/images/arde-iuiti1.jpg', alt: 'Ardei iuți' },
  { src: '/images/ardei-semi-iuti1.jpg', alt: 'Ardei semi-iuți' },
  { src: '/images/kapia1.jpg', alt: 'Ardei Kapia' },
  { src: '/images/gogogari1.jpg', alt: 'Gogoșari' },
  { src: '/images/ceapa1.jpg', alt: 'Ceapă verde' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};

interface GalleryImageProps {
  photo: {
    src: string;
    alt: string;
  };
  index: number;
  onClick: () => void;
}

const GalleryImage = ({ photo, index, onClick }: GalleryImageProps) => {
  const [pos, setPos] = useState({ x: '0px', y: '0px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const style = {
    backgroundImage: isHovered 
      ? `radial-gradient(circle at ${pos.x} ${pos.y}, rgba(255, 255, 255, 0.25), transparent)` 
      : 'none',
  };

  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0" style={style} />
    </motion.div>
  );
};

export default function Gallery() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const greenColors = { start: '#10b981', end: '#84cc16', from: '#84cc16', to: '#10b981' };

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

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {photos.slice(0, 12).map((photo, index) => (
            <GalleryImage
              key={index}
              photo={photo}
              index={index}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <GradientButton
            onClick={() => setIsOpen(true)}
            colors={greenColors}
            className="inline-flex items-center gap-2 px-8 py-3 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105 transform-gpu"
          >
            <Expand className="w-5 h-5" />
            <span>{t.gallery.seeAll || 'Vezi toate fotografiile'}</span>
          </GradientButton>
        </motion.div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={photos}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      </div>
    </section>
  );
}