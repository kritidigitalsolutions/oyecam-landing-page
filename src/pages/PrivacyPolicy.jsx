import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { ShieldCheck, Lock, EyeOff, UserCheck, Calendar, Mail } from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <LegalLayout activePage="privacy" onNavigate={onNavigate}>
      <div className="legal-hero">
        <span className="legal-badge">Legal & Transparency</span>
        <h1>Privacy <span className="gradient-text">Policy</span></h1>
        <p>
          At oyecam, we value your trust and are committed to protecting your personal data, 
          privacy, and live conversations. This policy describes how we collect, handle, 
          and safeguard your information across the oyecam mobile applications and services.
        </p>
        <div className="legal-meta">
          <span><Calendar size={14} /> Last updated: October 2026</span>
          <span><ShieldCheck size={14} /> DPDP Act 2023 & IT Act Compliant</span>
          <span><Lock size={14} /> TLS 1.3 End-to-End Session Security</span>
        </div>
      </div>

      <div className="legal-highlights">
        <div className="legal-highlight-card">
          <div className="highlight-icon green">
            <Lock size={20} />
          </div>
          <strong>No Call Recordings</strong>
          <span>Your private 1-on-1 video and voice calls are real-time WebRTC streams. We do not store or record private calls.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon">
            <EyeOff size={20} />
          </div>
          <strong>Never Sold to Advertisers</strong>
          <span>We do not sell, rent, or trade your personal profile, phone number, or chat records to third-party ad brokers.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon coral">
            <UserCheck size={20} />
          </div>
          <strong>Your Control & Deletion</strong>
          <span>You can request complete deletion of your account and personal data at any time via in-app settings or our web portal.</span>
        </div>
      </div>

      <article className="legal-content">
        <section>
          <h2>1. Introduction & Scope</h2>
          <p>
            This Privacy Policy applies to the <strong>oyecam</strong> mobile applications (iOS and Android), 
            associated web services, and application programming interfaces provided by 
            <strong> oyecam Technologies Private Limited</strong> ("oyecam", "we", "us", or "our").
          </p>
          <p>
            By downloading, accessing, or using oyecam, you consent to the collection, processing, 
            and transfer of your information as outlined in this Privacy Policy. If you do not agree 
            with these terms, please discontinue using oyecam immediately.
          </p>
          <div className="legal-callout info">
            <strong>Age Restriction Notice:</strong> oyecam is strictly designed for adults aged 18 years and above. 
            We do not knowingly collect information from or permit access to minors under the age of 18.
          </div>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information necessary to provide you with secure connections, live streaming, and interactive communication:</p>

          <h3>A. Information You Provide to Us</h3>
          <ul>
            <li><strong>Account & Profile Information:</strong> Display name, age/birthdate, gender, language preferences, profile photos, and bio description.</li>
            <li><strong>Authentication Details:</strong> Mobile phone number or email address used for one-time password (OTP) verification and account recovery.</li>
            <li><strong>Performer Verification:</strong> For registered live performers, government-issued identity proof (PAN card, Aadhaar or passport) and bank details required strictly for identity verification and earnings payout under Indian tax laws.</li>
            <li><strong>Support & Communications:</strong> Messages, feedback, or reports you send to our customer care or moderation team.</li>
          </ul>

          <h3>B. Information Collected Automatically</h3>
          <ul>
            <li><strong>Device & Network Data:</strong> Device model, operating system version, unique device identifiers (Android ID / IDFV), IP address, network carrier, and performance metrics.</li>
            <li><strong>Usage Logs:</strong> App features used, rooms joined, performers followed, coin gift transactions, session durations, and timestamps.</li>
            <li><strong>Virtual Wallet Data:</strong> Coin balance top-up history, gift transactions, and redemption logs (processed via secure PCI-DSS compliant third-party payment gateways). We never store your debit/credit card numbers or UPI PINs.</li>
          </ul>

          <h3>C. Real-Time Audio & Video Communications</h3>
          <p>
            oyecam facilitates real-time 1-on-1 video calls, voice rooms, and public live broadcasts via peer-to-peer 
            and server-relayed WebRTC protocols.
          </p>
          <ul>
            <li><strong>Private 1-on-1 Calls:</strong> Streams are transmitted in real-time. We <strong>do not record, store, or archive</strong> private 1-on-1 video or voice audio on our servers.</li>
            <li><strong>Public Live Streams & Rooms:</strong> Public live broadcasts are subject to real-time automated safety scanning to detect policy violations (e.g. obscenity, violence, harassment).</li>
          </ul>
        </section>

        <section>
          <h2>3. Device Permissions We Request</h2>
          <p>oyecam requests access to specific device capabilities solely to enable core features:</p>
          <ul>
            <li><strong>Camera (android.permission.CAMERA):</strong> Required to transmit your video during 1-on-1 video calls, live streaming broadcasts, and capturing profile photos.</li>
            <li><strong>Microphone (android.permission.RECORD_AUDIO):</strong> Required to transmit your voice during audio/video calls, room voice chats, and live broadcasts.</li>
            <li><strong>Photo Library / Storage:</strong> Required when you choose to upload avatar images or media attachments in chat.</li>
            <li><strong>Push Notifications:</strong> Required to notify you of incoming calls, chat messages, live stream invitations, and coin gifts.</li>
          </ul>
          <p>You can manage or revoke these permissions at any time through your device operating system settings.</p>
        </section>

        <section>
          <h2>4. How We Use Your Information</h2>
          <p>We process your data for the following legitimate business and service purposes:</p>
          <ul>
            <li>To match and connect you with performers, language-specific rooms, and other users.</li>
            <li>To enable coin wallet transactions, gifts, performer earnings calculation, and fraud prevention.</li>
            <li>To maintain a safe, respectful environment through automated moderation, safety reporting, and anti-harassment filtering.</li>
            <li>To troubleshoot app stability, analyze system crashes, and improve user interface performance.</li>
            <li>To comply with legal obligations under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Sharing and Third Parties</h2>
          <p>We only share your information under strict, limited conditions:</p>
          <ul>
            <li><strong>Authorized Infrastructure Providers:</strong> Cloud hosting, real-time media servers (AWS, Google Cloud), and SMS OTP verification gateways under strict data protection agreements.</li>
            <li><strong>Payment Processors:</strong> RBI-authorized payment aggregators (e.g. Razorpay, Google Play In-App Billing, Apple StoreKit) to process coin pack purchases securely.</li>
            <li><strong>Legal & Regulatory Authorities:</strong> When formally required by applicable law, court order, or law enforcement agency investigating unlawful activities, fraud, or cybersecurity incidents.</li>
          </ul>
          <p><strong>We do not sell, rent, or trade your personal identifiable information to third-party data brokers or marketing agencies.</strong></p>
        </section>

        <section>
          <h2>6. Data Security & Retention</h2>
          <p>
            We implement administrative, physical, and technical safeguards, including TLS 1.3 encryption for data in transit 
            and AES-256 encryption for data at rest. Access to sensitive user data is restricted to authorized operations personnel 
            with mandatory multi-factor authentication.
          </p>
          <p>
            <strong>Retention Period:</strong> We retain active account data for as long as your account is maintained. 
            When you request account deletion, your personal data is purged within 30 days, except for financial transaction logs 
            retained strictly to comply with statutory accounting and tax audit requirements under Indian law (up to 180 days).
          </p>
        </section>

        <section>
          <h2>7. Your Privacy Rights & Account Deletion</h2>
          <p>Under applicable data privacy regulations, you have the right to:</p>
          <ul>
            <li><strong>Access & Review:</strong> View your profile details, coin transaction history, and call logs inside the app.</li>
            <li><strong>Correction & Update:</strong> Modify your display name, bio, photo, and preferences at any time.</li>
            <li><strong>Withdraw Consent:</strong> Revoke camera, microphone, or notification permissions via phone settings.</li>
            <li><strong>Permanent Deletion:</strong> Permanently delete your account and associated personal data using our <button onClick={() => onNavigate('delete-account')} style={{ color: '#ff688a', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit' }}>Delete Account Portal</button> or within the app under Profile &gt; Settings &gt; Delete Account.</li>
          </ul>
        </section>

        <section>
          <h2>8. Grievance Officer & Contact Information</h2>
          <p>
            In accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, 
            the designated Grievance Officer for oyecam is:
          </p>
          <div className="officer-card">
            <div className="officer-item">
              <strong>Grievance Officer</strong>
              <span>Aakash Varma</span>
            </div>
            <div className="officer-item">
              <strong>Designation</strong>
              <span>Head of Privacy & Compliance</span>
            </div>
            <div className="officer-item">
              <strong>Phone / Helpline</strong>
              <a href="tel:+919010187125">+91 90101 87125</a>
            </div>
            <div className="officer-item">
              <strong>Email Address</strong>
              <a href="mailto:grievance@oyecam.com">grievance@oyecam.com</a>
            </div>
            <div className="officer-item">
              <strong>Office Location</strong>
              <span>1-41 Vivek Nagar Colony, Jillelaguda, Pincode - 500097</span>
            </div>
          </div>
          <p style={{ marginTop: '14px', fontSize: '13px' }}>
            We acknowledge all privacy grievances within 24 hours and resolve reported inquiries within 15 working days.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
