'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';


interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

// Reusing your Section wrapper for consistency
const Section = ({ children, className = "" }: SectionProps) => (
  <section className={`px-4 md:px-8 lg:px-12 py-20 ${className}`}>
    {children}
  </section>
);


interface CategoryCardProps {
  title: string;
  image: string;
  links: string[];
  badge?: string;
}


const CategoryCard = ({ title, image, links, badge }: CategoryCardProps) => {
  return (
    <motion.div
      className="group relative h-[440px] flex-1 overflow-hidden md:h-[600px] md:cursor-pointer"
      initial={false}
      whileHover="hover"
      animate="rest"
    >
      {/* 1. Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
      </motion.div>

      {/* 2. Floating Badge (e.g. "New Season") */}
      {badge && (
        <div className="absolute top-4 right-4 z-20 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-500 md:top-6 md:right-6 md:h-20 md:w-20 md:rotate-12 md:group-hover:rotate-0">
          <Star size={14} fill="white" className="mb-1" />
          <span className="text-center text-[7px] font-bold leading-tight tracking-widest uppercase md:text-[8px]">
            {badge}
          </span>
        </div>
      )}

      {/* 3. Main Content Wrapper */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-12">

        {/* The Title - Moves up on hover */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: -20 } // Slightly moves up to make room
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">
            Collection 2026
          </span>
          <h2 className="mb-2 text-4xl text-white sm:text-5xl md:text-7xl font-">
            {title}
          </h2>
        </motion.div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/20 pt-4 md:hidden">
          {links.map((link, i) => (
            <a
              key={i}
              href="https://www.facebook.com/p/Be-Happy-100068963659334/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://www.facebook.com/p/Be-Happy-100068963659334/', '_blank');
            }}
            className="mt-2 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold tracking-wider text-stone-900 uppercase transition-colors hover:bg-red-600 hover:text-white"
          >
            Shop All {title} <ArrowRight size={16} />
          </button>
        </div>

        {/* 4. The Hidden "Quick Links" Menu */}
        <motion.div
          className="hidden overflow-hidden md:block"
          variants={{
            rest: { height: 0, opacity: 0 },
            hover: { height: "auto", opacity: 1 }
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="pt-4 border-t border-white/30 flex flex-col gap-3">
            {links.map((link, i) => (
              <a
                key={i}
                href="https://www.facebook.com/p/Be-Happy-100068963659334/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-stone-200 hover:text-white group/link"
              >
                <span className="text-lg font-medium">{link}</span>
                <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-red-500" />
              </a>
            ))}

            {/* Main CTA */}
            <div className="mt-4 pt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.facebook.com/p/Be-Happy-100068963659334/', '_blank');
                }}
                className="bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors w-max"
              >
                Shop All {title} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <Section className="bg-white">
      {/* Header for the section */}
      <div className="mb-12 flex justify-between items-end px-4">
        <div>
          <h3 className="font- text-3xl md:text-4xl text-stone-900">
            Shop by Category
          </h3>
          <p className="text-stone-500 mt-2 max-w-md">
            Explore our latest arrivals tailored for every occasion.
          </p>
        </div>
        <a
          href="https://www.facebook.com/p/Be-Happy-100068963659334/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-red-600 hover:border-red-600 transition-colors"
        >
          View All <ArrowRight size={14} />
        </a>
      </div>

      {/* The Cards Layout */}
      <div className="flex h-auto flex-col gap-4 md:h-[700px] md:flex-row">

        {/* Women - Larger / More details */}
        <div className="flex-[1.4]">
          <CategoryCard
            title="WOMAN"
            image="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop"
            badge="New Season"
            links={["New Arrivals", "Dresses & Jumpsuits", "Blouses", "Accessories"]}
          />
        </div>

        {/* Men - Standard */}
        <div className="flex-1">
          <CategoryCard
            title="MAN"
            image="/men_bg.png"
            badge="New Season"
            links={["New Arrivals", "Suits & Blazers", "Casual Wear"]}
          />
        </div>

      </div>
    </Section>
  );
};

export default Categories;
