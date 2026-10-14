import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  ShieldAlert, ShieldCheck, Ban, AlertTriangle, Eye, Lock, 
  Phone, Mail, MapPin, ExternalLink, UserX, CheckCircle2, 
  Clock, HeartHandshake, FileCheck, Scale 
} from 'lucide-react';

export default function ChildSafetyPolicy({ onNavigate }) {
  return (
    <LegalLayout activePage="child-safety" onNavigate={onNavigate}>
      {/* Legal Hero Banner */}
      <div className="legal-hero">
        <div className="legal-badge danger-badge">
          <ShieldAlert size={14} /> Zero Tolerance · POCSO Act & Global Compliance
        </div>
        <h1>OyeCam – <span className="gradient-text">Child Safety Policy</span></h1>
        <div className="legal-meta">
          <span>CollabSkool Private Limited (CIN: U73100TS2025PTC207613)</span>
          <span>•</span>
          <span>Effective: 15 October 2026</span>
          <span>•</span>
          <span>Mandatory 18+ Platform</span>
        </div>
        <div className="legal-chips-row">
          <span className="legal-chip danger"><Ban size={14} /> Zero Tolerance for CSAM / Exploitation</span>
          <span className="legal-chip"><ShieldCheck size={14} /> Mandatory Govt ID Verification for Hosts</span>
          <span className="legal-chip"><Scale size={14} /> Mandatory POCSO Act Sec 19 Reporting</span>
        </div>
      </div>

      <article className="legal-article">
        {/* Core Summary Callout */}
        <div className="legal-summary-card" style={{ borderColor: 'rgba(255, 65, 108, 0.4)', background: 'linear-gradient(145deg, rgba(255, 65, 108, 0.08), rgba(20, 10, 26, 0.9))' }}>
          <h3 style={{ color: '#ff6b8b' }}><ShieldAlert size={19} /> Strict Zero-Tolerance Notice</h3>
          <p>
            This Child Safety Policy applies to <strong>OyeCam</strong>, a video and voice calling app owned and operated by <strong>CollabSkool Private Limited</strong> (CIN: U73100TS2025PTC207613). 
            "OyeCam", "we", "us" and "our" mean CollabSkool Private Limited. "You" and "User" mean anyone who uses the app, including callers and hosts/creators.
          </p>
          <p style={{ marginTop: '10px' }}>
            <strong>OyeCam is strictly for adults aged 18 and above only.</strong> We enforce zero tolerance for any content or behaviour that sexualises, exploits, grooms, or endangers a child. 
            Any violation leads to an <strong>immediate permanent ban, device blacklisting, forfeiture of earnings, and prompt reporting to law enforcement authorities</strong>.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2>1. Age Requirement</h2>
          <p>
            OyeCam is designed exclusively for mature adult interactions. We enforce unequivocal age barriers:
          </p>
          <ul>
            <li><strong>18+ Age Limit:</strong> You must be at least 18 years old to create an account, make calls, receive calls, or act as a host on OyeCam.</li>
            <li><strong>Immediate Suspension:</strong> We do not knowingly allow anyone under 18 on OyeCam. If we learn or suspect a user is under 18, we suspend the account immediately and delete their data, except where applicable laws or statutory holds require us to preserve it for law enforcement.</li>
            <li><strong>Host Onboarding &amp; Date of Birth Declaration:</strong> Hosts/creators must confirm they are 18 or older by entering their verified date of birth when they sign up as a host.</li>
            <li><strong>Mandatory Government ID Verification:</strong> Before any host or creator can withdraw any earnings or wallet balance, they must complete full age and identity verification (KYC) using a valid government-issued ID such as Aadhaar (offline e-KYC), PAN card, or passport. Earnings stay strictly locked until verification succeeds. Accounts that fail verification or attempt to impersonate age are permanently banned with all earnings forfeited.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2>2. Age Assurance Measures</h2>
          <p>
            We implement comprehensive preventative safeguards to detect and deter underage access across our platform:
          </p>
          <div className="guideline-grid">
            <div className="guideline-card">
              <div className="guideline-icon"><Lock size={18} /></div>
              <h4>Automated DOB Sign-Up Block</h4>
              <p>Automated validation blocking any registration where entered date of birth calculates an age under 18 years.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon"><FileCheck size={18} /></div>
              <h4>Mandatory ID-Based KYC</h4>
              <p>Strict government ID authentication (Aadhaar / PAN / Passport) required before any monetary withdrawal.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon"><Eye size={18} /></div>
              <h4>Random Profile Audits</h4>
              <p>Manual proactive checks by our safety team; immediate ID proof requested from any account suspected of belonging to a minor.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon"><ShieldCheck size={18} /></div>
              <h4>Specialized Moderator Training</h4>
              <p>Moderators are trained to identify visual cues of minors (appearance, school uniforms, age statements), instantly terminate the call, and flag the account.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2>3. Prohibited Content and Conduct</h2>
          <p>
            The following content and behaviours are strictly prohibited on OyeCam without exception and will be reported directly to law enforcement:
          </p>
          <div className="guideline-grid">
            <div className="guideline-card danger">
              <div className="guideline-icon"><Ban size={18} /></div>
              <h4>Child Sexual Abuse Material (CSAM)</h4>
              <p>Any production, possession, transmission, or facilitation of CSAM or CSAM-adjacent material in any form, including real, drawn, AI-generated, animated, or edited images and videos.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><AlertTriangle size={18} /></div>
              <h4>Sexual / Romantic Interaction with Minors</h4>
              <p>Any sexual, romantic, suggestive, or exploitative interaction with, directed toward, or referencing a minor or person appearing to be under 18.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><UserX size={18} /></div>
              <h4>Child Grooming &amp; Exploitation</h4>
              <p>Building trust with a minor to exploit or sexually solicit them, including requesting personal contact details, private photos, or attempting to move them to external apps.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><ShieldAlert size={18} /></div>
              <h4>Trafficking &amp; Harm Facilitation</h4>
              <p>Using OyeCam to arrange offline meetings with minors, traffic children, facilitate child labour, or promote physical or emotional abuse of any minor.</p>
            </div>
          </div>
          <ul style={{ marginTop: '16px' }}>
            <li><strong>Advertising &amp; Solicitation:</strong> Sharing, requesting, linking to, or advertising any material involving minors in a sexual context.</li>
            <li><strong>Underage Role-Play:</strong> Role-play, sexualized cosplay, or user profiles that present, simulate, or imply a user is a minor in a sexual or romantic setting.</li>
            <li><strong>Child On-Camera Presence:</strong> Allowing a child or minor to appear on camera during video calls or live streams, even incidentally or in the background, in any inappropriate or non-permitted context.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2>4. How We Detect and Moderate</h2>
          <p>
            OyeCam deploys multi-tiered human and automated detection systems to safeguard our ecosystem:
          </p>
          <ul>
            <li><strong>Manual Media Review:</strong> Manual inspection of creator profile photos, display media, and uploads by our safety moderation team before or shortly after they go live.</li>
            <li><strong>Dedicated Moderation Operating Hours:</strong> Our moderation team actively operates from <strong>10:00 AM to 5:00 PM IST</strong>. Child safety reports receive topmost priority and are processed first. Any report received outside operating hours is reviewed as priority one at the start of the next business day.</li>
            <li><strong>Grooming Pattern Analysis:</strong> Continuous algorithmic and manual pattern analysis of flagged chats, messages, and accounts to uncover grooming or predator behaviours.</li>
            <li><strong>Universal In-Call Report Button:</strong> Every live video and voice call screen features an always-visible, one-tap in-call <strong>Report</strong> button allowing participants to report misconduct and terminate the call instantaneously.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2>5. Reporting a Concern</h2>
          <p>
            Anyone — including registered users, non-users, parents, guardians, and concerned citizens — can report a child safety concern through multiple direct channels:
          </p>
          <div className="guideline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(255, 65, 108, 0.15)', color: '#ff416c' }}><ShieldAlert size={18} /></div>
              <h4>In-App Instant Reporting</h4>
              <p>Tap <strong>Report</strong> on any user profile, chat thread, or active call screen, and select <strong>"Child safety"</strong>.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa' }}><Mail size={18} /></div>
              <h4>Direct Email Channel</h4>
              <p>Email: <a href="mailto:oyecam.com@gmail.com" style={{ color: '#ff7597', fontWeight: 600 }}>oyecam.com@gmail.com</a></p>
              <span style={{ fontSize: '11px', color: '#8f83a8' }}>Monitored 10:00 AM – 5:00 PM IST</span>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(114, 232, 174, 0.15)', color: '#72e8ae' }}><Phone size={18} /></div>
              <h4>Helpline Phone</h4>
              <p>Phone: <a href="tel:+919010187125" style={{ color: '#72e8ae', fontWeight: 600 }}>+91 90101 87125</a></p>
              <span style={{ fontSize: '11px', color: '#8f83a8' }}>Monitored 10:00 AM – 5:00 PM IST</span>
            </div>
          </div>
          <p style={{ marginTop: '16px' }}>
            <strong>Response SLA:</strong> We formally acknowledge all child-safety reports within <strong>24 hours</strong> and triage them with maximum urgency.
          </p>
          
          <div className="legal-summary-card" style={{ marginTop: '18px', background: 'rgba(17, 12, 28, 0.85)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontSize: '14px', marginBottom: '8px' }}>
              <ExternalLink size={16} color="#72e8ae" /> External Law Enforcement &amp; Emergency Helplines
            </h4>
            <p style={{ fontSize: '13px' }}>
              You may also report child endangerment or cyber incidents directly to Indian statutory authorities:
            </p>
            <ul style={{ marginTop: '8px', fontSize: '12.5px' }}>
              <li><strong>National Cyber Crime Reporting Portal:</strong> <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#72e8ae' }}>cybercrime.gov.in</a></li>
              <li><strong>National Cyber Crime Helpline:</strong> Dial <strong>1930</strong> (Toll-free across India)</li>
              <li><strong>National Child Helpline (Childline):</strong> Dial <strong>1098</strong> (24/7 emergency toll-free service for children in distress)</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <h2>6. Action We Take</h2>
          <p>
            Upon confirming or receiving credible indicators of a child safety violation, OyeCam takes decisive, non-negotiable action:
          </p>
          <ul>
            <li><strong>Immediate Content &amp; Account Termination:</strong> Instant removal of all associated content, permanent ban of the offending account, and permanent device hardware hash blacklisting.</li>
            <li><strong>Statutory Evidence Preservation:</strong> Preservation of account logs, registration IP addresses, timestamps, device identifiers, and relevant communication records in compliance with Indian law.</li>
            <li><strong>Mandatory POCSO Act Section 19 Reporting:</strong> Prompt reporting to local police authorities or the Special Juvenile Police Unit (SJPU) as strictly mandated under Section 19 of the Protection of Children from Sexual Offences (POCSO) Act, 2012.</li>
            <li><strong>Cybercrime Portal &amp; NCMEC Escalation:</strong> Mandatory reporting to the Indian National Cyber Crime Reporting Portal and to the National Center for Missing &amp; Exploited Children (NCMEC) where applicable.</li>
            <li><strong>Law Enforcement Cooperation:</strong> Complete, transparent cooperation with law enforcement agencies and judicial requests made under applicable legal processes.</li>
            <li><strong>Forfeiture of Wallet Balances:</strong> Immediate and irreversible forfeiture of all coins, gifts, pending earnings, and wallet balances associated with the banned account, subject to law.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2>7. Host Responsibilities</h2>
          <p>
            Hosts and creators on OyeCam carry an affirmative duty of vigilance and platform protection:
          </p>
          <ul>
            <li><strong>Minor-Free Streams:</strong> Hosts must ensure that no minor is visible, audible, or present during their live streams or 1-on-1 calls.</li>
            <li><strong>Mandatory Call Termination:</strong> Hosts must immediately terminate any call if the other participant appears to be or claims to be under 18 years of age.</li>
            <li><strong>Immediate In-App Flagging:</strong> Hosts must submit an instant "Child safety" report through the in-call reporting interface.</li>
            <li><strong>Consequence of Host Inaction:</strong> Any host who fails to terminate an underage call, encourages minor participation, or fails to report child endangerment will immediately lose their host status, have their account banned, and face potential statutory liability.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section>
          <h2>8. Child Safety Point of Contact (Nodal Officer)</h2>
          <p>
            In accordance with Indian Information Technology regulations and our child protection commitment, OyeCam has appointed a designated Child Safety Officer:
          </p>

          <div className="contact-officer-card" style={{ 
            background: 'linear-gradient(145deg, rgba(255, 65, 108, 0.08), rgba(20, 14, 32, 0.95))',
            border: '1px solid rgba(255, 65, 108, 0.3)',
            borderRadius: '20px',
            padding: '24px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 65, 108, 0.15)', display: 'grid', placeItems: 'center', color: '#ff416c' }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>Govardhan Reddy</h3>
                <span style={{ fontSize: '12px', color: '#ff94b0', fontWeight: 600 }}>Designated Child Safety Officer · CollabSkool Private Limited</span>
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

              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Registered Office Address</span>
                <div style={{ color: '#d8cfeb', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <MapPin size={15} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097, India</span>
                </div>
              </div>
            </div>
          </div>

          <p style={{ marginTop: '24px', fontSize: '12px', color: '#8f83a8' }}>
            <strong>Policy Review Cycle:</strong> CollabSkool Private Limited reviews and updates this Child Safety Policy at least once every calendar year, or sooner if required by changes in applicable statutes, technology standards, or regulatory directives.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
