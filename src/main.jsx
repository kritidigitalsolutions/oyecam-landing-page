import React, { useEffect, useId, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { 
  ArrowUpRight, ArrowRight, Play, Video, Radio, Users, 
  Check, Menu, X, ShieldCheck, Heart, Wallet, 
  Star, ChevronDown, ChevronLeft, ChevronRight, Smartphone, Globe, UserX,
  Sparkles, Music, Instagram, Facebook, Youtube, Linkedin, ArrowUp,
  Phone, MapPin, Shield, FileText, Cookie, HeartHandshake, Mail, ShieldAlert
} from 'lucide-react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import CommunityGuidelines from './pages/CommunityGuidelines';
import ChildSafetyPolicy from './pages/ChildSafetyPolicy';
import ContactUs from './pages/ContactUs';
import DeleteAccount from './pages/DeleteAccount';
import './styles.css';
import './legal.css';

/* SVG Brand Icon for X (Twitter) */
function XTwitterIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* SVG Brand Icons for App Stores */
function AppleIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.6-0.73 1.01-1.75.9-2.77-.87.04-1.92.58-2.54 1.31-.55.63-.99 1.66-.86 2.65.98.08 1.95-.49 2.5-1.19z" />
    </svg>
  );
}

function GooglePlayIcon({ size = 18, className = '' }) {
  const gradientId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.609 1.814C3.266 2.177 3.067 2.748 3.067 3.504V20.496C3.067 21.252 3.266 21.823 3.609 22.186L3.684 22.254L13.197 12.74V12.56L3.684 1.746L3.609 1.814Z" fill={`url(#${gradientId}-a)`} />
      <path d="M16.368 15.912L13.197 12.74V12.56L16.369 9.388L16.44 9.429L20.198 11.564C21.27 12.173 21.27 13.127 20.198 13.737L16.44 15.871L16.368 15.912Z" fill={`url(#${gradientId}-b)`} />
      <path d="M16.44 15.872L13.197 12.65L3.609 22.186C3.961 22.56 4.564 22.607 5.251 22.217L16.44 15.872Z" fill={`url(#${gradientId}-c)`} />
      <path d="M16.44 9.428L5.251 3.083C4.564 2.693 3.961 2.74 3.609 3.114L13.197 12.65L16.44 9.428Z" fill={`url(#${gradientId}-d)`} />
      <defs>
        <linearGradient id={`${gradientId}-a`} x1="12.316" y1="2.723" x2="-2.441" y2="17.48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF" />
          <stop offset="0.007" stopColor="#00A1FF" />
          <stop offset="0.26" stopColor="#00BEFF" />
          <stop offset="0.512" stopColor="#00D2FF" />
          <stop offset="0.76" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient id={`${gradientId}-b`} x1="21.579" y1="12.65" x2="0.677" y2="12.65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000" />
          <stop offset="0.409" stopColor="#FFBD00" />
          <stop offset="0.775" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id={`${gradientId}-c`} x1="14.49" y1="14.498" x2="-4.269" y2="33.257" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id={`${gradientId}-d`} x1="0.945" y1="-5.733" x2="8.913" y2="2.235" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071" />
          <stop offset="0.069" stopColor="#2DA771" />
          <stop offset="0.476" stopColor="#15CF74" />
          <stop offset="0.801" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const nav = [
  ['Features', 'features'],
  ['Experience', 'experience'],
  ['How It Works', 'how-it-works'],
  ['Community', 'community'],
  ['Safety', 'safety'],
  ['Reviews', 'reviews']
];

/* 10 Real Community Profiles with Generated Photos */
const COMMUNITY_PROFILES = [
  {
    id: 'ananya',
    name: 'Ananya',
    age: 23,
    city: 'Mumbai',
    languages: 'Hindi, English',
    category: 'singers',
    vibe: 'Acoustic & Chai',
    bio: 'Late night jam sessions, indie rock & deep conversations over coffee ☕',
    image: '/people/ananya.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'rohit',
    name: 'Rohit',
    age: 25,
    city: 'Pune',
    languages: 'Marathi, Hindi',
    category: 'creators',
    vibe: 'Rooftop & Tech',
    bio: 'Spontaneous road trips, cafe hopping & deep talks about life and startups 🚗',
    image: '/people/rohit.jpg',
    isLive: false,
    status: 'Online'
  },
  {
    id: 'zoya',
    name: 'Zoya',
    age: 22,
    city: 'Delhi',
    languages: 'Hindi, Punjabi',
    category: 'singers',
    vibe: 'Chill Gaming & Banter',
    bio: 'Retro synthwave fan, cozy room live streams, always up for a good laugh 🎧',
    image: '/people/zoya.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'kabir',
    name: 'Kabir',
    age: 24,
    city: 'Bangalore',
    languages: 'English, Kannada',
    category: 'creators',
    vibe: 'Golden Hour & Stories',
    bio: 'Film enthusiast, exploring craft cafes, looking for curious minds to vibe with 🎬',
    image: '/people/kabir.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'riya',
    name: 'Riya',
    age: 21,
    city: 'Jaipur',
    languages: 'Hindi, Rajasthani',
    category: 'trending',
    vibe: 'Dance & Good Energy',
    bio: 'Positive vibes only! Street art lover, foodie, loves connecting with real people 🎨',
    image: '/people/riya.jpg',
    isLive: false,
    status: 'Active'
  },
  {
    id: 'aryan',
    name: 'Aryan',
    age: 24,
    city: 'Hyderabad',
    languages: 'Telugu, Hindi',
    category: 'creators',
    vibe: 'Bookstore & Espresso',
    bio: 'Coffee geek, literature lover, spontaneous late-night talker who actually listens 📖',
    image: '/people/aryan.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'meera',
    name: 'Meera',
    age: 23,
    city: 'Kolkata',
    languages: 'Bengali, Hindi',
    category: 'singers',
    vibe: 'Soulful Vocals',
    bio: 'Singing Bollywood unplugged & Rabindra sangeet live. Send your song requests 🎙️',
    image: '/people/meera.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'dev',
    name: 'Dev',
    age: 24,
    city: 'Chandigarh',
    languages: 'Punjabi, Hindi',
    category: 'trending',
    vibe: 'Fitness & Wanderlust',
    bio: 'Outdoor trails, mountain sunsets & genuine banter. No fake energy allowed 🏔️',
    image: '/people/dev.jpg',
    isLive: false,
    status: 'Online'
  },
  {
    id: 'tanya',
    name: 'Tanya',
    age: 22,
    city: 'Goa',
    languages: 'Hindi, English',
    category: 'creators',
    vibe: 'Neon Aesthetic & DJ',
    bio: 'Electronic beats, sunset beach sessions, living life in vibrant colors ⚡',
    image: '/people/tanya.jpg',
    isLive: true,
    status: 'Live Now'
  },
  {
    id: 'samar',
    name: 'Samar',
    age: 25,
    city: 'Mumbai',
    languages: 'Hindi, English',
    category: 'trending',
    vibe: 'Skyline Talks & Humor',
    bio: 'Sea link drives, comedy enthusiast, believing every connection starts with hello 🌊',
    image: '/people/samar.jpg',
    isLive: true,
    status: 'Live Now'
  }
];

const COUPLE_BANNERS = [
  {
    id: 1,
    tag: 'Late-Night Video Call • Delhi & Mumbai',
    title: 'Talking until 3 AM felt like 5 minutes.',
    names: 'Aarav (27) & Aanya (25)',
    location: 'Delhi • Mumbai',
    matchedTime: '4 months ago',
    quote: 'We matched and started a quick video call from my balcony. Three hours later, we were still laughing at each other\'s terrible jokes. That night changed everything.',
    image: '/feature/1.png',
    hud: {
      type: '1-on-1 HD Video',
      score: '98% Compatibility',
      spark: 'Late-Night Banter',
      action: 'Start Video Chat'
    }
  },
  {
    id: 2,
    tag: 'Cozy Midnight Texts • Bengaluru & Pune',
    title: 'Messages that make you smile at your phone.',
    names: 'Kabir (28) & Riya (24)',
    location: 'Bengaluru • Pune',
    matchedTime: '6 months ago',
    quote: 'Sitting at my desk with a warm coffee, texting back and forth. You know it is real when a simple notification keeps you smiling through the night.',
    image: '/feature/2.png',
    hud: {
      type: 'Private Messaging',
      score: '96% Compatibility',
      spark: 'Sweet Conversations',
      action: 'Explore Chats'
    }
  },
  {
    id: 3,
    tag: 'Live Stream Connection • Mumbai',
    title: 'Going live and finding your biggest supporter.',
    names: 'Aanya (26) & Rohan (28)',
    location: 'Mumbai • Jaipur',
    matchedTime: '7 months ago',
    quote: 'I was casually streaming from my bedroom after work. Rohan dropped in, sent a diamond gift, and we ended up talking for hours after the stream ended.',
    image: '/feature/3.png',
    hud: {
      type: 'Live Stream Match',
      score: '99% Compatibility',
      spark: 'Instant Chemistry',
      action: 'Join Live Streams'
    }
  },
  {
    id: 4,
    tag: 'Bedtime Banter • Delhi & Chandigarh',
    title: 'The sweet conversation you never want to end.',
    names: 'Meera (25) & Aryan (27)',
    location: 'Delhi • Chandigarh',
    matchedTime: '5 months ago',
    quote: 'Lying in bed under the duvet, exchanging voice notes and giggling until 2 AM. That effortless chemistry is what made us fall for each other.',
    image: '/feature/4.png',
    hud: {
      type: 'Midnight Sparks',
      score: '97% Compatibility',
      spark: 'Effortless Connection',
      action: 'Find Midnight Sparks'
    }
  },
  {
    id: 5,
    tag: 'Evening Sofa Hangout • Bengaluru',
    title: 'Comfortable silence and genuine warmth.',
    names: 'Tara (26) & Rohan (28)',
    location: 'Bengaluru • Hyderabad',
    matchedTime: '8 months ago',
    quote: 'We kept the video call on while I curled up on the couch and he chatted about his day. No pressure, no performance—just genuine comfort.',
    image: '/feature/5.png',
    hud: {
      type: '1-on-1 Video Chat',
      score: '99% Compatibility',
      spark: 'Real Warmth',
      action: 'Connect on Video'
    }
  },
  {
    id: 6,
    tag: 'Spontaneous Evening Call • Pune',
    title: 'From a random hello to each other’s safe place.',
    names: 'Sneha (24) & Vikram (29)',
    location: 'Pune • Mumbai',
    matchedTime: '3 months ago',
    quote: 'What started as a spontaneous evening hello turned into our favorite daily ritual. When you meet the right person, everything just clicks.',
    image: '/feature/6.png',
    hud: {
      type: 'Spontaneous Spark',
      score: '95% Compatibility',
      spark: 'True Connection',
      action: 'Discover Matches'
    }
  }
];

const MARQUEE_COUPLES = [
  {
    names: 'Aarav & Aanya',
    age: '27 & 25',
    city: 'Delhi',
    badge: '98% Match',
    image: '/feature/1.png',
    quote: 'Talking until 3 AM on video call.',
    since: 'Together 4 mos'
  },
  {
    names: 'Kabir & Riya',
    age: '28 & 24',
    city: 'Bengaluru',
    badge: '96% Match',
    image: '/feature/2.png',
    quote: 'Late-night messages that made us smile.',
    since: 'Together 6 mos'
  },
  {
    names: 'Aanya & Rohan',
    age: '26 & 28',
    city: 'Mumbai',
    badge: '99% Match',
    image: '/feature/3.png',
    quote: 'From a live stream to soulmates.',
    since: 'Together 7 mos'
  },
  {
    names: 'Meera & Aryan',
    age: '25 & 27',
    city: 'Delhi',
    badge: '97% Match',
    image: '/feature/4.png',
    quote: 'Sweet bedtime chats that kept us awake.',
    since: 'Together 5 mos'
  },
  {
    names: 'Tara & Rohan',
    age: '26 & 28',
    city: 'Bengaluru',
    badge: '99% Match',
    image: '/feature/5.png',
    quote: 'Comfortable silence & real warmth.',
    since: 'Together 8 mos'
  },
  {
    names: 'Sneha & Vikram',
    age: '24 & 29',
    city: 'Pune',
    badge: '95% Match',
    image: '/feature/6.png',
    quote: 'Spontaneous evening call turned true love.',
    since: 'Together 3 mos'
  }
];

function Logo({ onNavigate }) {
  return (
    <a 
      href="#" 
      className="logo" 
      aria-label="oyecam home"
      onClick={(e) => {
        e.preventDefault();
        if (onNavigate) onNavigate('home');
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img src="/logo.jpeg" alt="oyecam logo" />
      <span>oye<span>cam</span><b>.</b></span>
    </a>
  );
}

function PhoneMockup({ screen, className = '', eager = false }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <img 
          src={`/screens/${screen}.png`} 
          alt={`oyecam ${screen} app screen`} 
          loading={eager ? 'eager' : 'lazy'} 
          width="990" 
          height="1950" 
        />
        {screen === 'account' && <span className="privacy-mask">Your personal profile</span>}
      </div>
    </div>
  );
}

function Reveal({ children, className = '', id, onClick }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      id={id}
      className={className}
      onClick={onClick}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }) {
  return <div className="eyebrow"><span />{children}</div>;
}

function Heading({ label, title, accent, children }) {
  return (
    <div className="section-heading">
      <Label>{label}</Label>
      <h2>{title} <span className="gradient-text">{accent}</span></h2>
      {children && <p>{children}</p>}
    </div>
  );
}

const PARTICLES_OPTIONS = {
  fullScreen: { enable: true, zIndex: -1 },
  fpsLimit: 30,
  detectRetina: false,
  particles: {
    number: { value: 35 },
    color: { value: ['#a78bfa', '#ffffff'] },
    opacity: { value: 0.25 },
    size: { value: { min: 1, max: 2 } },
    links: { enable: false },
    move: { enable: true, speed: 0.2 }
  },
  interactivity: {
    events: { onHover: { enable: false }, onClick: { enable: false } }
  }
};

const Background = React.memo(function Background() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!reduced) initParticlesEngine(loadSlim).then(()=>setReady(true));
  }, [reduced]);
  return ready && !reduced ? (
    <Particles id="particles" options={PARTICLES_OPTIONS} />
  ) : null;
});

