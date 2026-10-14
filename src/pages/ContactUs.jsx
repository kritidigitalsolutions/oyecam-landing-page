import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  Mail, Phone, MapPin, ShieldAlert, Clock, Send, CheckCircle2, 
  HelpCircle, MessageSquare, Headphones, ChevronDown, Sparkles 
} from 'lucide-react';

export default function ContactUs({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const randomTicket = `OYE-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'How fast does the oyecam support team respond?',
      a: 'Our customer support team operates 24/7. General inquiries receive an answer within 2 to 4 hours. Critical Trust & Safety or account security escalations are triaged immediately.'
    },
    {
      q: 'How do I immediately block or report a user during a video call?',
      a: 'During any active 1-on-1 call or live room, simply tap the Shield icon at the top corner of your screen. Select "Report & Disconnect" to instantly terminate the stream, block the user, and submit the incident to our automated review queue.'
    },
    {
      q: 'Are my private 1-on-1 video calls recorded by oyecam?',
      a: 'No. Never. oyecam utilizes direct peer-to-peer encrypted WebRTC connections. Private calls are never recorded, saved to any cloud storage, or accessed by third parties.'
    },
    {
      q: 'How can I request permanent deletion of my account and data?',
      a: 'You can delete your account at any time either inside the mobile app (Profile > Settings > Delete Account) or directly through our online Delete Account portal right here on our website.'
    },
    {
      q: 'What should I do if I purchased coins but did not receive them?',
      a: 'Please submit a ticket below choosing "Coins & Billing" or call our helpline at +91 90101 87125. Include your registered phone number and Google Play or Apple App Store invoice number for instant verification.'
    }
  ];

  return (
    <LegalLayout activePage="contact" onNavigate={onNavigate}>
      <div className="legal-hero">
        <div className="legal-badge">
          <Headphones size={14} /> Help & Communications Desk
        </div>
        <h1>Contact oyecam <span className="gradient-text">Support & Team</span></h1>
        <div className="legal-meta">
          <span>Available 24/7</span>
          <span>•</span>
          <span>Average Response Time: &lt; 2 Hours</span>
          <span>•</span>
          <span>Headquarters: Hyderabad / Telangana</span>
        </div>
      </div>

      {/* Direct Contact Cards */}
      <div className="contact-channels-grid">
        <div className="contact-card">
          <div className="contact-card-icon support-bg"><Mail size={20} /></div>
          <h3>Official Email Desk</h3>
          <p>Email us directly for support, billing queries, and legal concerns.</p>
          <a href="mailto:oyecam.com@gmail.com" className="contact-channel-link">
            oyecam.com@gmail.com
          </a>
          <span className="contact-sub-badge"><Clock size={11} /> 24-Hour Response SLA</span>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon phone-bg"><Phone size={20} /></div>
          <h3>Direct Helpline</h3>
          <p>Speak directly with our Indian regional customer support executive.</p>
          <a href="tel:+919010187125" className="contact-channel-link">
            +91 90101 87125
          </a>
          <span className="contact-sub-badge">Mon - Sat (10:00 AM - 5:00 PM IST)</span>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon safety-bg"><ShieldAlert size={20} /></div>
          <h3>Trust & Safety Hotline</h3>
          <p>For reporting urgent harassment, impersonation, or safety emergencies.</p>
          <a href="tel:+919010187125" className="contact-channel-link">
            +91 90101 87125
          </a>
          <span className="contact-sub-badge"><Sparkles size={11} /> Priority Escalation</span>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon office-bg"><MapPin size={20} /></div>
          <h3>Registered Office</h3>
          <p className="contact-address-text">
            1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097
          </p>
          <span className="contact-sub-badge">CollabSkool Private Limited</span>
        </div>
      </div>

      {/* Interactive Contact Form & FAQ Layout */}
      <div className="contact-main-split">
        {/* Left Side: Contact Form */}
        <div className="contact-form-container">
          <div className="contact-form-header">
            <MessageSquare size={20} className="text-pink-400" />
            <div>
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and our team will get back to you promptly.</p>
            </div>
          </div>

          {submitted ? (
            <div className="contact-success-panel">
              <CheckCircle2 size={48} color="#70e5b0" />
              <h4>Message Received Successfully!</h4>
              <p>
                Thank you for reaching out. A support ticket has been generated with Reference ID:
              </p>
              <div className="ticket-badge">{ticketId}</div>
              <p className="ticket-note">
                Our support team has logged your inquiry and will reach out to <strong>{formData.email}</strong> promptly.
              </p>
              <button 
                type="button" 
                className="button small"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', category: 'support', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Mobile Number (Optional)</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    placeholder="+91 90000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-category">Department / Topic *</label>
                  <select
                    id="contact-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="support">General Customer Support</option>
                    <option value="billing">Coins & In-App Purchases</option>
                    <option value="safety">Trust, Safety & User Reporting</option>
                    <option value="privacy">Privacy & DPDP Inquiries</option>
                    <option value="partnerships">Creator & Business Partnerships</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">How can we help you? *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Please describe your query, issue, or feedback in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="button contact-submit-btn">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Quick FAQs */}
        <div className="contact-faq-container">
          <div className="faq-box-header">
            <HelpCircle size={20} className="text-purple-400" />
            <div>
              <h3>Frequently Asked Questions</h3>
              <p>Quick answers to common inquiries.</p>
            </div>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={16} className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="contact-delete-card">
            <h4>Need to delete your account?</h4>
            <p>You can instantly submit an automated data erasure request via our self-serve portal.</p>
            <button 
              type="button" 
              className="contact-delete-btn"
              onClick={() => onNavigate('delete-account')}
            >
              Go to Delete Account Portal &rarr;
            </button>
          </div>
        </div>
      </div>
    </LegalLayout>
  );
}
