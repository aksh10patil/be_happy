'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook, ShoppingBag, ArrowRight, Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Scissors, Tag, Shirt, Star } from 'lucide-react';
import Categories from '@/components/Category';
import DesignerHero from '@/components/Hero';
import AnnouncementBanner from '@/components/Banner';
import VisitUs from '@/components/VisitUs';
// --- UI COMPONENTS ---

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

const Section = ({ children, className = "" }: SectionProps) => (
  <section className={`px-6 md:px-12 lg:px-24 py-20 ${className}`}>
    {children}
  </section>
);

const Button = ({ children, primary = true }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => window.open('https://www.facebook.com/p/Be-Happy-100068963659334/', '_blank')}
    className={`px-8 py-3 rounded-full text-sm tracking-widest uppercase font-medium transition-colors ${primary
      ? 'bg-red-600 text-white hover:bg-red-700'
      : 'border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
      }`}
  >
    {children}
  </motion.button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Representation */}
        <Link
          href="https://www.facebook.com/p/Be-Happy-100068963659334/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/be_happy_1.png"
            alt="Be Happy Logo"
            width={120}
            height={40}
            className='scale-100'
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">WOMAN</a>
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">MAN</a>
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">STORY</a>
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors"><Facebook size={20} /></a>
          <Button primary={true}>SHOP NOW</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center gap-6 md:hidden"
        >
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-lg">WOMAN</a>
          <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-lg">MAN</a>
          <div className="flex gap-4 mt-4">
            <Instagram className="text-red-600" />
            <Facebook className="text-red-600" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-stone-50 flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="text-red-600 font-medium tracking-widest text-sm uppercase mb-4 block">New Collection 2026</span>
          <h1 className="font- text-5xl md:text-7xl leading-[1.1] text-stone-900 mb-6">
            Hi <br />
            <span className=" font-light">State of</span> <br />
            Mind.
          </h1>
          <p className="text-stone-600 mb-8 max-w-md leading-relaxed">
            We're pleased to introduce our clothing store, "Be Happy," located in Losone. We offer a wide selection of women's clothing at affordable prices, to help everyone feel beautiful and comfortable every day.

            In our store, you'll find a wide range of casual/sportswear to suit everyone's tastes. We're always looking for the finest fabrics and most innovative designs to ensure our customers have an exceptional shopping experience.
          </p>
          <div className="flex gap-4">
            <Button primary={true}>Shop WOMAN</Button>
            <Button primary={false}>Shop MAN</Button>
          </div>
        </motion.div>

        {/* Collage Image Composition - Inspired by your screenshot */}
        <div className="relative h-[600px] w-full hidden md:block">
          {/* Background Shape */}
          <div className="absolute top-10 right-0 w-3/4 h-3/4 bg-red-100 rounded-tl-[100px] -z-0"></div>

          {/* Main Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
            alt="Woman Fashion"
            className="absolute top-0 right-10 w-72 h-[450px] object-cover shadow-xl z-10"
          />

          {/* Secondary Image (Overlapping) */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop"
            alt="Man Fashion"
            className="absolute bottom-10 left-10 w-64 h-80 object-cover shadow-2xl border-4 border-white z-20"
          />

          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 right-40 w-24 h-24 border-dashed border-2 border-red-400 rounded-full z-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

const AboutStrip = () => {
  const content = [
    { text: "New Season", icon: <Star size={14} /> },
    { text: "Tailored Fits", icon: <Scissors size={14} /> },
    { text: "Premium Silk", icon: <Tag size={14} /> },
    { text: "Summer Edit", icon: <Shirt size={14} /> },
    { text: "Handcrafted", icon: <Scissors size={14} /> },
    { text: "Swiss Design", icon: <Tag size={14} /> },
  ];

  return (
    <div className="bg-red-600 py-3 overflow-hidden border-y-2 border-dashed border-red-800/30 relative">
      {/* Texture overlay to make it look like fabric (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] pointer-events-none"></div>

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{ width: "max-content" }} // Ensures the width fits the content
      >
        {/* We map the content twice to create a seamless infinite loop */}
        {[...content, ...content, ...content].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-white/90">
            {/* The Icon */}
            <span className="text-red-200">{item.icon}</span>

            {/* The Text */}
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              {item.text}
            </span>

            {/* The Separator */}
            <span className="w-1 h-1 bg-red-800 rounded-full ml-8"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font- text-3xl text-white mb-6">Be <span className="text-red-500">Happy</span></h3>
          <p className="mb-6 font-light leading-relaxed max-w-sm md:max-w-none">
            More than just clothing. It's an attitude. <br className="hidden md:block" />
            Find your smile in our latest collection.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
          <h4 className="text-white uppercase tracking-widest text-sm mb-6">Collections</h4>
          <ul className="space-y-3 w-full">
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Women's New Arrivals</a></li>
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Men's Casual</a></li>
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Accessories</a></li>
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Lookbook 2026</a></li>
          </ul>
        </div>

        {/* Contact (From User Data) */}
        <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
          <h4 className="text-white uppercase tracking-widest text-sm mb-6">Visit Us</h4>
          <ul className="space-y-4 w-full">
            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <MapPin size={20} className="text-red-500 shrink-0 md:mt-1" />
              <span>Via Emmaus 10,<br className="hidden md:block" />Losone, Switzerland</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <Phone size={20} className="text-red-500 shrink-0 md:mt-1" />
              <span>+41 76 477 26 28</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
              <Mail size={20} className="text-red-500 shrink-0 md:mt-1" />
              <span className="break-all">be.happy.sagl@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 mt-10 md:mt-12 border-t border-stone-800 text-center text-sm">
        &copy; 2026 Be Happy Sagl. All rights reserved.
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="font-sans antialiased text-stone-900 selection:bg-red-100 selection:text-red-900">

      <Navbar />
      <AnnouncementBanner />
      <DesignerHero />
      <AboutStrip />
      <Categories />
      <VisitUs />
      <Section className="bg-stone-50  text-center">
        <h2 className="font- text-4xl mb-6">Join the Club</h2>
        <p className="text-stone-600 mb-8">Follow us on social media for the latest trends and updates.</p>
        <div className="flex justify-center gap-4">
          <Button primary={false}>@behappyswiss</Button>
        </div>
      </Section>
      <Footer />
    </main>
  );
};

export default App;