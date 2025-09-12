"use client";

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Phone, MessageCircle, MapPin, Clock, Facebook } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default function Contact() {
  const { t } = useI18n();
  const greenColors = { start: '#10b981', end: '#84cc16', from: '#84cc16', to: '#10b981' };
    const blueColors = { start: '#2563eb', end: '#06b6d4', from: '#06b6d4', to: '#2563eb' };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-lime-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.contact.subtitle}</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 flex-shrink-0">
              <Phone className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.phone}</h3>
            </div>
            <div className="flex flex-col items-center gap-3 flex-grow">
              <GradientButton href="tel:0766597844" colors={greenColors} className="flex w-full flex-grow items-center justify-center gap-2 p-4 text-white font-body font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105">0766.597.844</GradientButton>
              <GradientButton href="tel:0773844621" colors={greenColors} className="flex w-full flex-grow items-center justify-center gap-2 p-4 text-white font-body font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105">0773.844.621</GradientButton>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.whatsapp}</h3>
            </div>
            <div className="flex flex-col items-center gap-3 flex-grow">
              <GradientButton href="https://wa.me/40766597844" target="_blank" rel="noopener noreferrer" colors={greenColors} className="flex w-full flex-grow items-center justify-center gap-2 p-4 text-white font-body font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105">WhatsApp 1</GradientButton>
              <GradientButton href="https://wa.me/40773844621" target="_blank" rel="noopener noreferrer" colors={greenColors} className="flex w-full flex-grow items-center justify-center gap-2 p-4 text-white font-body font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105">WhatsApp 2</GradientButton>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.address}</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
                <p className="text-amber-800 font-body text-sm">{t.contact.addressNotice}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <GradientButton href="https://maps.app.goo.gl/xj7e3SaFYPZJSrTz6" target="_blank" rel="noopener noreferrer" colors={greenColors} className="block p-4 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-white text-center">
                  <p className="font-body">{t.contact.addressDetails.home}</p>
                </GradientButton>
                <GradientButton href="https://maps.google.com/?q=Piața+Izvoarelor,+Baia+Mare" target="_blank" rel="noopener noreferrer" colors={greenColors} className="block p-4 rounded-lg hover:shadow-lg transition-all hover:scale-105 text-white text-center">
                  <p className="font-body">{t.contact.addressDetails.market}</p>
                </GradientButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.schedule}</h3>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <p className="text-gray-700 font-body">{t.contact.scheduleDetails.weekdays}</p>
              <p className="text-gray-700 font-body">{t.contact.scheduleDetails.saturday}</p>
              <p className="text-red-600 font-body font-semibold">{t.contact.scheduleDetails.sunday}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        >
          <GradientButton href="tel:0766597844" colors={greenColors} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105">
            <Phone className="w-5 h-5" />
            <span>{t.contact.callNow}</span>
          </GradientButton>
          <GradientButton href="https://wa.me/40766597844" target="_blank" rel="noopener noreferrer" colors={greenColors} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105">
            <MessageCircle className="w-5 h-5" />
            <span>{t.contact.sendMessage}</span>
          </GradientButton>
          <GradientButton href="https://www.facebook.com/puscaslegumeocolis/" target="_blank" rel="noopener noreferrer" colors={blueColors} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105">
            <Facebook className="w-5 h-5" />
            <span>{t.contact.facebook}</span>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
