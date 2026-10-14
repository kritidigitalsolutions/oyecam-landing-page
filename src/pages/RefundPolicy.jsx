import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  Receipt, Clock, RefreshCw, AlertCircle, CheckCircle2, XCircle, 
  HelpCircle, Mail, Phone, MapPin, Scale, ShieldAlert, ArrowRight, 
  Coins, Smartphone, ShieldCheck 
} from 'lucide-react';

export default function RefundPolicy({ onNavigate }) {
  const eligibleSituations = [
    {
      situation: 'Money debited but coins not credited',
      refund: 'Full refund or coins credited',
      timeLimit: '7 days',
      badgeColor: 'blue'
    },
    {
      situation: 'Duplicate or double charge',
      refund: 'Full refund of the extra charge',
      timeLimit: '7 days',
      badgeColor: 'blue'
    },
    {
      situation: 'Unused coins bought by mistake',
      refund: 'Full refund of unused coins',
      timeLimit: '48 hours of purchase',
      badgeColor: 'orange'
    },
    {
      situation: 'Call dropped or failed due to an OyeCam technical fault',
      refund: 'Coins for the lost minutes returned to wallet',
      timeLimit: '72 hours',
      badgeColor: 'purple'
    },
    {
      situation: 'Host did not join, or left within the first 30 seconds',
      refund: 'Coins for that call returned to wallet',
      timeLimit: '72 hours',
      badgeColor: 'purple'
    },
    {
      situation: 'Host violated Community Guidelines during the call (verified)',
      refund: 'Coins for that call returned to wallet',
      timeLimit: '72 hours',
      badgeColor: 'purple'
    },
    {
      situation: 'Unauthorised transaction on your payment method',
      refund: 'Investigated; refunded if confirmed',
      timeLimit: 'Immediately',
      badgeColor: 'red'
    }
  ];

  return (
    <LegalLayout activePage="refund-policy" onNavigate={onNavigate}>
      {/* Legal Hero Banner */}
      <div className="legal-hero">
        <div className="legal-badge">
          <Receipt size={14} /> Transparent Payments &amp; Fair Billing
        </div>
        <h1>OyeCam – <span className="gradient-text">Refund Policy</span></h1>
        <div className="legal-meta">
          <span>CollabSkool Private Limited (CIN: U73100TS2025PTC207613)</span>
          <span>•</span>
          <span>Effective: 15 October 2026</span>
          <span>•</span>
          <span>Governed by Laws of India (Hyderabad Jurisdiction)</span>
        </div>
        <div className="legal-chips-row">
          <span className="legal-chip"><RefreshCw size={14} /> Failed Payment Guarantees</span>
          <span className="legal-chip"><Clock size={14} /> 24-Hour SLA Acknowledgment</span>
          <span className="legal-chip"><Coins size={14} /> Wallet &amp; Source Reversal Protocols</span>
        </div>
      </div>

      <article className="legal-article">
        {/* Core Summary Callout */}
        <div className="legal-summary-card">
          <h3><Receipt size={18} /> Our Commitment to Fair Billing</h3>
          <p>
            This Refund Policy applies to <strong>OyeCam</strong>, a video and voice calling app owned and operated by <strong>CollabSkool Private Limited</strong> (CIN: U73100TS2025PTC207613). 
            "OyeCam", "we", "us" and "our" mean CollabSkool Private Limited. "You" and "User" mean anyone who uses the app, including callers and hosts/creators. Effective date: <strong>15 October 2026</strong>.
          </p>
          <p style={{ marginTop: '10px' }}>
            Coins and call minutes bought on OyeCam are generally non-refundable once used, but we refund failed payments, unused purchases reported within 7 days, and calls that fail because of a fault on our side.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2>1. What You Buy</h2>
          <p>
            OyeCam provides a platform for real-time live social interactions:
          </p>
          <ul>
            <li><strong>Virtual Coins:</strong> OyeCam sells virtual coins that you use to make paid video and voice calls, send animated gifts to creators, or unlock special features.</li>
            <li><strong>No Cash Value:</strong> Coins have no real-world cash value, cannot be transferred between different user accounts, and cannot be exchanged for fiat currency except as expressly stated in this policy.</li>
            <li><strong>Payment Processing:</strong> Purchases on Android and iOS are processed securely through Google Play or the Apple App Store; purchases on our website are processed by our authorized third-party payment gateway partners (such as UPI, Netbanking, Credit/Debit cards).</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2>2. When You Are Eligible for a Refund</h2>
          <p>
            The table below outlines specific situations where refunds or wallet coin reinstatements apply, the applicable resolution, and the required reporting timeline:
          </p>

          <div className="legal-table-wrapper" style={{ margin: '20px 0', overflowX: 'auto' }}>
            <table className="legal-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '220px' }}>Situation</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '220px' }}>Refund</th>
                  <th style={{ padding: '14px 16px', color: '#f3eefc', fontWeight: 700, minWidth: '150px' }}>Report Within</th>
                </tr>
              </thead>
              <tbody>
                {eligibleSituations.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '14px 16px', color: '#ffffff', fontWeight: 500 }}>
                      {row.situation}
                    </td>
                    <td style={{ padding: '14px 16px', color: '#72e8ae', fontWeight: 600 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#72e8ae" style={{ flexShrink: 0 }} />
                        {row.refund}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span className={`refund-time-pill ${row.badgeColor}`}>
                        <Clock size={12} /> {row.timeLimit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2>3. When Refunds Are Not Given</h2>
          <p>
            Refunds or coin re-credits will <strong>not</strong> be granted in the following scenarios:
          </p>
          <div className="guideline-grid">
            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.14)', color: '#f87171' }}><XCircle size={18} /></div>
              <h4>Coins Already Consumed</h4>
              <p>Coins already spent on fully completed video/voice calls, live streams, sent gifts, or unlocked features.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.14)', color: '#f87171' }}><XCircle size={18} /></div>
              <h4>Subjective Personal Dissatisfaction</h4>
              <p>Dissatisfaction with a host's conversation, looks, language, style, or personality, where no platform rule was broken.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.14)', color: '#f87171' }}><XCircle size={18} /></div>
              <h4>User Network or Device Issues</h4>
              <p>Calls voluntarily ended by you, or dropped due to your own Wi-Fi/mobile network fluctuations, battery death, or device freezes.</p>
            </div>

            <div className="guideline-card">
              <div className="guideline-icon" style={{ background: 'rgba(239, 68, 68, 0.14)', color: '#f87171' }}><XCircle size={18} /></div>
              <h4>Bonus / Free Coins</h4>
              <p>Promotional coins, referral bonuses, daily login rewards, or complimentary free virtual credits.</p>
            </div>
          </div>
          <ul style={{ marginTop: '14px' }}>
            <li><strong>Suspended or Banned Accounts:</strong> Accounts suspended, terminated, or blacklisted for violating our Terms of Service, Community Guidelines, or Child Safety Policy.</li>
            <li><strong>Expired Reporting Windows:</strong> Refund requests submitted after the designated eligibility time limits stated in Section 2.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2>4. How to Request a Refund</h2>
          <p>
            Follow these simple steps to ensure your request is validated and expedited quickly:
          </p>

          <div className="refund-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '20px 0' }}>
            <div className="refund-step-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff416c, #8b5cf6)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '14px', marginBottom: '12px' }}>1</div>
              <h4 style={{ color: '#fff', fontSize: '14px', margin: '0 0 6px' }}>Submit Your Request</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#b2a6c8' }}>
                Go to <strong>Profile → Help &amp; Support → Payment Issue</strong> inside the mobile app, or email us at <a href="mailto:oyecam.com@gmail.com" style={{ color: '#ff7597' }}>oyecam.com@gmail.com</a>.
              </p>
            </div>

            <div className="refund-step-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff416c, #8b5cf6)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '14px', marginBottom: '12px' }}>2</div>
              <h4 style={{ color: '#fff', fontSize: '14px', margin: '0 0 6px' }}>Provide Transaction Details</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#b2a6c8' }}>
                Share your registered mobile number, Transaction ID / Order ID, date, debited amount, and a screenshot of the payment receipt.
              </p>
            </div>

            <div className="refund-step-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff416c, #8b5cf6)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '14px', marginBottom: '12px' }}>3</div>
              <h4 style={{ color: '#fff', fontSize: '14px', margin: '0 0 6px' }}>Verification &amp; Resolution</h4>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#b2a6c8' }}>
                We formally acknowledge your request within <strong>24 hours</strong> and resolve the matter within <strong>7 working days</strong>.
              </p>
            </div>
          </div>

          <div className="legal-summary-card" style={{ marginTop: '16px', background: 'rgba(139, 92, 246, 0.06)', borderColor: 'rgba(139, 92, 246, 0.25)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d8b4fe', margin: '0 0 8px', fontSize: '14px' }}>
              <Smartphone size={16} /> App Store &amp; Google Play Store Purchases
            </h4>
            <p style={{ fontSize: '13px', margin: 0 }}>
              For in-app purchases processed through <strong>Google Play</strong> or the <strong>Apple App Store</strong>, you may also request a refund directly from Google or Apple under their respective customer purchase protection policies. Their final determination governs those store transactions.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2>5. Refund Timelines</h2>
          <p>
            Once a refund has been authorized by our billing and finance audit team:
          </p>
          <ul>
            <li><strong>Original Payment Method Reversal:</strong> Approved monetary refunds go back directly to the original payment source (UPI, Credit/Debit card, Netbanking). After our team processes the release, banking gateways typically take <strong>5–7 working days</strong> to reflect the credit on your bank statement.</li>
            <li><strong>Wallet Coin Re-Credit:</strong> Refunds credited in the form of virtual coins reach your in-app OyeCam wallet within <strong>24 hours</strong> of approval.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2>6. Chargebacks and Misuse</h2>
          <p>
            We take fair trade and fraud prevention seriously:
          </p>
          <ul>
            <li><strong>Temporary Account Suspension:</strong> If you raise a chargeback or payment dispute with your bank after receiving and consuming coins, we may temporarily freeze or suspend your account pending dispute resolution.</li>
            <li><strong>Fraudulent Chargebacks:</strong> Repeated false refund claims, fraudulent transaction alerts, or abusive chargeback attempts will result in an immediate permanent ban and device blacklisting.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2>7. Host Earnings</h2>
          <p>
            Host creator earnings, gift redemptions, and payout schedules are governed by the separate <strong>Host Agreement</strong>, not this user Refund Policy. If coins are refunded to a caller due to a verified guideline violation by a host, those coins are deducted directly from that host's accrued earnings.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2>8. Account Deletion</h2>
          <p>
            If you voluntarily delete your OyeCam account, any remaining unused virtual coins or wallet balances are permanently forfeited. Please ensure you submit any eligible refund requests <strong>before</strong> deleting your account. Unused promotional or bonus coins are always non-refundable and forfeited upon deletion.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2>9. Contact and Grievances</h2>
          <p>
            For payment questions, failed recharge assistance, or refund tracking:
          </p>
          <div className="contact-strip" style={{ marginBottom: '20px' }}>
            <div className="contact-strip-row">
              <Mail size={16} />
              <span>Payment Support Email: <a href="mailto:oyecam.com@gmail.com">oyecam.com@gmail.com</a></span>
            </div>
            <div className="contact-strip-row">
              <Phone size={16} />
              <span>Direct Phone Helpline: <a href="tel:+919010187125">+91 90101 87125</a> (Mon – Sat, 10:00 AM – 5:00 PM IST)</span>
            </div>
          </div>

          <h3 style={{ fontSize: '17px', color: '#fff', marginTop: '24px', marginBottom: '12px' }}>
            Statutory Grievance Escalation
          </h3>
          <p>
            In accordance with the Information Technology Act, 2000 and applicable consumer protection rules, unresolved complaints may be escalated to our designated Grievance Officer:
          </p>

          <div className="contact-officer-card" style={{ 
            background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.08), rgba(20, 14, 32, 0.95))',
            border: '1px solid rgba(139, 92, 246, 0.28)',
            borderRadius: '20px',
            padding: '24px',
            marginTop: '14px'
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

              <div style={{ gridColumn: '1 / -1' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#8f83a8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>Office Address</span>
                <div style={{ color: '#d8cfeb', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <MapPin size={15} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>1-41, Vivek Nagar Colony, Jillelaguda, Hyderabad, Telangana – 500097, India</span>
                </div>
              </div>
            </div>
          </div>

          <p style={{ marginTop: '20px', fontSize: '12.5px', color: '#9d92b2' }}>
            <strong>Resolution SLA:</strong> We acknowledge consumer grievances within <strong>24 hours</strong> and resolve them within <strong>15 days</strong>.
          </p>
          <p style={{ marginTop: '8px', fontSize: '12.5px', color: '#9d92b2' }}>
            <strong>Governing Law &amp; Jurisdiction:</strong> This Refund Policy is governed by the laws of India. Courts at <strong>Hyderabad, Telangana</strong> have exclusive jurisdiction over any disputes arising under or in relation to this policy.
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}
