import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  HeartHandshake, ShieldAlert, Video, EyeOff, Ban, AlertTriangle, 
  Sparkles, CheckCircle2, UserCheck, Flag, ShieldCheck 
} from 'lucide-react';

export default function CommunityGuidelines({ onNavigate }) {
  return (
    <LegalLayout activePage="community-guidelines" onNavigate={onNavigate}>
      <div className="legal-hero">
        <div className="legal-badge">
          <HeartHandshake size={14} /> Community Standards
        </div>
        <h1>oyecam Community <span className="gradient-text">Guidelines</span></h1>
        <div className="legal-meta">
          <span>Effective Date: October 10, 2026</span>
          <span>•</span>
          <span>Version 3.1</span>
          <span>•</span>
          <span>Commitment to User Safety</span>
        </div>
        <div className="legal-chips-row">
          <span className="legal-chip"><ShieldCheck size={14} /> 100% Verified Interactions</span>
          <span className="legal-chip"><Ban size={14} /> Zero-Tolerance Harassment Policy</span>
          <span className="legal-chip"><Video size={14} /> Private Streams Never Recorded</span>
        </div>
      </div>

      <article className="legal-article">
        <div className="legal-summary-card">
          <h3><Sparkles size={18} /> Our Golden Rule: Keep It Real, Keep It Respectful</h3>
          <p>
            <strong>oyecam</strong> is built for genuine human connection — spontaneous video sparks, authentic conversations, 
            and vibrant live rooms. We treat every creator and participant with respect. To maintain a safe, welcoming, and 
            positive space for all 500,000+ members, every user must adhere strictly to these Community Guidelines.
          </p>
        </div>

        <section>
          <h2>1. Strict Age Requirement (18+ Only)</h2>
          <p>
            oyecam is exclusively for adults aged <strong>18 years or older</strong>. 
            We enforce strict age verification algorithms. Any account found to belong to, depict, or facilitate interaction 
            with a minor will be immediately and permanently banned, with zero appeal and instant reporting to Indian 
            and international child safety authorities.
          </p>
        </section>

        <section>
          <h2>2. Zero-Tolerance Violations</h2>
          <p>
            Engaging in any of the following activities will result in an <strong>immediate permanent ban</strong> and potential legal referral:
          </p>
          <div className="guideline-grid">
            <div className="guideline-card danger">
              <div className="guideline-icon"><Ban size={18} /></div>
              <h4>Harassment & Bullying</h4>
              <p>Stalking, targeted insults, blackmail, doxxing personal numbers or addresses, or non-stop unsolicited contact after being told to stop.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><ShieldAlert size={18} /></div>
              <h4>Non-Consensual Recording</h4>
              <p>Taking screenshots, recording screens, or distributing private 1-on-1 video calls or chats without explicit mutual written consent.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><EyeOff size={18} /></div>
              <h4>Explicit Nudity & Sexual Violence</h4>
              <p>Broadcasting unsolicited explicit sexual acts, non-consensual imagery, prostitution solicitations, or sexually predatory behavior.</p>
            </div>

            <div className="guideline-card danger">
              <div className="guideline-icon"><AlertTriangle size={18} /></div>
              <h4>Hate Speech & Discrimination</h4>
              <p>Attacking, demeaning, or promoting violence against individuals based on religion, caste, gender, sexual orientation, disability, or ethnicity.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>3. Live Streaming & 1-on-1 Video Call Etiquette</h2>
          <p>
            Whether hosting an open room or having a spontaneous one-on-one call:
          </p>
          <ul>
            <li><strong>Consent is Non-Negotiable:</strong> Both parties have full autonomy to disconnect at any time. Respect boundaries immediately without hostility.</li>
            <li><strong>Room Host Responsibility:</strong> Hosts are responsible for maintaining order in their live rooms. Use host moderation controls to mute or remove disruptors.</li>
            <li><strong>No Dangerous or Illegal Acts:</strong> Do not broadcast self-harm, drug abuse, weapons, drunk driving, or any unlawful acts under Indian law.</li>
            <li><strong>Authentic Profiles:</strong> Use your own photos and real voice. Impersonating public figures, other members, or staff members is forbidden.</li>
          </ul>
        </section>

        <section>
          <h2>4. Virtual Coin & Gifting Integrity</h2>
          <p>
            oyecam features virtual coins and animated gifts to support creators:
          </p>
          <ul>
            <li>Coins and gifts must be acquired only through official in-app purchasing channels.</li>
            <li>Trading coins for real-world fiat currency outside the app, extortion for gifts, or running unauthorized coin raffles is prohibited.</li>
            <li>Any accounts associated with fraudulent payments, stolen credit cards, or unauthorized chargebacks will be frozen immediately.</li>
          </ul>
        </section>

        <section>
          <h2>5. How We Protect the Community</h2>
          <div className="safety-system-box">
            <div className="safety-system-step">
              <div className="step-badge-circle"><CheckCircle2 size={16} /></div>
              <div>
                <strong>AI-Powered Real-Time Detection:</strong>
                <span>Automated models scan video streams for detected nudity, weapons, or hate symbols with an instant blur kill-switch.</span>
              </div>
            </div>

            <div className="safety-system-step">
              <div className="step-badge-circle"><UserCheck size={16} /></div>
              <div>
                <strong>24/7 Human Moderation Team:</strong>
                <span>Trained safety personnel review flagged streams, escalated reports, and user grievances around the clock.</span>
              </div>
            </div>

            <div className="safety-system-step">
              <div className="step-badge-circle"><Flag size={16} /></div>
              <div>
                <strong>Instant User Reporting & In-Call Blocking:</strong>
                <span>Every user can tap the shield/flag icon in any call to immediately disconnect, block, and file an incident report.</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>6. Enforcement & Penalty Hierarchy</h2>
          <p>
            Depending on the severity and frequency of the violation, oyecam enforces the following measures:
          </p>
          <ul>
            <li><strong>Warning & Content Removal:</strong> For minor initial violations with reminder of community rules.</li>
            <li><strong>Temporary Suspension:</strong> Account restricted from video calls or live rooms for 24 hours to 7 days.</li>
            <li><strong>Permanent Account & Device Ban:</strong> Immediate termination of account, forfeiture of remaining coin balances, and hardware-level blacklist preventing re-registration.</li>
            <li><strong>Legal Prosecution:</strong> Serious offenses (threats to life, extortion, illegal narcotics, child safety violations) are immediately handed over to Indian cyber crime authorities under the IT Act and IPC.</li>
          </ul>
        </section>

        <section>
          <h2>7. Reporting & Trust & Safety Contacts</h2>
          <p>
            If you witness any behavior violating these guidelines or feel uncomfortable at any point, reach out directly:
          </p>
          <div className="officer-card">
            <div className="officer-item">
              <strong>Emergency Safety Escalation</strong>
              <a href="mailto:safety@oyecam.com">safety@oyecam.com</a>
            </div>
            <div className="officer-item">
              <strong>Support Helpline</strong>
              <a href="tel:+919010187125">+91 90101 87125</a>
            </div>
            <div className="officer-item">
              <strong>Grievance Officer</strong>
              <a href="mailto:grievance@oyecam.com">grievance@oyecam.com</a>
            </div>
            <div className="officer-item">
              <strong>Registered Office</strong>
              <span>1-41 Vivek Nagar Colony, Jillelaguda, Pincode - 500097, Telangana, India</span>
            </div>
          </div>
        </section>
      </article>
    </LegalLayout>
  );
}