const getInitialPage = () => {
  const hash = (typeof window !== 'undefined' ? window.location.hash : '').toLowerCase();
  const path = (typeof window !== 'undefined' ? window.location.pathname : '').toLowerCase();
  if (hash.includes('cookie') || path.includes('cookie')) return 'cookie-policy';
  if (hash.includes('guideline') || path.includes('guideline') || hash.includes('community') || path.includes('community-guidelines')) return 'community-guidelines';
  if (hash.includes('child') || path.includes('child') || hash.includes('child-safety')) return 'child-safety';
  if (hash.includes('contact') || path.includes('contact')) return 'contact';
  if (hash.includes('delete') || path.includes('delete')) return 'delete-account';
  if (hash.includes('privacy') || path.includes('privacy')) return 'privacy';
  if (hash.includes('terms') || path.includes('terms')) return 'terms';
  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [activeSection, setActiveSection] = useState('features');
  const [drawer, setDrawer] = useState(false);
  const [communityFilter, setCommunityFilter] = useState('all');
  const [coupleSlide, setCoupleSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const headerRef = useRef(null);
  const menuDialog = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const handleNav = () => {
      setCurrentPage(getInitialPage());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleNav);
    window.addEventListener('popstate', handleNav);
    return () => {
      window.removeEventListener('hashchange', handleNav);
      window.removeEventListener('popstate', handleNav);
    };
  }, []);

  const navigateTo = (page) => {
    if (page === 'home') {
      window.location.hash = '';
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#/${page}`;
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    const sectionIds = ['features', 'experience', 'how-it-works', 'community', 'safety', 'reviews'];
    let ticking = false;

    const fn = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (header) {
            if (window.scrollY > 80) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
          }

          if (currentPage === 'home') {
            const scrollPos = window.scrollY + 160;
            let current = 'features';
            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const el = document.getElementById(sectionIds[i]);
              if (el && scrollPos >= el.offsetTop) {
                current = sectionIds[i];
                break;
              }
            }
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [currentPage]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (href.startsWith('#/')) {
        return;
      }
      if (href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        if (currentPage !== 'home') {
          e.preventDefault();
          navigateTo('home');
          setTimeout(() => {
            const target = document.getElementById(targetId) || document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }, 80);
          return;
        }
        const target = document.getElementById(targetId) || document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [currentPage]);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    const handleEsc = (e) => {
      if (e.key === 'Escape') setDrawer(false);
    };
    if (drawer) window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [drawer]);

  const download = () => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById('download');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterAnchor = (e, id) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (sliderPaused) return;
    const timer = setInterval(() => {
      setCoupleSlide(prev => (prev + 1) % COUPLE_BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sliderPaused]);

  const prevCoupleSlide = () => {
    setCoupleSlide(prev => (prev === 0 ? COUPLE_BANNERS.length - 1 : prev - 1));
  };
  const nextCoupleSlide = () => {
    setCoupleSlide(prev => (prev + 1) % COUPLE_BANNERS.length);
  };

  const filteredProfiles = communityFilter === 'all' 
    ? COMMUNITY_PROFILES 
    : communityFilter === 'live' 
      ? COMMUNITY_PROFILES.filter(p => p.isLive)
      : COMMUNITY_PROFILES.filter(p => p.category === communityFilter);

  return (
    <>
      <Background />
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Global Header */}
      <header ref={headerRef}>
        <div className="nav-wrap">
          <Logo onNavigate={navigateTo} />
          
          <nav aria-label="Main navigation">
            {nav.map(([name, id]) => (
              <a 
                key={id} 
                href={`#${id}`}
                className={currentPage === 'home' && activeSection === id ? 'active' : ''}
                onClick={(e) => {
                  if (currentPage !== 'home') {
                    e.preventDefault();
                    navigateTo('home');
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 80);
                  }
                }}
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Header App Download CTAs (Both Platforms) */}
          <div className="header-ctas">
            <button 
              type="button"
              className="header-store-btn apple" 
              onClick={download} 
              aria-label="Download on App Store"
              title="Download on Apple App Store"
            >
              <AppleIcon size={16} />
              <span className="store-btn-text">
                <span className="store-btn-sub">Download</span>
                <span className="store-btn-main">App Store</span>
              </span>
            </button>
            <button 
              type="button"
              className="header-store-btn google" 
              onClick={download} 
              aria-label="Get it on Google Play"
              title="Get it on Google Play"
            >
              <GooglePlayIcon size={15} />
              <span className="store-btn-text">
                <span className="store-btn-sub">Get on</span>
                <span className="store-btn-main">Google Play</span>
              </span>
            </button>
          </div>

          <button 
            ref={menuButton} 
            className="menu-button" 
            aria-label="Open navigation" 
            aria-expanded={drawer} 
            onClick={() => setDrawer(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Ultra-Premium Mobile Navigation Drawer */}
      <AnimatePresence>
        {drawer && (
          <div className="mobile-drawer-root" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {/* Backdrop Blur Overlay */}
            <motion.div 
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setDrawer(false)}
            />

            {/* Sliding Drawer Panel */}
            <motion.aside 
              className="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              {/* Drawer Top Header */}
              <div className="drawer-header">
                <Logo onNavigate={(page) => { setDrawer(false); navigateTo(page); }} />
                <button 
                  type="button" 
                  className="drawer-close-btn" 
                  aria-label="Close navigation" 
                  onClick={() => setDrawer(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="drawer-scroll-body">
                {/* Store App CTAs */}
                <div className="drawer-store-section">
                  <span className="drawer-section-label">GET THE MOBILE APP</span>
                  <div className="drawer-store-grid">
                    <button 
                      type="button"
                      className="drawer-app-btn apple" 
                      onClick={() => { setDrawer(false); download(); }}
                    >
                      <AppleIcon size={18} />
                      <div className="drawer-app-btn-text">
                        <small>Download on</small>
                        <strong>App Store</strong>
                      </div>
                    </button>
                    <button 
                      type="button"
                      className="drawer-app-btn google" 
                      onClick={() => { setDrawer(false); download(); }}
                    >
                      <GooglePlayIcon size={17} />
                      <div className="drawer-app-btn-text">
                        <small>GET IT ON</small>
                        <strong>Google Play</strong>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Main Navigation Section */}
                <div className="drawer-nav-group">
                  <span className="drawer-section-label">EXPLORE OYECAM</span>
                  <div className="drawer-nav-list">
                    {[
                      { name: 'Features', id: 'features', icon: Sparkles },
                      { name: 'Experience', id: 'experience', icon: Video },
                      { name: 'How It Works', id: 'how-it-works', icon: Play },
                      { name: 'Community', id: 'community', icon: Users },
                      { name: 'Safety', id: 'safety', icon: ShieldCheck },
                      { name: 'Reviews', id: 'reviews', icon: Star },
                    ].map(({ name, id, icon: Icon }) => {
                      const isActive = currentPage === 'home' && activeSection === id;
                      return (
                        <a 
                          key={id} 
                          href={`#${id}`} 
                          className={`drawer-nav-item ${isActive ? 'active' : ''}`}
                          onClick={(e) => {
                            setDrawer(false);
                            if (currentPage !== 'home') {
                              e.preventDefault();
                              navigateTo('home');
                              setTimeout(() => {
                                const el = document.getElementById(id);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }, 80);
                            }
                          }}
                        >
                          <div className="drawer-nav-item-left">
                            <span className="drawer-icon-box"><Icon size={16} /></span>
                            <span className="drawer-nav-title">{name}</span>
                          </div>
                          <ArrowRight size={14} className="drawer-nav-arrow" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Legal & Policies Section */}
                <div className="drawer-nav-group">
                  <span className="drawer-section-label">LEGAL & POLICIES</span>
                  <div className="drawer-nav-list">
                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'privacy' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('privacy'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box"><Shield size={16} /></span>
                        <span className="drawer-nav-title">Privacy Policy</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'terms' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('terms'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box"><FileText size={16} /></span>
                        <span className="drawer-nav-title">Terms & Conditions</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'cookie-policy' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('cookie-policy'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box"><Cookie size={16} /></span>
                        <span className="drawer-nav-title">Cookie Policy</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'community-guidelines' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('community-guidelines'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box"><HeartHandshake size={16} /></span>
                        <span className="drawer-nav-title">Community Guidelines</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'child-safety' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('child-safety'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box" style={{ color: '#ff416c' }}><ShieldAlert size={16} /></span>
                        <span className="drawer-nav-title">Child Safety Policy</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item ${currentPage === 'contact' ? 'active' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('contact'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box"><Mail size={16} /></span>
                        <span className="drawer-nav-title">Contact Us</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>

                    <button 
                      type="button"
                      className={`drawer-nav-item danger-item ${currentPage === 'delete-account' ? 'active-danger' : ''}`}
                      onClick={() => { setDrawer(false); navigateTo('delete-account'); }}
                    >
                      <div className="drawer-nav-item-left">
                        <span className="drawer-icon-box danger-icon"><UserX size={16} /></span>
                        <span className="drawer-nav-title">Delete Account</span>
                      </div>
                      <ArrowRight size={14} className="drawer-nav-arrow" />
                    </button>
                  </div>
                </div>

                {/* Direct Helpline Card */}
                <div className="drawer-helpline-card">
                  <div className="drawer-helpline-top">
                    <span className="live-dot" />
                    <span className="drawer-helpline-tag">24/7 SUPPORT HELPLINE</span>
                  </div>
                  <a href="tel:+919010187125" className="drawer-helpline-number">
                    <Phone size={15} />
                    <span>+91 90101 87125</span>
                  </a>
                  <p className="drawer-helpline-address">
                    1-41 Vivek Nagar Colony, Jillelaguda, Hyderabad - 500097
                  </p>
                </div>

                {/* Drawer Footer Socials */}
                <div className="drawer-footer">
                  <div className="drawer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="Instagram">
                      <Instagram size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="Twitter">
                      <XTwitterIcon size={15} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="YouTube">
                      <Youtube size={16} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <div className="drawer-footer-copy">
                    Made with <Heart size={12} fill="#ff416c" color="#ff416c" className="inline-heart" /> in India
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Main Content Area - Switches Conditionally */}
      <main id="main">
        {currentPage === 'privacy' && <PrivacyPolicy onNavigate={navigateTo} />}
        {currentPage === 'terms' && <TermsConditions onNavigate={navigateTo} />}
        {currentPage === 'cookie-policy' && <CookiePolicy onNavigate={navigateTo} />}
        {currentPage === 'community-guidelines' && <CommunityGuidelines onNavigate={navigateTo} />}
        {currentPage === 'child-safety' && <ChildSafetyPolicy onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactUs onNavigate={navigateTo} />}
        {currentPage === 'delete-account' && <DeleteAccount onNavigate={navigateTo} />}

        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero container">
              <div className="hero-copy">
                <div className="badge">
                  <span className="live-dot" /> REAL PEOPLE. REAL CONNECTIONS.
                  <ArrowUpRight size={13} />
                </div>
                <h1>
                  Connect.<br />
                  Call.<br />
                  Go <span className="gradient-text">Live.</span>
                  <span className="headline-star">✳</span>
                </h1>
                <p>
                  Good conversations start with a little hello.<br />
                  Meet new people, find your crowd, and go live.<br className="desktop-break" /> All in one space. All you.
                </p>

                {/* Hero Dual Store CTAs & Secondary CTA */}
                <div className="hero-ctas">
                  <div className="hero-store-group">
                    <button 
                      type="button"
                      className="store-btn hero-store-btn apple" 
                      onClick={download} 
                      aria-label="Download on App Store"
                    >
                      <AppleIcon size={22} />
                      <span className="store-btn-text">
                        <span className="store-btn-sub">Download on the</span>
                        <span className="store-btn-main">App Store</span>
                      </span>
                      <ArrowUpRight size={16} className="store-arrow" />
                    </button>
                    <button 
                      type="button"
                      className="store-btn hero-store-btn google" 
                      onClick={download} 
                      aria-label="Get it on Google Play"
                    >
                      <GooglePlayIcon size={20} />
                      <span className="store-btn-text">
                        <span className="store-btn-sub">GET IT ON</span>
                        <span className="store-btn-main">Google Play</span>
                      </span>
                      <ArrowUpRight size={16} className="store-arrow" />
                    </button>
                  </div>
                  <a href="#how-it-works" className="secondary-button">
                    <span className="play-circle"><Play size={14} fill="currentColor" /></span> See how it works
                  </a>
                </div>

                <div className="stats">
                  <div><strong>4.8 <Star size={15} fill="#ffbd56" color="#ffbd56" /></strong><span>App rating</span></div>
                  <div><strong>500K<span>+</span></strong><span>Downloads</span></div>
                  <div><strong>50K<span>+</span></strong><span>Daily connections</span></div>
                </div>
              </div>

              <div className="hero-art">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="art-cross cross-one">+</div>
                <div className="art-cross cross-two">✦</div>
                <PhoneMockup screen="chat" className="hero-back" eager />
                <PhoneMockup screen="performers" className="hero-front" eager />
                
                {/* Float Card with Real Generated Profile Photo */}
                <div className="float-card live-card">
                  <img src="/people/kabir.jpg" alt="Aarav" className="mini-avatar-img" />
                  <div><strong>Aarav is live</strong><span><i className="live-dot" /> Ready to say hello</span></div>
                  <Radio size={20} />
                </div>
                
                {/* Match Notification Card (Replaces Coin Card) */}
                <div className="float-card match-card">
                  <div className="match-icon"><Heart size={22} fill="#ff416c" color="#ff416c" /></div>
                  <div><strong>New Connection!</strong><span>Matched just now</span></div>
                  <span className="sparkle">✦</span>
                </div>
                <div className="art-caption"><span className="live-dot" /> A whole world of people. One tap away.</div>
              </div>

              <a className="scroll-hint" href="#features">
                THERE'S MORE TO CONNECT WITH <ChevronDown size={16} />
              </a>
            </section>

            {/* Trust Strip */}
            <div className="trust-strip">
              <span><ShieldCheck /> Your space, your choice</span>
              <span><Video /> Face-to-face, from anywhere</span>
              <span><Globe /> Many languages. One community.</span>
              <span><Heart /> Made for real connections</span>
            </div>

            {/* Features Section */}
            <section id="features" className="section">
              <div className="container">
                <Reveal>
                  <Heading label="REAL CHEMISTRY • REAL SPARKS" title="One app. Unlimited" accent="real connections.">
                    Adult couples finding genuine warmth, intimate conversations, and unforgettable moments together.
                  </Heading>
                </Reveal>
              </div>

              {/* Couple Video Connection Showcase - Clean & Curated */}
              <div className="container">
                <div 
                  className="clean-showcase-container"
                  onMouseEnter={() => setSliderPaused(true)}
                  onMouseLeave={() => setSliderPaused(false)}
                >
                  <div className="clean-showcase-grid">
                    {/* Left Column: Dynamic Story */}
                    <div className="clean-story-panel">
                      <div className="clean-story-stack">
                        {COUPLE_BANNERS.map((banner, idx) => {
                          const isActive = coupleSlide === idx;
                          return (
                            <div 
                              key={`text-${banner.id}`} 
                              className={`clean-story-item ${isActive ? 'active' : ''}`}
                              aria-hidden={!isActive}
                            >
                              <div className="clean-story-tag-wrap">
                                <span className="clean-story-pill">
                                  <Sparkles size={12} /> {banner.tag}
                                </span>
                              </div>

                              <h3 className="clean-story-heading">{banner.title}</h3>

                              <div className="clean-story-author-row">
                                <span className="clean-author-names">{banner.names}</span>
                                <span className="clean-author-sep">•</span>
                                <span className="clean-author-city">{banner.location}</span>
                                <span className="clean-verified-badge">
                                  <ShieldCheck size={13} /> Verified
                                </span>
                              </div>

                              <p className="clean-story-quote">
                                "{banner.quote}"
                              </p>

                              <div className="clean-story-action">
                                <a href="#download" className="clean-story-btn">
                                  <Heart size={14} fill="currentColor" /> {banner.hud.action} <ArrowRight size={14} />
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Slider Navigation Controls */}
                      <div className="clean-slider-nav">
                        <div className="slider-pill-indicators">
                          {COUPLE_BANNERS.map((banner, idx) => (
                            <button
                              key={`dot-${banner.id}`}
                              type="button"
                              className={`slider-pill-bar ${coupleSlide === idx ? 'active' : ''}`}
                              onClick={() => setCoupleSlide(idx)}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <div className="slider-ghost-arrows">
                          <button type="button" className="slider-ghost-btn" onClick={prevCoupleSlide} aria-label="Previous story">
                            <ChevronLeft size={18} />
                          </button>
                          <button type="button" className="slider-ghost-btn" onClick={nextCoupleSlide} aria-label="Next story">
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Media Preview */}
                    <div className="clean-media-panel">
                      <div className="clean-media-frame">
                        {COUPLE_BANNERS.map((banner, idx) => {
                          const isActive = coupleSlide === idx;
                          return (
                            <div 
                              key={`img-${banner.id}`} 
                              className={`clean-media-slide ${isActive ? 'active' : ''}`}
                            >
                              <img 
                                src={banner.image} 
                                alt={banner.title} 
                                loading={idx === 0 ? "eager" : "lazy"} 
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width Marquee Strip */}
              <div className="clean-marquee-fullwidth">
                <div className="clean-marquee-header">
                  <span className="clean-pulse-dot" />
                  <span>REAL COUPLES CONNECTING RIGHT NOW</span>
                </div>

                <div className="clean-marquee-viewport">
                  <div className="clean-marquee-track">
                    <div className="clean-marquee-group">
                      {MARQUEE_COUPLES.map((couple, index) => (
                        <div key={`m1-${index}`} className="clean-couple-chip">
                          <div className="chip-avatar-wrap">
                            <img src={couple.image} alt={couple.names} loading="eager" />
                          </div>
                          <div className="chip-content">
                            <div className="chip-name-row">
                              <span className="chip-names">{couple.names}</span>
                              <span className="chip-city">{couple.city}</span>
                            </div>
                            <p className="chip-quote">"{couple.quote}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="clean-marquee-group" aria-hidden="true">
                      {MARQUEE_COUPLES.map((couple, index) => (
                        <div key={`m2-${index}`} className="clean-couple-chip">
                          <div className="chip-avatar-wrap">
                            <img src={couple.image} alt={couple.names} loading="eager" />
                          </div>
                          <div className="chip-content">
                            <div className="chip-name-row">
                              <span className="chip-names">{couple.names}</span>
                              <span className="chip-city">{couple.city}</span>
                            </div>
                            <p className="chip-quote">"{couple.quote}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Inside App & Features Showcase */}
            <section id="experience" className="container section showcase">
              <span id="screenshots" className="anchor-fallback" aria-hidden="true" />
              <Reveal>
                <Heading label="A LOOK INSIDE" title="Feels familiar." accent="Opens up a world.">
                  Less figuring things out. More finding your people.
                </Heading>
              </Reveal>
              {[
                { 
                  screen: 'rooms', 
                  label: 'YOUR PEOPLE. YOUR PLACE.', 
                  title: 'Your space,', 
                  accent: 'your rules.', 
                  desc: 'Find conversations you actually want to be part of. Explore public rooms or bring your people together in a dedicated space of your own with custom permissions and zero lag.', 
                  bullets: [
                    'Browse active public rooms categorized by vibe, late-night chats & regional topics',
                    'Create and manage your own private rooms with custom host moderation controls',
                    'High-definition spatial audio and crystal-clear video for natural group flow',
                    'Join live discussions instantly with one tap — no waiting rooms or complex setup'
                  ], 
                  id: 'rooms' 
                },
                { 
                  screen: 'performers', 
                  label: 'MEET THE COMMUNITY', 
                  title: 'Your next favourite', 
                  accent: 'person is here.', 
                  desc: 'Discover talented creators and charismatic performers from across India. Find a familiar language, a fresh face, or someone who just matches your wavelength.', 
                  bullets: [
                    'Discover fresh joins, trending performers, and verified profiles updated in real time',
                    'See exact online status and strike up an instant 1-on-1 audio or video call',
                    'Filter by regional languages to connect with creators who speak your mother tongue',
                    'Unlock daily spin wheel rewards and coin tokens for special interactions'
                  ], 
                  id: 'performers' 
                },
                { 
                  screen: 'chat', 
                  label: 'KEEP THE CONVERSATION GOING', 
                  title: 'Real chats.', 
                  accent: 'Real connections.', 
                  desc: 'That first hello is just the beginning. Keep your conversations close, your favourite people closer, and pick up right where you left off with zero friction.', 
                  bullets: [
                    'Find recent connections at a glance with clean avatar previews and timestamps',
                    'Live active online indicators and unread message badges keep you in the loop',
                    'Express yourself with quick photo sharing, voice notes, and playful emojis',
                    'Built-in privacy safeguards with instant block and report tools for peace of mind'
                  ], 
                  id: 'chat' 
                },
                { 
                  screen: 'live', 
                  label: 'THIS IS YOUR MOMENT', 
                  title: 'Go live.', 
                  accent: 'Light up the room.', 
                  desc: 'Have a story, a song, or simply something to say? Share it live with an interactive community. Build your audience, chat in real time, and let fans show you love.', 
                  bullets: [
                    'Go live with one simple tap using ultra-low latency adaptive video streaming',
                    'Receive animated virtual coin gifts and tokens directly from your viewers',
                    'Interactive live chat HUD with floating hearts and real-time audience reactions',
                    'Get spotlighted on the discovery feed and grow your genuine fanbase daily'
                  ], 
                  id: 'live' 
                }
              ].map((item, i) => (
                <Reveal key={item.screen} id={item.id} className={`showcase-row ${i % 2 ? 'reverse' : ''}`}>
                  <div className={`showcase-visual visual-${item.screen}`}>
                    <span className="visual-watermark">{['belong.', 'hello.', 'closer.', 'live.'][i]}</span>
                    <img 
                      src={`/screens/${item.screen}.png`} 
                      alt={`oyecam ${item.screen} screen preview`} 
                      className="showcase-device-image"
                      loading={i === 0 ? "eager" : "lazy"} 
                    />
                    <span className="screen-index">0{i + 1} / THE OYECAM EXPERIENCE</span>
                  </div>
                  <div className="showcase-copy">
                    <Label>{item.label}</Label>
                    <h2>{item.title}<br /><span className="gradient-text">{item.accent}</span></h2>
                    <p>{item.desc}</p>
                    <ul className="checks">{item.bullets.map(b => <li key={b}><Check size={17} />{b}</li>)}</ul>
                    {item.screen === 'performers' ? (
                      <div className="language-tags">{['Hindi', 'English', 'Tamil', 'Telugu', 'Bengali', 'Punjabi', 'Marathi'].map(l => <span key={l}>{l}</span>)}</div>
                    ) : (
                      <a className="text-link" href="#download">{item.screen === 'rooms' ? 'Explore rooms' : item.screen === 'live' ? 'Start streaming' : 'Find your connection'} <ArrowRight size={17} /></a>
                    )}
                  </div>
                </Reveal>
              ))}
            </section>

            {/* How It Works Steps with Grid BG & Dating App React UI Mockups */}
            <section id="how-it-works" className="steps-section">
              <div className="container steps-container">
                <Reveal>
                  <Heading label="LESS SETUP · REAL SPARKS" title="How real connections happen" accent="in 3 simple steps.">
                    From a verified profile to face-to-face video sparks and spontaneous live rooms.
                  </Heading>
                </Reveal>

                <div className="dating-steps-grid">
                  {/* Step 1 Card: Smart Profile & Vibe Check */}
                  <Reveal className="dating-step-card">
                    <div className="step-card-header">
                      <span className="step-badge">
                        <Sparkles size={12} /> Step 01 · Vibe Check
                      </span>
                      <div className="step-num-circle">01</div>
                    </div>

                    {/* React UI Component: Profile Vibe Card Mockup */}
                    <div className="step-ui-mockup">
                      <div className="mockup-profile-header">
                        <div className="mockup-avatar-wrap">
                          <img src="/people/ananya.jpg" alt="Ananya" />
                          <span className="mockup-verified-badge" title="Photo Verified">✓</span>
                        </div>
                        <div className="mockup-profile-names">
                          <strong>Ananya, 23 <span className="live-dot" /></strong>
                          <span className="mockup-match-pill">
                            <Sparkles size={10} /> 98% Vibe Match
                          </span>
                        </div>
                      </div>

                      <div className="mockup-prompt-box">
                        <span className="mockup-prompt-label">My typical Sunday</span>
                        <p className="mockup-prompt-text">
                          Acoustic indie playlists, rainy balcony coffee & deep talks ☕
                        </p>
                      </div>

                      <div className="mockup-voice-bar">
                        <span className="mockup-voice-play"><Play size={10} fill="currentColor" /></span>
                        <span>Voice intro · 0:14</span>
                        <div className="mockup-wave-bars">
                          <span style={{ height: '6px' }} />
                          <span style={{ height: '14px' }} />
                          <span style={{ height: '10px' }} />
                          <span style={{ height: '12px' }} />
                          <span style={{ height: '7px' }} />
                        </div>
                      </div>

                      <div className="mockup-tags">
                        <span>#AcousticMusic</span>
                        <span>#ChaiLover</span>
                        <span>#Coffee</span>
                        <span>#Hindi & Eng</span>
                      </div>
                    </div>

                    <div className="step-card-body">
                      <h3>Build your vibe, not just a bio</h3>
                      <p>
                        A candid photo, your favourite languages, and audio voice prompts. No endless questionnaires — just genuine personality so the right people gravitate toward you.
                      </p>
                      <ul className="step-feature-bullets">
                        <li><Check size={14} /> 100% selfie-verified real profiles</li>
                        <li><Check size={14} /> Voice prompts & lifestyle interests</li>
                      </ul>
                    </div>
                  </Reveal>

                  {/* Step 2 Card: Instant Sparks & Video Hello */}
                  <Reveal className="dating-step-card">
                    <div className="step-card-header">
                      <span className="step-badge">
                        <Heart size={12} fill="#ff416c" /> Step 02 · Face-to-Face
                      </span>
                      <div className="step-num-circle">02</div>
                    </div>

                    {/* React UI Component: Video Spark Calling Mockup */}
                    <div className="step-ui-mockup">
                      <div className="mockup-call-hud">
                        <span className="mockup-call-live">
                          <span className="pulse-dot" /> Live Call
                        </span>
                        <span className="mockup-call-time">02:45 · HD Video</span>
                      </div>

                      <div className="mockup-dual-video">
                        <div className="mockup-user-frame">
                          <img src="/people/rohit.jpg" alt="Rohit" />
                          <span>Rohit, 25</span>
                        </div>
                        <div className="mockup-spark-center" title="Instant Spark">
                          <Heart size={18} fill="#ffffff" />
                        </div>
                        <div className="mockup-user-frame">
                          <img src="/people/riya.jpg" alt="Riya" />
                          <span>Riya, 21</span>
                        </div>
                      </div>

                      <div className="mockup-shared-banner">
                        ✨ Shared Vibe: Road Trips & 90s Songs
                      </div>

                      <div className="mockup-reaction-row">
                        <span>❤️</span>
                        <span>✨</span>
                        <span>🔥</span>
                        <span>👋</span>
                        <span>☕</span>
                      </div>
                    </div>

                    <div className="step-card-body">
                      <h3>Skip the small talk. See the spark.</h3>
                      <p>
                        Ditch endless ghosting and dry texting. Jump into smooth 1-on-1 face-to-face video calls where real smiles, eye contact, and authentic chemistry instantly shine.
                      </p>
                      <ul className="step-feature-bullets">
                        <li><Check size={14} /> Instant high-definition video & voice</li>
                        <li><Check size={14} /> Private WebRTC streams — never recorded</li>
                      </ul>
                    </div>
                  </Reveal>

                  {/* Step 3 Card: Open Rooms & Spontaneous Hangouts */}
                  <Reveal className="dating-step-card">
                    <div className="step-card-header">
                      <span className="step-badge">
                        <Radio size={12} /> Step 03 · Live Hangouts
                      </span>
                      <div className="step-num-circle">03</div>
                    </div>

                    {/* React UI Component: Live Space & Social Audio Room Mockup */}
                    <div className="step-ui-mockup">
                      <div className="mockup-room-top">
                        <span className="mockup-room-topic">
                          <Music size={13} color="#a78bfa" /> Late Night Chai & Jams
                        </span>
                        <span className="mockup-room-listeners">● 48 In Room</span>
                      </div>

                      <div className="mockup-room-host">
                        <img src="/people/zoya.jpg" alt="Zoya" className="mockup-host-img" />
                        <div className="mockup-host-info">
                          <strong>Zoya 🎙️ <span className="live-dot" /></strong>
                          <span>Singing acoustic requests live</span>
                        </div>
                      </div>

                      <div className="mockup-listeners-stack">
                        <img src="/people/kabir.jpg" alt="Kabir" />
                        <img src="/people/aryan.jpg" alt="Aryan" />
                        <img src="/people/meera.jpg" alt="Meera" />
                        <img src="/people/tanya.jpg" alt="Tanya" />
                        <span className="mockup-listeners-count">+44 listening</span>
                      </div>

                      <div className="mockup-chat-bubble">
                        <strong>Kabir:</strong> Play that unplugged acoustic song next! 🎸
                      </div>
                    </div>

                    <div className="step-card-body">
                      <h3>Join open rooms or host your crowd</h3>
                      <p>
                        Not ready for 1-on-1? Drop into open audio & video lounges anytime. Share stories, discover popular creators, and meet multiple people naturally without awkward pressure.
                      </p>
                      <ul className="step-feature-bullets">
                        <li><Check size={14} /> Themed rooms by language & topic</li>
                        <li><Check size={14} /> Low-pressure spontaneous social hangouts</li>
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* Clean Live Community Section (No clunky buttons or coin icons) */}
            <section id="community" className="container section community-section">
              <Reveal>
                <Heading label="REAL PEOPLE · REAL CONNECTIONS" title="Meet the community" accent="live right now.">
                  Thousands of genuine creators and performers are online to talk, laugh, share stories, and connect face-to-face.
                </Heading>
              </Reveal>

              {/* Dynamic Filter Pills */}
              <div className="community-filters">
                {[
                  { id: 'all', label: 'All People (10)' },
                  { id: 'live', label: '● Live Now' },
                  { id: 'singers', label: 'Singers & Music' },
                  { id: 'creators', label: 'Creators & Chill' },
                  { id: 'trending', label: 'Trending Vibes' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`filter-pill ${communityFilter === tab.id ? 'active' : ''}`}
                    onClick={() => setCommunityFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 10 Community Cards Grid - Pure Clean Aesthetic */}
              <div className="community-grid">
                {filteredProfiles.map((profile) => (
                  <Reveal 
                    key={profile.id} 
                    className="profile-card"
                  >
                    <div className="profile-image-container">
                      <img 
                        src={profile.image} 
                        alt={`${profile.name} profile on oyecam`} 
                        className="profile-img" 
                        loading="lazy" 
                      />
                      <div className="profile-gradient-overlay" />
                      
                      <div className="profile-top-badges">
                        <span className={`live-indicator ${profile.isLive ? 'live' : 'offline'}`}>
                          <span className="pulse-dot" /> {profile.status}
                        </span>
                        <span className="profile-vibe-pill">
                          ✨ {profile.vibe}
                        </span>
                      </div>

                      <div className="profile-content">
                        <div className="profile-header-line">
                          <h3 className="profile-name">
                            {profile.name} <span>{profile.age}</span>
                          </h3>
                        </div>
                        <div className="profile-location">
                          <Globe size={11} /> {profile.city} · {profile.languages}
                        </div>
                        <p className="profile-bio">{profile.bio}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Live Connection Strip with Avatar Stack */}
              <div className="community-strip">
                <div className="community-strip-copy">
                  <div className="community-avatar-stack">
                    <img src="/people/ananya.jpg" alt="Ananya" />
                    <img src="/people/rohit.jpg" alt="Rohit" />
                    <img src="/people/zoya.jpg" alt="Zoya" />
                    <img src="/people/kabir.jpg" alt="Kabir" />
                    <img src="/people/riya.jpg" alt="Riya" />
                  </div>
                  <div>
                    <strong>Over 50,000+ daily live connections</strong>
                    <span>100% verified real profiles across India. No fake bots, no loops.</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="button small"
                  onClick={download}
                >
                  Start Connecting Now <ArrowUpRight size={15} />
                </button>
              </div>
            </section>

            {/* Account & Safety Section */}
            <section id="safety" className="section container wallet-section">
              <span id="account" className="anchor-fallback" aria-hidden="true" />
              <Reveal className="wallet-copy">
                <Label>YOUR ACCOUNT, IN YOUR HANDS</Label>
                <h2>A little peace of mind.<br /><span className="gradient-text">A lot of control.</span></h2>
                <p>Everything you need, in one easy place. Manage your preferences, keep track of your connections, and make this space yours.</p>
                <div className="wallet-grid">
                  {[
                    [Heart, 'Matches & chats', 'People you connected with'],
                    [Video, 'Call history', 'Recent voice & video calls'],
                    [Users, 'Room spaces', 'Conversations and groups you joined'],
                    [Globe, 'Language & preferences', 'Customise discovery & matching'],
                    [ShieldCheck, 'Privacy controls', 'Manage permissions & data', () => navigateTo('privacy')],
                    [UserX, 'Delete account & data', 'Request permanent deletion', () => navigateTo('delete-account')]
                  ].map(([Icon, t, d, action]) => (
                    <div key={t} onClick={action} style={action ? { cursor: 'pointer' } : undefined}>
                      <Icon />
                      <h4>{t}</h4>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal className="wallet-art">
                <PhoneMockup screen="account" />
                <div className="float-card safe-card">
                  <ShieldCheck color="#70e5b0" />
                  <div><strong>Your space. Your control.</strong><span>Built around you.</span></div>
                </div>
              </Reveal>
            </section>

            {/* Testimonials with Real Photo Avatars */}
            <section id="reviews" className="section container testimonials">
              <span id="testimonials" className="anchor-fallback" aria-hidden="true" />
              <Reveal>
                <Heading label="THE PEOPLE MAKE IT" title="A few hellos that became" accent="something more." />
              </Reveal>
              <div className="testimonial-grid">
                {[
                  ['/people/ananya.jpg', 'Priya M.', 'Mumbai', "I've been using oyecam for 3 months. The video call quality is amazing and the performers are so genuine!"],
                  ['/people/rohit.jpg', 'Rohit K.', 'Delhi', 'Best app to go live and earn. I made ₹3000 in my first week just by streaming for 2 hours daily.'],
                  ['/people/zoya.jpg', 'Sneha R.', 'Bangalore', 'The rooms feature is so fun — joined a Hindi music room and made 10 new friends the same day!']
                ].map(([imgSrc, name, city, quote]) => (
                  <Reveal key={name} className="testimonial">
                    <div className="stars">★★★★★<span>“</span></div>
                    <blockquote>{quote}</blockquote>
                    <div className="reviewer">
                      <img src={imgSrc} alt={name} className="reviewer-img" />
                      <div><strong>{name}</strong><span>{city}</span></div>
                      <Heart size={16} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Download Section with Dual Store CTAs */}
            <section id="download" className="container download-section">
              <Reveal className="download-panel">
                <div className="download-copy">
                  <Label>YOUR NEXT HELLO STARTS HERE</Label>
                  <h2>A little hello.<br /><span className="gradient-text">A whole new world.</span></h2>
                  <p>Join 500,000+ people making room for real connections.<br />Your people are out there. Come find them.</p>
                  
                  <div className="store-buttons">
                    <button 
                      type="button"
                      className="store-btn download-store-btn apple" 
                      onClick={download} 
                      aria-label="Download on App Store"
                    >
                      <AppleIcon size={26} />
                      <span className="store-btn-text">
                        <span className="store-btn-sub">Download on the</span>
                        <span className="store-btn-main">App Store</span>
                      </span>
                      <ArrowUpRight size={18} className="store-arrow" />
                    </button>
                    <button 
                      type="button"
                      className="store-btn download-store-btn google" 
                      onClick={download} 
                      aria-label="Get it on Google Play"
                    >
                      <GooglePlayIcon size={24} />
                      <span className="store-btn-text">
                        <span className="store-btn-sub">GET IT ON</span>
                        <span className="store-btn-main">Google Play</span>
                      </span>
                      <ArrowUpRight size={18} className="store-arrow" />
                    </button>
                  </div>

                  <p className="download-fine">Free to download <span>·</span> iOS & Android <span>·</span> Made for you</p>
                </div>
                <div className="download-phones">
                  <PhoneMockup screen="chat" />
                  <PhoneMockup screen="performers" />
                </div>
              </Reveal>
            </section>
          </>
        )}
      </main>

      {/* Footer Navigation */}
      <footer className="site-footer">
        {/* Subtle Ambient Radial Glows & Low-Opacity Watermark */}
        <div className="footer-ambient-glow glow-left" aria-hidden="true" />
        <div className="footer-ambient-glow glow-right" aria-hidden="true" />
        <div className="footer-watermark" aria-hidden="true">oyecam.</div>

        <div className="container footer-container">
          {/* MAIN FOOTER NAVIGATION */}
          <div className="footer-main-grid">
            {/* Left Brand Area */}
            <div className="footer-brand-column">
              <Logo onNavigate={navigateTo} />
              
              <div className="footer-brand-taglines">
                <p className="footer-tagline-main">A little hello. A real connection.</p>
                <p className="footer-tagline-sub">Your world, a little closer.</p>
              </div>

              {/* Contact & Address Details */}
              <div className="footer-contact-details">
                <a href="tel:+919010187125" className="footer-contact-item">
                  <Phone size={13} className="footer-contact-icon" />
                  <span>+91 90101 87125</span>
                </a>
                <div className="footer-contact-item footer-address">
                  <MapPin size={13} className="footer-contact-icon" />
                  <span>1-41 Vivek Nagar Colony, Jillelaguda, Pincode - 500097</span>
                </div>
              </div>

              {/* Social Icon Row */}
              <div className="footer-social-row" aria-label="Social links">
                {[
                  { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com' },
                  { name: 'X', Icon: XTwitterIcon, href: 'https://x.com' },
                  { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com' },
                  { name: 'YouTube', Icon: Youtube, href: 'https://youtube.com' },
                  { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com' },
                ].map(({ name, Icon, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={`Visit OyeCam on ${name}`}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 4 Compact Navigation Groups */}
            <div className="footer-nav-columns">
              {/* Group 1: EXPLORE */}
              <div className="footer-nav-col">
                <h4 className="footer-col-title">EXPLORE</h4>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#features" className="footer-nav-link" onClick={(e) => handleFooterAnchor(e, 'features')}>
                      <span>Features</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="footer-nav-link" onClick={(e) => handleFooterAnchor(e, 'experience')}>
                      <span>Screenshots</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="footer-nav-link" onClick={(e) => handleFooterAnchor(e, 'how-it-works')}>
                      <span>How it works</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="#community" className="footer-nav-link" onClick={(e) => handleFooterAnchor(e, 'community')}>
                      <span>Community</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="footer-nav-link" onClick={(e) => handleFooterAnchor(e, 'experience')}>
                      <span>Live</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Group 2: COMPANY */}
              <div className="footer-nav-col">
                <h4 className="footer-col-title">COMPANY</h4>
                <ul className="footer-nav-list">
                  {[
                    { label: 'About OyeCam', target: 'features' },
                    { label: 'Blog', target: 'community' },
                    { label: 'Careers', target: 'download' },
                    { label: 'Press', target: 'download' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a 
                        href={`#${item.target}`} 
                        className="footer-nav-link"
                        onClick={(e) => handleFooterAnchor(e, item.target)}
                      >
                        <span>{item.label}</span>
                        <ArrowRight size={13} className="footer-nav-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 3: SUPPORT */}
              <div className="footer-nav-col">
                <h4 className="footer-col-title">SUPPORT</h4>
                <ul className="footer-nav-list">
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('contact')}
                    >
                      <span>Help Center</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <a 
                      href="#how-it-works" 
                      className="footer-nav-link"
                      onClick={(e) => handleFooterAnchor(e, 'how-it-works')}
                    >
                      <span>FAQs</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+919010187125" 
                      className="footer-nav-link"
                    >
                      <span>+91 90101 87125</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </a>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('contact')}
                    >
                      <span>Contact us</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('community-guidelines')}
                    >
                      <span>Report an issue</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Group 4: LEGAL */}
              <div className="footer-nav-col">
                <h4 className="footer-col-title">LEGAL</h4>
                <ul className="footer-nav-list">
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('privacy')}
                    >
                      <span>Privacy policy</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('terms')}
                    >
                      <span>Terms of service</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('cookie-policy')}
                    >
                      <span>Cookie policy</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('community-guidelines')}
                    >
                      <span>Community guidelines</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('child-safety')}
                    >
                      <span>Child safety policy</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="footer-nav-link"
                      onClick={() => navigateTo('delete-account')}
                      style={{ opacity: 0.8 }}
                    >
                      <span>Delete account</span>
                      <ArrowRight size={13} className="footer-nav-arrow" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM BAR */}
          <div className="footer-bottom-bar">
            <div className="footer-copyright">
              © {new Date().getFullYear()} oyecam. All rights reserved.
            </div>

            <div className="footer-made-in">
              Made with <Heart size={13} fill="#ff416c" color="#ff416c" className="inline-heart" /> in India
            </div>

            <button 
              type="button" 
              className="footer-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </footer>

    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
