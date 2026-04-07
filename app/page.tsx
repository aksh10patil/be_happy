'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Menu, X, MapPin, Phone, Mail, Scissors, Tag, Shirt, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
    let frameId = 0;

    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateScrolled);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
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
      <div className="absolute inset-0 hidden opacity-10 pointer-events-none md:block bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')]"></div>

      <div className="flex gap-3 overflow-x-auto px-4 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {content.map((item, index) => (
          <div key={index} className="flex shrink-0 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90">
            <span className="text-red-200">{item.icon}</span>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <motion.div
        className="hidden gap-12 whitespace-nowrap md:flex"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{ width: "max-content" }}
      >
        {[...content, ...content, ...content].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-white/90">
            <span className="text-red-200">{item.icon}</span>
            <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase">
              {item.text}
            </span>
            <span className="ml-8 h-1 w-1 rounded-full bg-red-800"></span>
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
            More than just clothing. It&apos;s an attitude. <br className="hidden md:block" />
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
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Women&apos;s New Arrivals</a></li>
            <li><a href="https://www.facebook.com/p/Be-Happy-100068963659334/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">Men&apos;s Casual</a></li>
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
