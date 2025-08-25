"use client";

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n-context';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const { t } = useI18n();

  const contactCards = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: (
        <div className="space-y-3">
          <a
            href="tel:0766597844"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-body font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>0766.597.844</span>
          </a>
          <a
            href="tel:0773844621"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-body font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>0773.844.621</span>
          </a>
        </div>
      ),
    },
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      content: (
        <div className="space-y-3">
          <a
            href="https://wa.me/40766597844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-body font-bold rounded-xl hover:bg-green-600 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp 1</span>
          </a>
          <a
            href="https://wa.me/40773844621"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-body font-bold rounded-xl hover:bg-green-600 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp 2</span>
          </a>
        </div>
      ),
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: (
        <div className="space-y-4">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 font-body text-sm font-medium">{t.contact.addressNotice}</p>
          </div>
          <div>
            <p className="font-body font-semibold text-gray-800 mb-1">{t.contact.addressDetails.home}</p>
            <a
              href="https://maps.app.goo.gl/xj7e3SaFYPZJSrTz6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="underline font-body">{t.contact.viewOnMap}</span>
            </a>
          </div>
          <div>
            <p className="font-body font-semibold text-gray-800 mb-1">{t.contact.addressDetails.market}</p>
            <a
              href="https://maps.google.com/?q=Piața+Izvoarelor,+Baia+Mare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="underline font-body">{t.contact.viewOnMap}</span>
            </a>
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: t.contact.schedule,
      content: (
        <div className="space-y-2">
          <p className="text-gray-700 font-body">{t.contact.scheduleDetails.weekdays}</p>
          <p className="text-gray-700 font-body">{t.contact.scheduleDetails.saturday}</p>
          <p className="text-red-600 font-body font-semibold">{t.contact.scheduleDetails.sunday}</p>
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-lime-100 opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-200 rounded-full filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">{t.contact.subtitle}</p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-xl shadow-lg">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-800" style={{letterSpacing: '-0.1rem'}}>{card.title}</h3>
              </div>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-heading font-bold mb-6 text-gray-800" style={{letterSpacing: '-0.1rem'}}>Urmărește-ne pe social media</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/puscaslegumeocolis"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:scale-110 hover:shadow-lg"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/40766597844"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all hover:scale-110 hover:shadow-lg"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}