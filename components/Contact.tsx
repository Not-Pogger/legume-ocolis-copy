"use client";

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useI18n();

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

        {/* Contact Information Grid - Text Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 max-w-7xl mx-auto">
          
          {/* Phone Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <Phone className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.phone}</h3>
            </div>
            <div className="space-y-3">
              <a
                href="tel:0766597844"
                className="block text-lg font-body text-gray-700 hover:text-emerald-600 transition-colors"
              >
                0766.597.844
              </a>
              <a
                href="tel:0773844621"
                className="block text-lg font-body text-gray-700 hover:text-emerald-600 transition-colors"
              >
                0773.844.621
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <MessageCircle className="w-7 h-7 text-green-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.whatsapp}</h3>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/40766597844"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-body text-gray-700 hover:text-green-600 transition-colors"
              >
                WhatsApp 1
              </a>
              <a
                href="https://wa.me/40773844621"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-body text-gray-700 hover:text-green-600 transition-colors"
              >
                WhatsApp 2
              </a>
            </div>
          </motion.div>

          {/* Address Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <MapPin className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.address}</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
                <p className="text-amber-800 font-body text-sm">{t.contact.addressNotice}</p>
              </div>
              <div>
                <p className="font-body text-gray-700 mb-1">{t.contact.addressDetails.home}</p>
                <a
                  href="https://maps.app.goo.gl/xj7e3SaFYPZJSrTz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors underline font-body"
                >
                  {t.contact.viewOnMap}
                </a>
              </div>
              <div>
                <p className="font-body text-gray-700 mb-1">{t.contact.addressDetails.market}</p>
                <a
                  href="https://maps.google.com/?q=Piața+Izvoarelor,+Baia+Mare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors underline font-body"
                >
                  {t.contact.viewOnMap}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Schedule Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <Clock className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-heading font-bold text-gray-800">{t.contact.schedule}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 font-body">{t.contact.scheduleDetails.weekdays}</p>
              <p className="text-gray-700 font-body">{t.contact.scheduleDetails.saturday}</p>
              <p className="text-red-600 font-body font-semibold">{t.contact.scheduleDetails.sunday}</p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="tel:0766597844"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-body font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>{t.contact.callNow}</span>
          </a>
          <a
            href="https://wa.me/40766597844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-body font-bold rounded-full hover:bg-green-600 hover:shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.contact.sendMessage}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}