'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

// --- DATA: Collection Images ---
const mainCollectionImages = [
  "/Women/w_1.png",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  "/Women/w_3.png",
];

const secondaryImages = [
  "/Women/w_2.png",
];

const floatingImages = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop",
];

// --- SUB-COMPONENTS ---

const AnimatedButton = ({ children, primary }: { children: React.ReactNode, primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => window.open('https://www.facebook.com/p/Be-Happy-100068963659334/', '_blank')}
    className={`group relative overflow-hidden px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 rounded-full font-medium tracking-wide text-sm ${primary
      ? 'bg-stone-900 text-stone-50 shadow-xl shadow-stone-900/20 hover:shadow-stone-900/30'
      : 'bg-white text-stone-900 border border-stone-200 hover:border-stone-400 hover:bg-stone-50'
      }`}
  >
    <span className="relative z-10">{children}</span>
    {primary && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
  </motion.button>
);

const ImageSlideshow = ({ images, intervalTime = 4000, className = "" }: { images: string[], intervalTime?: number, className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [images.length, intervalTime]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Fashion collection showcase"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeIn" } }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---

const DesignerHeroCollection = () => {
  return (
    <section className="relative min-h-[100svh] bg-[#faf9f6] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute top-0 left-1/4 hidden h-[500px] w-[500px] rounded-full bg-red-100/50 opacity-60 blur-[120px] mix-blend-multiply sm:block" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 hidden h-[600px] w-[600px] rounded-full bg-orange-50/60 opacity-60 blur-[150px] mix-blend-multiply sm:block" />

      <div className="pointer-events-none absolute inset-0 hidden items-center justify-center overflow-hidden opacity-[0.03] select-none sm:flex z-0">
        <h1 className="text-[25vw] font- font-black text-stone-900 whitespace-nowrap leading-none tracking-tighter mix-blend-overlay">
          BE HAPPY
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 lg:pr-10 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 mb-8">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-stone-800 font-semibold tracking-wider text-xs uppercase">
                  Lookbook 2026
                </span>
              </div>

              <h1 className="font- text-4xl sm:text-5xl md:text-7xl leading-[1.1] text-stone-900 mb-6">
                Style <br />
                <span className=" font-light">Beyond</span> <br />
                Borders.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="max-w-lg mb-10"
            >
              <p className="text-stone-600 text-lg sm:text-xl leading-relaxed font-light">
                Discover the new <span className="font-medium text-stone-900">Be Happy</span> collection. A curated selection of finest fabrics and innovative designs, defining the look of the upcoming season.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <AnimatedButton primary>Shop Collection</AnimatedButton>

            </motion.div>

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 sm:mt-16 pt-8 border-t border-stone-200 flex items-center gap-6 sm:gap-8"
            >
              <div>
                <p className="text-2xl sm:text-3xl font- text-stone-900">10k+</p>
                <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider mt-1">Happy Clients</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-stone-200" />
              <div>
                <p className="text-2xl sm:text-3xl font- text-stone-900">Premium</p>
                <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider mt-1">Quality Materials</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="lg:col-span-6 relative mt-12 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end sm:min-h-[620px]">

            {/* --- MOBILE ONLY: Single Large Slideshow --- */}
            <div className="relative z-20 h-[420px] w-full overflow-hidden rounded-[2rem] bg-stone-200 shadow-2xl ring-4 ring-white sm:hidden">
              <Image
                src={mainCollectionImages[0]}
                alt="Be Happy spring collection"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent">
                <p className="text-white font-medium tracking-wide text-xl">Spring Essentials</p>
                <p className="text-stone-300 text-sm mt-1">Explore the fits</p>
              </div>
            </div>

            {/* --- DESKTOP ONLY: Bento Style Layout --- */}
            {/* Main Image */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute top-[10%] right-[18%] lg:right-[12%] w-[330px] h-[470px] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <ImageSlideshow
                images={mainCollectionImages}
                intervalTime={5000}
                className="w-full h-full bg-stone-200"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent">
                <p className="text-white font-medium tracking-wide text-base">Spring Essentials</p>
                <p className="text-stone-300 text-sm mt-1">Explore the fits</p>
              </div>
            </motion.div>

            {/* Top Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="hidden sm:block absolute top-[6%] left-[18%] w-[170px] h-[210px] rounded-2xl overflow-hidden shadow-lg z-30 ring-4 ring-white"
            >
              <ImageSlideshow
                images={floatingImages}
                intervalTime={6000}
                className="w-full h-full bg-stone-300"
              />
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="hidden sm:block absolute bottom-[-2%] right-[-12%] lg:right-[-6%] w-[210px] h-[250px] rounded-2xl overflow-hidden shadow-xl z-30 ring-4 ring-white"
            >
              <ImageSlideshow
                images={secondaryImages}
                intervalTime={7000}
                className="w-full h-full bg-stone-200 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="hidden sm:flex absolute top-[18%] right-[6%] w-28 h-28 rounded-full border border-stone-300 border-dashed z-10 items-center justify-center opacity-40"
            >
              <div className="w-20 h-20 rounded-full border border-stone-200 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerHeroCollection;
