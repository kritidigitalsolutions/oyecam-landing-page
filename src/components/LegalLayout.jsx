import React from 'react';
import { ArrowLeft, Shield, FileText, Cookie, HeartHandshake, Mail, UserX, Phone, ExternalLink, ShieldAlert, Receipt } from 'lucide-react';

export default function LegalLayout({ activePage, onNavigate, children }) {
  const legalLinks = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'refund-policy', label: 'Refund Policy', icon: Receipt },
    { id: 'cookie-policy', label: 'Cookie Policy', icon: Cookie },
    { id: 'community-guidelines', label: 'Community Guidelines', icon: HeartHandshake },
    { id: 'child-safety', label: 'Child Safety Policy', icon: ShieldAlert }
  ];

  const supportLinks = [
    { id: 'contact', label: 'Contact Us', icon: Mail },
    { id: 'delete-account', label: 'Delete Account', icon: UserX, danger: true }
  ];

  return (
    <div className="legal-page-inner">
      <div className="legal-wrapper">
        {/* Left Sticky Sidebar Navigation */}
        <aside className="legal-sidebar" aria-label="Legal and support navigation">
          <button 
            className="legal-sidebar-back" 
            onClick={() => onNavigate('home')}
            title="Return to oyecam home page"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>

          {/* Section 1: Legal & Compliance */}
          <div className="legal-sidebar-group">
            <span className="legal-sidebar-heading">Legal & Compliance</span>
            <nav className="legal-sidebar-menu">
              {legalLinks.map(({ id, label, icon: Icon }) => {
                const isActive = activePage === id;
                return (
                  <button
                    key={id}
                    className={`legal-sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => onNavigate(id)}
                  >
                    <Icon size={16} className="sidebar-icon" />
                    <span className="sidebar-label">{label}</span>
                    {isActive && <span className="sidebar-active-indicator" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Section 2: Support & Account */}
          <div className="legal-sidebar-group">
            <span className="legal-sidebar-heading">Support & Safety</span>
            <nav className="legal-sidebar-menu">
              {supportLinks.map(({ id, label, icon: Icon, danger }) => {
                const isActive = activePage === id;
                return (
                  <button
                    key={id}
                    className={`legal-sidebar-item ${danger ? 'danger-item' : ''} ${isActive ? (danger ? 'active-danger' : 'active') : ''}`}
                    onClick={() => onNavigate(id)}
                  >
                    <Icon size={16} className="sidebar-icon" />
                    <span className="sidebar-label">{label}</span>
                    {isActive && <span className="sidebar-active-indicator" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Support Assistance Card */}
          <div className="legal-sidebar-card">
            <div className="sidebar-card-badge">DIRECT ASSISTANCE</div>
            <strong>24/7 Helpline Desk</strong>
            <p>Need urgent account or safety help?</p>
            <a href="tel:+919010187125" className="sidebar-card-phone">
              <Phone size={13} />
              <span>+91 90101 87125</span>
            </a>
          </div>
        </aside>

        {/* Right Main Content Column */}
        <main className="legal-main-area">
          {children}
        </main>
      </div>
    </div>
  );
}

