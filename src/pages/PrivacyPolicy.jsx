import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  ShieldCheck, Lock, EyeOff, UserCheck, Calendar, Mail, Phone, MapPin, 
  Scale, Clock, AlertCircle, Database, Server, UserX, FileText, 
  CheckCircle2, ShieldAlert, ArrowRight, Smartphone, Eye,
  Ban, AlertTriangle, ExternalLink
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
          <span className="legal-chip danger"><Ban size={14} /> Zero Tolerance: CSAE &amp; CSAM Prohibited</span>
          <span className="legal-chip"><ShieldCheck size={14} /> Mandatory 18+ Verification</span>
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

        {/* Section 5: Child Safety Standards & CSAE Prohibition */}
        <section id="child-safety-standards">
          <h2>5. Child Safety Standards &amp; Explicit Prohibition of Child Sexual Abuse and Exploitation (CSAE)</h2>
          
          <div className="legal-callout danger" style={{ marginBottom: '20px', borderColor: 'rgba(239, 68, 68, 0.45)', background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(20, 10, 26, 0.95))' }}>
            <strong style={{ color: '#fee2e2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '15px' }}>
              <ShieldAlert size={18} color="#ef4444" /> Published Child Safety Standards &amp; Zero-Tolerance Notice
            </strong>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#fecaca', lineHeight: 1.65 }}>
              These Child Safety Standards are published by <strong>CollabSkool Private Limited</strong> (CIN: <code>U73100TS2025PTC207613</code>), developer and operator of the <strong>OyeCam</strong> mobile application and services, as displayed on our Google Play store listing. 
              CollabSkool Private Limited maintains an absolute <strong>Zero-Tolerance Policy</strong> against any and all forms of <strong>Child Sexual Abuse and Exploitation (CSAE)</strong> and <strong>Child Sexual Abuse Material (CSAM)</strong> across OyeCam.
            </p>
          </div>

          <p>
            OyeCam is an exclusively <strong>18+ adult communication and video streaming platform</strong>. In compliance with Google Play Child Safety policies, the <strong>Protection of Children from Sexual Offences (POCSO) Act, 2012</strong>, the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, and international online child protection frameworks, we publish and enforce the following legally binding standards:
          </p>

          <h3 style={{ color: '#fff', fontSize: '16px', marginTop: '22px', marginBottom: '12px' }}>
            A. Strictly Prohibited CSAE Conduct and Content
          </h3>
          <p>
            The following activities, behaviors, and content are strictly prohibited on OyeCam under all circumstances. Engaging in, attempting, or facilitating any of the following constitutes a severe criminal violation resulting in immediate account termination, device banning, and direct statutory reporting:
          </p>

          <div className="guideline-grid">
            <div className="guideline-card danger">
              <div className="guideline-icon"><Ban size={18} /></div>
              <h4>Child Sexual Abuse &amp; Exploitation (CSAE)</h4>
              <p>Any sexual, romantic, suggestive, predatory, or exploitative interaction with, directed toward, or referencing any child or minor (anyone under 18 years of age).</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><ShieldAlert size={18} /></div>
              <h4>Child Sexual Abuse Material (CSAM)</h4>
              <p>The creation, production, transmission, distribution, uploading, soliciting, displaying, or facilitation of any CSAM in any format, whether actual, animated, drawn, or AI-generated.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><UserX size={18} /></div>
              <h4>Child Grooming &amp; Online Solicitation</h4>
              <p>Attempting to build rapport, communicate, or groom a minor for sexual abuse, soliciting private photos/videos, or attempting to migrate conversations to external channels.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><AlertTriangle size={18} /></div>
              <h4>Underage Sextortion &amp; Blackmail</h4>
              <p>Threatening, coercing, or blackmailing any individual using sexualized, intimate, or minor-related images, media, or private details.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><Lock size={18} /></div>
              <h4>Child Trafficking &amp; Endangerment</h4>
              <p>Using the platform to facilitate, promote, or coordinate child commercial sexual exploitation, illegal child labor, trafficking, or physical harm of any minor.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><EyeOff size={18} /></div>
              <h4>Simulated Minor Roleplay &amp; Presence</h4>
              <p>Accounts, avatars, or personas simulating or roleplaying underage sexual situations, or allowing any minor to appear in live video feeds, calls, or profile media.</p>
            </div>
          </div>

          <h3 style={{ color: '#fff', fontSize: '16px', marginTop: '26px', marginBottom: '12px' }}>
            B. Age Assurance &amp; Verification Safeguards
          </h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li><strong>Mandatory 18+ Barrier:</strong> OyeCam does not allow anyone under 18 to create an account, make calls, join streams, or act as a creator/host.</li>
            <li><strong>Automated Date of Birth Verification:</strong> Sign-up algorithms automatically reject and block any registration attempts where the user-provided birth date indicates an age below 18 years.</li>
            <li><strong>Mandatory Government ID Verification for Hosts:</strong> Before any host or creator can withdraw coins, wallet earnings, or payouts, they must complete strict identity and age verification (KYC) using official government IDs (Aadhaar / PAN / Passport). Failure or underage discovery results in immediate account banning and total forfeiture of earnings.</li>
            <li><strong>Active Human &amp; Algorithmic Moderation:</strong> Our moderation team actively audits user-reported interactions and flagged profiles to swiftly identify and eliminate any unauthorized underage access.</li>
          </ul>

          <h3 style={{ color: '#fff', fontSize: '16px', marginTop: '26px', marginBottom: '12px' }}>
            C. Reporting Channels &amp; 24-Hour Response SLA
          </h3>
          <p>
            We provide multiple always-available channels for users, parents, legal guardians, and the public to report child safety or CSAE concerns:
          </p>

          <div className="guideline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.16)', color: '#ef4444' }}><ShieldAlert size={18} /></div>
              <h4>In-App Instant Reporting</h4>
              <p>Tap the <strong>Report</strong> button on any active video/voice call screen, chat conversation, or user profile, and choose <strong>"Child Safety / CSAE"</strong> for priority review.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(168, 85, 247, 0.16)', color: '#c084fc' }}><Mail size={18} /></div>
              <h4>Dedicated Safety Email</h4>
              <p>Email: <a href="mailto:oyecam.com@gmail.com" style={{ color: '#ff7597', fontWeight: 600 }}>oyecam.com@gmail.com</a></p>
              <span style={{ fontSize: '11px', color: '#a79abf' }}>Monitored with highest priority</span>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(34, 197, 94, 0.16)', color: '#4ade80' }}><Phone size={18} /></div>
              <h4>Safety Helpline</h4>
              <p>Phone: <a href="tel:+919010187125" style={{ color: '#72e8ae', fontWeight: 600 }}>+91 90101 87125</a></p>
              <span style={{ fontSize: '11px', color: '#a79abf' }}>10:00 AM – 5:00 PM IST (Mon – Sat)</span>
            </div>
          </div>

          <p style={{ marginTop: '14px', fontSize: '13px', color: '#d8cfeb' }}>
            <strong>Response SLA:</strong> We formally acknowledge all Child Safety and CSAE complaints within <strong>24 hours</strong>. Emergency triage and containment measures commence immediately upon receipt.
          </p>

          <h3 style={{ color: '#fff', fontSize: '16px', marginTop: '26px', marginBottom: '12px' }}>
            D. Enforcement Actions &amp; Law Enforcement Reporting
          </h3>
          <p>Upon verifying any CSAE incident or credible threat of child endangerment, CollabSkool Private Limited immediately executes:</p>
          <ul style={{ lineHeight: 1.8 }}>
            <li><strong>Immediate Account &amp; Device Blacklist:</strong> Instant termination of the offending account and permanent hardware device hash banning.</li>
            <li><strong>Forfeiture of In-App Assets:</strong> Complete and irreversible forfeiture of all coins, gifts, and accrued host earnings.</li>
            <li><strong>Statutory Evidence Preservation:</strong> Retention and secure isolation of logs, IP addresses, timestamps, and communications strictly for criminal prosecution as required by Indian cyber regulations.</li>
            <li><strong>Mandatory POCSO Act Section 19 Reporting:</strong> Immediate reporting to local police authorities or the Special Juvenile Police Unit (SJPU) under Section 19 of the POCSO Act, 2012.</li>
            <li><strong>National Cyber Crime &amp; NCMEC Escalation:</strong> Direct statutory filing with the Indian National Cyber Crime Reporting Portal (<a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#72e8ae' }}>cybercrime.gov.in</a>) and referral to the National Center for Missing &amp; Exploited Children (NCMEC).</li>
          </ul>

          <h3 style={{ color: '#fff', fontSize: '16px', marginTop: '26px', marginBottom: '12px' }}>
            E. Designated Child Safety Point of Contact &amp; Response Team
          </h3>
          <p>
            In compliance with Google Play Child Safety Standards declaration requirements and Indian Information Technology regulations, CollabSkool Private Limited has appointed a designated Child Safety Officer and team:
          </p>

          <div className="contact-officer-card" style={{ 
            background: 'linear-gradient(145deg, rgba(255, 65, 108, 0.09), rgba(20, 14, 32, 0.96))',
            border: '1px solid rgba(255, 65, 108, 0.35)',
            borderRadius: '20px',
            padding: '24px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 65, 108, 0.16)', display: 'grid', placeItems: 'center', color: '#ff416c' }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>Govardhan Reddy</h4>
                <span style={{ fontSize: '12px', color: '#ff94b0', fontWeight: 600 }}>
                  Designated Child Safety Officer &amp; Nodal Officer · CollabSkool Private Limited (OyeCam)
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', fontSize: '13px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Child Safety Email</span>
                <a href="mailto:oyecam.com@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} color="#ff416c" /> oyecam.com@gmail.com
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Child Safety Phone</span>
                <a href="tel:+919010187125" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} color="#72e8ae" /> +91 9010187125
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Developer Organization</span>
                <span style={{ color: '#fff', fontWeight: 500 }}>CollabSkool Private Limited (CIN: U73100TS2025PTC207613)</span>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Application Listing</span>
                <span style={{ color: '#fff', fontWeight: 500 }}>OyeCam (Google Play Store)</span>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Registered Office Address</span>
                <div style={{ color: '#d8cfeb', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <MapPin size={15} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097, India</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: '20px', 
            padding: '18px 20px', 
            borderRadius: '16px', 
            background: 'rgba(255, 65, 108, 0.07)', 
            border: '1px solid rgba(255, 65, 108, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px'
          }}>
            <div>
              <strong style={{ color: '#fff', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                Dedicated Standalone Child Safety Standards Documentation
              </strong>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#cfc4e2' }}>
                You may also access our dedicated, publicly accessible, standalone Child Safety Policy web resource.
              </p>
            </div>
            <button 
              type="button" 
              onClick={() => onNavigate('child-safety')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
            >
              <span>View Standalone Child Safety Policy</span>
              <ArrowRight size={14} />
            </button>
          </div>
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
