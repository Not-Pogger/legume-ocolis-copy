"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useI18n } from '@/lib/i18n-context';
import { Calendar, Users, Leaf, Package } from 'lucide-react';

export default function Stats() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasStarted(true);
    }
  }, [isInView]);

  const stats = [
    {
      icon: Calendar,
      value: 20,
      suffix: '+',
      label: t.stats.years,
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: t.stats.customers,
      color: 'from-lime-500 to-green-500',
    },
    {
      icon: Leaf,
      value: 100,
      suffix: '%',
      label: t.stats.natural,
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Package,
      value: 30,
      suffix: '+',
      label: t.stats.varieties,
      color: 'from-lime-400 to-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={hasStarted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className={`relative bg-gradient-to-br ${stat.color} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent" style={{letterSpacing: '-0.1rem'}}>
                {hasStarted && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>
              
              <p className="mt-2 text-gray-700 font-body font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}