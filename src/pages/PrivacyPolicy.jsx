import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  ShieldCheck, Lock, EyeOff, UserCheck, Calendar, Mail, Phone, MapPin, 
  Scale, Clock, AlertCircle, Database, Server, UserX, FileText, 
  CheckCircle2, ShieldAlert, ArrowRight, Smartphone, Eye
} from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }) {
  const dataCollectionRows = [
    {
      category: 'Account data',
      examples: 'Mobile number, name, gender, date of birth, profile photo, language',
      why: 'Create your account, confirm you are 18+, match you with users',
      badgeColor: 'blue'
    },
    {
      category: 'KYC data (at withdrawal)',
      examples: 'Government ID, selfie, PAN, bank / UPI details',
      why: 'Age and identity verification, payouts, tax compliance',
      badgeColor: 'purple'
    },
    {
      category: 'Payment data',
      examples: 'Transaction ID, amount, date, payment status',
      why: 'Process purchases and refunds (card/UPI details are held by our payment partner, not us)',
      badgeColor: 'green'
    },
    {
      category: 'Call and chat data',
      examples: 'Call time, duration, participants, chat messages, reports',
      why: 'Billing, safety, resolving disputes',
      badgeColor: 'blue'
    },
    {
      category: 'Reported content',
      examples: 'Screenshots, messages or details submitted when a user is reported',
      why: 'Investigate reports of nudity, abuse and child-safety violations',
      badgeColor: 'red'
    },
    {
      category: 'Device and usage data',
      examples: 'Device model, OS, IP address, app version, crash logs, in-app activity',
      why: 'Security, fraud prevention, improving the app',
      badgeColor: 'orange'
    },
    {
      category: 'Permissions',
      examples: 'Camera, microphone, notifications',
      why: 'Make calls and alert you to incoming calls',
      badgeColor: 'purple'
    }
  ];

  const retentionRows = [
    {
      data: 'Account data',
      retention: 'While your account is active, then deleted within 90 days of deletion',
      badge: '90 Days Post-Deletion'
    },
    {
      data: 'KYC and payment records',
      retention: 'As required by tax and financial laws (typically 8 years)',
      badge: 'Statutory 8 Years'
    },
    {
      data: 'Call logs and chats',
      retention: '180 days',
      badge: '180 Days'
    },
    {
      data: 'Reported content',
      retention: '180 days, or longer if needed for an investigation',
      badge: '180+ Days (Investigation)'
    },
    {
      data: 'Logs required under IT Rules / CERT-In directions',
      retention: 'At least 180 days',
      badge: 'Min 180 Days (CERT-In)'
    }
  ];

  return (
    <LegalLayout activePage="privacy" onNavigate={onNavigate}>
      {/* Legal Hero Banner */}
      <div className="legal-hero">
        <div className="legal-badge">
          <ShieldCheck size={14} /> DPDP Act 2023 &amp; IT Rules Compliant
        </div>
        <h1>OyeCam – <span className="gradient-text">Privacy Policy</span></h1>
        <div className="legal-meta">
          <span>CollabSkool Private Limited (CIN: U73100TS2025PTC207613)</span>
          <span>•</span>
          <span>Effective: 15 October 2026</span>
          <span>•</span>
          <span>Data Fiduciary: Hyderabad, India</span>
        </div>
        <div className="legal-chips-row">
          <span className="legal-chip"><Lock size={14} /> No Call Audio/Video Stored</span>
          <span className="legal-chip"><EyeOff size={14} /> Never Sell Personal Data</span>
          <span className="legal-chip"><UserCheck size={14} /> Right to Access &amp; Delete</span>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="legal-highlights">
        <div className="legal-highlight-card">
          <div className="highlight-icon green">
            <Lock size={20} />
          </div>
          <strong>No Call Recordings</strong>
          <span>We do not record or store audio or video of your private calls. Streams are real-time and transient.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon">
            <EyeOff size={20} />
          </div>
          <strong>Never Sold to Brokers</strong>
          <span>We collect only data necessary for safety and operations. We never sell your personal data to advertisers.</span>
        </div>
        <div className="legal-highlight-card">
          <div className="highlight-icon coral">
            <UserCheck size={20} />
          </div>
          <strong>Full User Control</strong>
          <span>Under the DPDP Act 2023, you can view, correct, withdraw consent, or permanently delete your account anytime.</span>
        </div>
      </div>

      <article className="legal-article">
        {/* Preamble Callout */}
        <div className="legal-summary-card">
          <h3><ShieldCheck size={18} /> Privacy Commitment &amp; Legal Framework</h3>
          <p>
            This Privacy Policy applies to <strong>OyeCam</strong>, a video and voice calling app owned and operated by <strong>CollabSkool Private Limited</strong>. 
            "OyeCam", "we", "us" and "our" mean CollabSkool Private Limited. "You" and "User" mean anyone who uses the app, including callers and hosts/creators. 
            Effective date: <strong>15 October 2026</strong>.
          </p>
          <p style={{ marginTop: '10px' }}>
            We collect only the data needed to run OyeCam safely, we never sell your personal data, and you can access, correct or delete it at any time. 
            This policy follows the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and its Rules, the <strong>Information Technology Act, 2000</strong>, and the <strong>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2>1. Who We Are</h2>
          <p>
            <strong>CollabSkool Private Limited</strong> (CIN: <code>U73100TS2025PTC207613</code>), registered office at 
            <strong> 1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097</strong>, is the <strong>Data Fiduciary</strong> for OyeCam under the DPDP Act, 2023.
          </p>
          <div className="contact-strip" style={{ marginTop: '14px' }}>
            <div className="contact-strip-row">
              <Mail size={16} />
              <span>Official Privacy Contact: <a href="mailto:oyecam.com@gmail.com">oyecam.com@gmail.com</a></span>
            </div>
            <div className="contact-strip-row">
              <Phone size={16} />
              <span>Direct Support Helpline: <a href="tel:+919010187125">+91 90101 87125</a> (10:00 AM – 5:00 PM IST)</span>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2>2. Data We Collect</h2>
          <p>
            We adhere to strict data minimization principles. We only collect information strictly required to run our communications services, confirm eligibility, maintain billing, and guarantee user safety:
          </p>

          <div className="legal-table-wrapper" style={{ margin: '20px 0', overflowX: 'auto' }}>
            <table className="legal-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '190px' }}>Category</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '260px' }}>Examples</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '260px' }}>Why We Collect It</th>
                </tr>
              </thead>
              <tbody>
                {dataCollectionRows.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '14px 16px', color: '#ffffff', fontWeight: 600 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <Database size={14} color="#a78bfa" style={{ flexShrink: 0 }} />
                        {row.category}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', color: '#d8cfeb' }}>
                      {row.examples}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#b9afcc' }}>
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="legal-callout warning" style={{ marginTop: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <EyeOff size={18} style={{ flexShrink: 0, marginTop: '2px', color: '#fca5a5' }} />
            <div>
              <strong style={{ color: '#fee2e2', display: 'block', marginBottom: '4px' }}>Explicit Non-Access Guarantee:</strong>
              <p style={{ margin: 0, fontSize: '13px', color: '#fca5a5' }}>
                We do <strong>not</strong> read your contacts, SMS messages, or private photo gallery unless you explicitly choose to select and share a specific image item inside support or profile settings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2>3. Call Recording and Moderation</h2>
          <div className="legal-callout info" style={{ marginBottom: '16px' }}>
            <strong style={{ color: '#e0e7ff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Lock size={16} color="#93c5fd" /> Zero Real-Time Audio / Video Recording
            </strong>
            <p style={{ margin: 0, fontSize: '13px', color: '#c7d2fe' }}>
              <strong>We do not record or store the audio or video of your calls.</strong> Video and voice streams are real-time, peer-to-peer or server-relayed WebRTC sessions that terminate immediately upon call completion.
            </p>
          </div>
          <p>
            We keep only essential call metadata (timestamp, call duration, and participant identifiers) and textual chat messages. If a call or user is reported for misconduct:
          </p>
          <ul>
            <li>Our dedicated safety and moderation team reviews the incident report, associated call metadata, and any user-submitted evidence or screenshots.</li>
            <li>Enforcement actions are carried out swiftly in accordance with our Community Guidelines and Child Safety Policy.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2>4. Consent and Legal Basis</h2>
          <p>
            Under the DPDP Act, 2023, we process your personal data based on:
          </p>
          <ul>
            <li><strong>Your Consent:</strong> Freely given, specific, informed, and unambiguous consent provided during account registration and service onboarding.</li>
            <li><strong>Legitimate Uses:</strong> As permitted under the DPDP Act for fulfilling safety standards, complying with Indian laws and court orders, preventing fraud and security breaches, and protecting vital user safety.</li>
          </ul>
          <p>
            You have the absolute right to withdraw consent at any time inside the app by visiting <strong>Settings → Privacy</strong>. Please note that withdrawing consent for critical data may prevent certain core calling and matchmaking features from functioning.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2>5. Children's Data</h2>
          <div className="legal-callout danger" style={{ marginBottom: '16px' }}>
            <strong style={{ color: '#fee2e2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <ShieldAlert size={16} color="#ef4444" /> Strict 18+ Age Restriction
            </strong>
            <p style={{ margin: 0, fontSize: '13px', color: '#fca5a5' }}>
              OyeCam is strictly not meant for anyone under 18 years of age. We do not knowingly collect personal data from children or minors.
            </p>
          </div>
          <p>
            If we discover or are notified that an individual under 18 has submitted data or created an account, we suspend the account immediately and permanently delete their data from our active systems, except where statutory Indian law mandates retention for law enforcement reporting (see our <button type="button" onClick={() => onNavigate('child-safety')} style={{ color: '#ff688a', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600 }}>Child Safety Policy</button>).
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2>6. How We Use Your Data</h2>
          <p>We process collected data exclusively for the following transparent purposes:</p>
          <div className="guideline-grid">
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}><Smartphone size={18} /></div>
              <h4>Core App Operations</h4>
              <p>To create and run your user account, manage user preferences, and connect real-time voice and video calls.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80' }}><CheckCircle2 size={18} /></div>
              <h4>Billing &amp; Payouts</h4>
              <p>To process coin wallet purchases, handle refund requests, and calculate creator host earnings and payouts.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}><ShieldAlert size={18} /></div>
              <h4>Safety &amp; Verification</h4>
              <p>To verify 18+ age and host identity, maintain platform integrity, and detect fraud, spam, abuse, or policy violations.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}><Scale size={18} /></div>
              <h4>Support &amp; Compliance</h4>
              <p>To provide customer support, resolve grievances, send essential service alerts, and fulfill statutory tax and legal duties.</p>
            </div>
          </div>
          <ul style={{ marginTop: '16px' }}>
            <li>To send service messages and, strictly with your explicit consent, promotional offers (from which you can opt out anytime).</li>
            <li>To analyze usage metrics in aggregated, anonymized form to improve app reliability, performance, and user experience.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2>7. Who We Share Data With</h2>
          <p>
            <strong>We never sell, rent, or trade your personal data.</strong> We share your information strictly with the following trusted entities:
          </p>
          <ul>
            <li>
              <strong>Authorized Service Providers:</strong> Trusted third-party vendors operating on our behalf under strict DPDP-compliant confidentiality contracts. These include cloud hosting infrastructure (AWS / Google Cloud), real-time WebRTC media routing providers, RBI-regulated payment gateways, automated KYC verification partners, and app crash analytics engines. They are legally barred from using data for any secondary purpose.
            </li>
            <li>
              <strong>Other Users:</strong> Your chosen public profile information (display name, avatar photo, age, spoken language, and bio) is visible to creators and users you interact with in the app.
            </li>
            <li>
              <strong>Government and Law Enforcement:</strong> Competent Indian law enforcement or regulatory agencies when required pursuant to a valid legal subpoena, court order, or statutory reporting obligation, including immediate escalation of child-safety violations.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of corporate assets involving CollabSkool Private Limited, your data will continue to be governed by the protections set forth in this Privacy Policy.
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section>
          <h2>8. Storage, Transfer and Security</h2>
          <p>
            Your data is stored on secure cloud servers situated within India. Where specialized global service providers operate infrastructure overseas, cross-border transfers are conducted strictly in compliance with the cross-border provisions of the DPDP Act, 2023.
          </p>
          <div className="security-badges-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', margin: '18px 0' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#72e8ae', fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>
                <Lock size={16} /> TLS In-Transit Encryption
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#aba2be' }}>All API interactions and communications are encrypted using modern TLS cryptographic protocols.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#c084fc', fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>
                <Server size={16} /> AES-256 At-Rest Encryption
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#aba2be' }}>Databases and backups are encrypted at rest with strict role-based access control (RBAC).</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>
                <ShieldCheck size={16} /> Security Reviews &amp; Audits
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#aba2be' }}>Routine penetration testing, vulnerability assessments, and automated threat monitoring.</p>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#c4b8d7' }}>
            <strong>Breach Notification Protocol:</strong> In the unlikely event of a personal data breach impacting your privacy, we will immediately inform affected users and notify the <strong>Data Protection Board of India</strong> in the manner mandated by law.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2>9. How Long We Keep Data</h2>
          <p>
            We retain your information strictly for the duration necessary to satisfy operational, safety, tax, and statutory legal requirements:
          </p>

          <div className="legal-table-wrapper" style={{ margin: '20px 0', overflowX: 'auto' }}>
            <table className="legal-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '240px' }}>Data Category</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '320px' }}>Kept For</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '170px' }}>Statutory Basis</th>
                </tr>
              </thead>
              <tbody>
                {retentionRows.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '14px 16px', color: '#ffffff', fontWeight: 600 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={14} color="#72e8ae" style={{ flexShrink: 0 }} />
                        {row.data}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', color: '#d8cfeb' }}>
                      {row.retention}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span className="refund-time-pill blue" style={{ fontSize: '11px' }}>
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 10 */}
        <section>
          <h2>10. Your Rights</h2>
          <p>
            Under the Digital Personal Data Protection Act, 2023 (DPDP Act), you possess enforceable legal rights regarding your personal data:
          </p>
          <ul>
            <li><strong>Right to Summary:</strong> You can obtain a clear summary of the personal data we hold about you and how it is processed.</li>
            <li><strong>Right to Correction &amp; Completion:</strong> You can request correction of inaccurate data, completion of incomplete records, or updates to your credentials.</li>
            <li><strong>Right to Erasure &amp; Deletion:</strong> You can request deletion of your personal data and account via <strong>Settings → Delete Account</strong> or through our <button type="button" onClick={() => onNavigate('delete-account')} style={{ color: '#ff688a', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600 }}>Delete Account Portal</button>.</li>
            <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent at any time in app settings.</li>
            <li><strong>Right of Nomination:</strong> You have the right to nominate another individual to exercise your privacy rights in case of death or incapacity.</li>
            <li><strong>Right to Grievance Redressal:</strong> You can raise grievances with our Grievance Officer, and if unsatisfied with the resolution, escalate the matter directly to the <strong>Data Protection Board of India</strong>.</li>
          </ul>
          <p style={{ marginTop: '14px', fontSize: '13px', color: '#cfc4e2' }}>
            To exercise any of these statutory rights, send an email to <a href="mailto:oyecam.com@gmail.com" style={{ color: '#ff7597', fontWeight: 600 }}>oyecam.com@gmail.com</a>. We respond within <strong>30 days</strong> or the timeline prescribed by applicable law.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h2>11. Cookies and Tracking</h2>
          <p>
            Our website and mobile applications utilize essential cookies, session storage tokens, and secure SDK identifiers to maintain active logins, ensure security defenses, and analyze traffic metrics.
          </p>
          <p>
            You can control advertising trackers and adjust device-level identifiers through your mobile operating system settings (Android Advertising ID or iOS App Tracking Transparency). For full details on cookies, please view our <button type="button" onClick={() => onNavigate('cookie-policy')} style={{ color: '#ff688a', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600 }}>Cookie Policy</button>.
          </p>
        </section>

        {/* Section 12 */}
        <section>
          <h2>12. Grievance Officer</h2>
          <p>
            As mandated under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the DPDP Act, 2023, our designated Grievance Officer details are published below:
          </p>

          <div className="contact-officer-card" style={{ 
            background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.08), rgba(20, 14, 32, 0.95))',
            border: '1px solid rgba(139, 92, 246, 0.28)',
            borderRadius: '20px',
            padding: '24px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'grid', placeItems: 'center', color: '#c084fc' }}>
                <Scale size={22} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>Govardhan Reddy</h3>
                <span style={{ fontSize: '12px', color: '#c4b5fd', fontWeight: 600 }}>Designated Grievance Officer · CollabSkool Private Limited</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', fontSize: '13px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Email</span>
                <a href="mailto:oyecam.com@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} color="#ff416c" /> oyecam.com@gmail.com
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Phone</span>
                <a href="tel:+919010187125" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} color="#72e8ae" /> +91 9010187125
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Operating Hours</span>
                <span style={{ color: '#fff', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} color="#60a5fa" /> 10:00 AM – 5:00 PM IST (Mon – Sat)
                </span>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Registered Office</span>
                <div style={{ color: '#d8cfeb', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <MapPin size={15} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097, India</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '18px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '14px', padding: '16px' }}>
            <h4 style={{ color: '#f87171', margin: '0 0 6px', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={15} /> Statutory Timelines for Grievance Resolution
            </h4>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#e5d7df', lineHeight: 1.7 }}>
              <li><strong>Acknowledgment:</strong> We formally acknowledge all privacy complaints within <strong>24 hours</strong>.</li>
              <li><strong>Resolution:</strong> All general grievances are fully resolved within <strong>15 days</strong>.</li>
              <li><strong>Emergency Expedited Removal:</strong> Requests concerning unauthorized depiction of nudity, sexual acts, or impersonation are acted upon and removed within <strong>24 hours</strong> of receipt under Rule 3(2)(b) of IT Rules, 2021.</li>
            </ul>
          </div>
        </section>

        {/* Section 13 */}
        <section>
          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory updates. We will notify you inside the app or by SMS/email before significant changes take effect. Continued use of OyeCam after the effective revision date constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Section 14 */}
        <section>
          <h2>14. Governing Law &amp; Jurisdiction</h2>
          <p>
            This Privacy Policy is governed by and construed in accordance with the laws of India, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000. Courts at <strong>Hyderabad, Telangana</strong> have exclusive jurisdiction over any disputes arising out of or related to this policy.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
