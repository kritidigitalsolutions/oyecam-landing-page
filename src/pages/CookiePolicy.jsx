import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { Cookie, ShieldCheck, Lock, ToggleRight, Info, CheckCircle2, Phone, MapPin, Mail } from 'lucide-react';

export default function CookiePolicy({ onNavigate }) {
  return (
    <LegalLayout activePage="cookie-policy" onNavigate={onNavigate}>
      <div className="legal-hero">
        <div className="legal-badge">
          <Cookie size={14} /> Official Policy
        </div>
        <h1>Cookie & Tracking Technologies <span className="gradient-text">Policy</span></h1>
        <div className="legal-meta">
          <span>Effective Date: October 10, 2026</span>
          <span>•</span>
          <span>Version 2.4</span>
          <span>•</span>
          <span>Applicable to: Web & Mobile Web</span>
        </div>
        <div className="legal-chips-row">
          <span className="legal-chip"><ShieldCheck size={14} /> Zero Cross-Site Ad Tracking</span>
          <span className="legal-chip"><Lock size={14} /> Encrypted Session Storage</span>
          <span className="legal-chip"><ToggleRight size={14} /> Full User Cookie Control</span>
        </div>
      </div>

      <article className="legal-article">
        <div className="legal-summary-card">
          <h3><Info size={18} /> Quick Summary of Our Cookie Principles</h3>
          <p>
            At <strong>oyecam</strong>, we value your privacy above all else. We do <strong>NOT</strong> sell your personal data, 
            nor do we use invasive third-party advertising cookies that track you across other websites. 
            We only use essential session tokens, WebRTC media preferences, and anonymized performance metrics to ensure 
            your video calls and live rooms connect seamlessly.
          </p>
        </div>

        <section>
          <h2>1. What Are Cookies and Local Storage?</h2>
          <p>
            Cookies are small text files placed on your device (computer, tablet, or smartphone) by websites that you visit. 
            They are widely used to make websites work properly, provide secure user logins, and remember user preferences.
          </p>
          <p>
            In addition to cookies, oyecam uses modern web storage technologies such as <code>localStorage</code>, <code>sessionStorage</code>, 
            and encrypted authentication tokens to maintain WebRTC peer-to-peer video connection states without interrupting your active calls.
          </p>
        </section>

        <section>
          <h2>2. How oyecam Uses Cookies</h2>
          <p>
            We use cookies and client-side storage technologies for specific, lawful purposes:
          </p>
          <ul>
            <li><strong>Authentication & Security:</strong> Verifying your identity when you log in and protecting your account from unauthorized access or cross-site request forgery (CSRF).</li>
            <li><strong>Media & Connection State:</strong> Storing temporary WebRTC ICE candidate tokens, camera/microphone selections, and volume states during video calls.</li>
            <li><strong>User Preferences:</strong> Remembering your selected display language, dark mode preference, and notification settings.</li>
            <li><strong>Crash & Performance Diagnostics:</strong> Measuring call connection latency, packet drops, and app responsiveness to continuously optimize stream stability.</li>
          </ul>
        </section>

        <section>
          <h2>3. Categories of Cookies We Use</h2>
          
          <div className="cookie-category-box">
            <div className="category-title">
              <CheckCircle2 size={16} color="#70e5b0" />
              <h4>A. Strictly Necessary / Essential Cookies</h4>
              <span className="category-status required">Always Active</span>
            </div>
            <p>
              These cookies are indispensable for our service to function. Without them, secure authentication, 
              account session management, and encrypted video signaling cannot be provided.
            </p>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>__oye_session</code></td>
                    <td>Maintains active signed-in session securely</td>
                    <td>Session / 30 Days</td>
                  </tr>
                  <tr>
                    <td><code>__oye_csrf_token</code></td>
                    <td>Prevents cross-site request forgery attacks</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><code>__oye_auth_state</code></td>
                    <td>Validates multi-factor authentication handshake</td>
                    <td>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cookie-category-box">
            <div className="category-title">
              <CheckCircle2 size={16} color="#c084fc" />
              <h4>B. Functional & Media Preference Cookies</h4>
              <span className="category-status">Functional</span>
            </div>
            <p>
              These store your personalized settings so you don't have to reconfigure them every time you join a call or live stream room.
            </p>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>__oye_lang</code></td>
                    <td>Stores your selected language preference (e.g., Hindi, English, Tamil)</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td><code>__oye_media_devices</code></td>
                    <td>Remembers chosen microphone and camera input device IDs</td>
                    <td>6 Months</td>
                  </tr>
                  <tr>
                    <td><code>__oye_volume_pref</code></td>
                    <td>Stores your preferred audio output and stream volume level</td>
                    <td>6 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cookie-category-box">
            <div className="category-title">
              <CheckCircle2 size={16} color="#60a5fa" />
              <h4>C. Performance & Telemetry Diagnostics</h4>
              <span className="category-status">Optional</span>
            </div>
            <p>
              Anonymized telemetry tokens that collect aggregated statistics on network jitter, video bitrate adaptation, 
              and server latency. They do NOT contain your name, phone number, or private communications.
            </p>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>__oye_telemetry_id</code></td>
                    <td>Anonymized network diagnostic session identifier</td>
                    <td>7 Days</td>
                  </tr>
                  <tr>
                    <td><code>__oye_perf_stats</code></td>
                    <td>Measures WebRTC video frame rendering latency</td>
                    <td>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2>4. Third-Party Tracking & Advertising Disclosure</h2>
          <p>
            <strong>oyecam maintains a strict zero-ad-tracking policy:</strong>
          </p>
          <ul>
            <li>We do <strong>NOT</strong> allow external ad networks to place tracking pixels, retargeting beacons, or behavioral cookies on our platform.</li>
            <li>We do <strong>NOT</strong> sell, rent, or trade your cookie data, browsing habits, or profile metadata to data brokers.</li>
            <li>Third-party services we utilize are strictly infrastructure providers (e.g., cloud hosting, WebRTC TURN/STUN relays, SMS OTP providers) governed by strict confidentiality and data protection agreements.</li>
          </ul>
        </section>

        <section>
          <h2>5. How You Can Manage or Disable Cookies</h2>
          <p>
            You have full control over cookie storage on your devices. You can configure your browser settings to reject 
            or delete cookies at any time:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies &gt; Clear browsing data.</li>
            <li><strong>Apple Safari:</strong> Settings &gt; Safari &gt; Advanced &gt; Privacy &gt; Block All Cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data &gt; Clear Data.</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
          </ul>
          <p>
            <em>Please note:</em> If you completely disable strictly necessary cookies, key features of oyecam (such as staying logged in or connecting to video streams) will not work properly.
          </p>
        </section>

        <section>
          <h2>6. Compliance with Indian DPDP Act 2023 & Global Standards</h2>
          <p>
            In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the 
            <strong>Information Technology Act, 2000</strong>, oyecam processes all client storage data with your explicit consent 
            and provides clear mechanisms to revoke permissions and purge stored data.
          </p>
        </section>

        <section>
          <h2>7. Questions & Contact Information</h2>
          <p>
            If you have questions regarding this Cookie Policy or how we handle client-side storage, please contact our team:
          </p>
          <div className="officer-card">
            <div className="officer-item">
              <strong>Privacy & Compliance Desk</strong>
              <a href="mailto:privacy@oyecam.com">privacy@oyecam.com</a>
            </div>
            <div className="officer-item">
              <strong>Direct Support Helpline</strong>
              <a href="tel:+919010187125">+91 90101 87125</a>
            </div>
            <div className="officer-item">
              <strong>General Inquiries</strong>
              <a href="mailto:support@oyecam.com">support@oyecam.com</a>
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
