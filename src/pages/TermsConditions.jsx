import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { FileText, AlertTriangle, ShieldCheck, Scale, Coins, Ban, Mail } from 'lucide-react';

export default function TermsConditions({ onNavigate }) {
  return (
    <LegalLayout activePage="terms" onNavigate={onNavigate}>
      <div className="legal-hero">
        <span className="legal-badge">Agreement & Community Rules</span>
        <h1>Terms & <span className="gradient-text">Conditions</span></h1>
        <p>
          These Terms of Service govern your access to and use of the oyecam platform, 
          mobile applications, coin purchases, live streaming, and voice/video calling features. 
          Please read them carefully before using our platform.
        </p>
        <div className="legal-meta">
          <span><FileText size={14} /> Version 2.4 · Effective October 2026</span>
          <span><Scale size={14} /> Governed by Laws of India</span>
          <span><AlertTriangle size={14} /> Strict 18+ Age Requirement</span>
        </div>
      </div>

      <div className="legal-highlights">
        <div className="legal-highlight-card">
          <div className="highlight-icon amber">
            <AlertTriangle size={20} />
          </div>
          <strong>18+ Age Mandatory</strong>
          <span>You must be at least 18 years of age to download, create an account, or interact on oyecam.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon coral">
            <Ban size={20} />
          </div>
          <strong>Zero Tolerance for Abuse</strong>
          <span>Strict prohibition against nudity, sexual exploitation, harassment, extortion, or recording calls without consent.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon">
            <Coins size={20} />
          </div>
          <strong>Virtual Coin Terms</strong>
          <span>In-app coins are virtual tokens for in-app tipping and calls. They are non-transferable and non-refundable.</span>
        </div>
      </div>

      <article className="legal-content">
        <section>
          <h2>1. Acceptance of Terms & Eligibility</h2>
          <p>
            By downloading, installing, or registering an account on oyecam, you confirm that you have read, 
            understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
          <ul>
            <li><strong>Age Requirement:</strong> You must be at least <strong>18 years old</strong> to use oyecam. If you are under 18, you are strictly prohibited from creating an account or accessing the platform.</li>
            <li><strong>Legal Capacity:</strong> You represent and warrant that you have the full legal capacity to enter into this legally binding agreement under the Indian Contract Act, 1872, or equivalent applicable laws in your jurisdiction.</li>
            <li><strong>Account Integrity:</strong> You agree to provide true, accurate, and current information during mobile OTP registration and maintain only one personal active account.</li>
          </ul>
        </section>

        <section>
          <h2>2. Community Code of Conduct & Prohibited Activities</h2>
          <p>
            oyecam is dedicated to fostering genuine, respectful conversations. To protect our community, 
            the following activities are <strong>strictly prohibited and will result in immediate permanent account suspension and device banning</strong>:
          </p>
          <div className="legal-callout warning">
            <strong>Zero Tolerance Policy:</strong> Any broadcast, message, or video call involving sexually explicit acts, 
            commercial sexual solicitation, or child endangerment is immediately reported to cybercrime law enforcement authorities.
          </div>
          <ul>
            <li><strong>Nudity & Sexually Explicit Content:</strong> Displaying nudity, performing sexual acts, soliciting prostitution or escort services during live streams, rooms, or 1-on-1 calls.</li>
            <li><strong>Unauthorized Recording:</strong> Screen-recording, capturing, screenshotting, or distributing another user's live video, voice, or private chat without their explicit prior written consent.</li>
            <li><strong>Harassment & Blackmail:</strong> Threatening, stalking, doxxing, extorting, blackmailing, or using abusive, vulgar, or hate speech against any user or performer.</li>
            <li><strong>Impersonation & Fraud:</strong> Creating deceptive accounts pretending to be celebrities, other users, or oyecam staff; scamming users for money, UPI transfers, or gifts.</li>
            <li><strong>Illegal & Harmful Content:</strong> Promoting drug abuse, weapons, terrorism, self-harm, hate speech based on caste, religion, gender, or sexual orientation.</li>
          </ul>
        </section>

        <section>
          <h2>3. Virtual Currency (Coins) & Purchase Rules</h2>
          <p>
            oyecam enables users to acquire virtual items ("Coins") to unlock video calls, enter premium rooms, 
            and gift performers as appreciation:
          </p>
          <ul>
            <li><strong>Virtual License:</strong> Coins are virtual tokens granted to you under a limited, non-exclusive, non-transferable license strictly for use inside the oyecam application. Coins do not constitute real currency, legal tender, or stored financial value.</li>
            <li><strong>One-Time Purchases:</strong> All coin packs purchased via Google Play Billing, Apple StoreKit, or authorized payment aggregators are one-time payments. We do not charge recurring subscriptions without clear explicit consent.</li>
            <li><strong>Non-Refundable:</strong> Except where required by applicable statutory consumer protection law or platform store guidelines, <strong>all coin purchases are final and non-refundable</strong> once credited to your account.</li>
            <li><strong>No Inter-User Transfers:</strong> You cannot transfer, trade, sell, or barter coins to other user accounts outside the platform's official gifting mechanics.</li>
          </ul>
        </section>

        <section>
          <h2>4. Performer Terms & Broadcasting Guidelines</h2>
          <p>Users who register as verified live performers are subject to supplementary guidelines:</p>
          <ul>
            <li><strong>KYC Verification:</strong> Performers must submit valid government identification to receive payout disbursements for accrued gift rewards.</li>
            <li><strong>Broadcast Standards:</strong> Performers must adhere strictly to community conduct standards during streams. Engaging in suggestive solicitation or off-platform money requests violates our terms and results in immediate reward forfeiture.</li>
            <li><strong>Payouts & Taxes:</strong> Performer gift redemptions are subject to standard platform service fees, TDS deductions as mandated by the Income Tax Act of India, and banking processing schedules.</li>
          </ul>
        </section>

        <section>
          <h2>5. Content Moderation & Account Suspension</h2>
          <p>
            oyecam employs a combination of automated AI detection, proactive moderation, and user-initiated 
            in-call reporting tools to monitor public streams and investigate reported violations.
          </p>
          <ul>
            <li><strong>Instant In-Call Action:</strong> Users can block and report any individual during a call with one tap. Reported streams are reviewed immediately by safety moderators.</li>
            <li><strong>Penalties:</strong> Depending on the severity of the violation, penalties include temporary muting, broadcast restriction, permanent account termination, and hardware device bans.</li>
            <li><strong>Forfeiture:</strong> If an account is suspended or terminated due to conduct violations, any remaining coin balance or pending performer rewards are immediately forfeited.</li>
          </ul>
        </section>

        <section>
          <h2>6. Intellectual Property Rights</h2>
          <p>
            The OyeCam application, logos, trademarks, visual design, audio-video engines, UI mockups, 
            and underlying software algorithms are the exclusive property of <strong>CollabSkool Private Limited</strong> (CIN: U73100TS2025PTC207613). 
            You may not decompile, reverse-engineer, modify, or scrape any component of the service.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability & Disclaimers</h2>
          <p>
            OyeCam provides the platform on an "AS IS" and "AS AVAILABLE" basis. While we maintain 
            rigorous safety filters, we cannot guarantee the behavior or statements of individual third-party users. 
            You interact with other users at your own discretion and responsibility.
          </p>
          <p>
            In no event shall CollabSkool Private Limited, its directors, employees, or partners be liable for any indirect, incidental, 
            consequential, or punitive damages arising from your access to or inability to use the platform.
          </p>
        </section>

        <section>
          <h2>8. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the substantive laws of India. 
            Any dispute, controversy, or claim arising out of or relating to these Terms shall be subject to 
            the exclusive jurisdiction of the competent courts situated in <strong>Hyderabad, Telangana, India</strong>.
          </p>
        </section>

        <section>
          <h2>9. Customer Support & Inquiries</h2>
          <p>For inquiries regarding these Terms and Conditions or assistance with your account, contact our support team:</p>
          <div className="officer-card">
            <div className="officer-item">
              <strong>Official Email</strong>
              <a href="mailto:oyecam.com@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Mail size={13} color="#ff416c" /> oyecam.com@gmail.com
              </a>
            </div>
            <div className="officer-item">
              <strong>Support Helpline</strong>
              <a href="tel:+919010187125">+91 90101 87125</a>
            </div>
            <div className="officer-item">
              <strong>Support Desk</strong>
              <button 
                type="button" 
                onClick={() => onNavigate('contact')}
                style={{ color: '#ff688a', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600, textAlign: 'left' }}
              >
                Submit Legal Inquiry Ticket →
              </button>
            </div>
            <div className="officer-item">
              <strong>Registered Office</strong>
              <span>1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097</span>
            </div>
          </div>
        </section>
      </article>
    </LegalLayout>
  );
}
