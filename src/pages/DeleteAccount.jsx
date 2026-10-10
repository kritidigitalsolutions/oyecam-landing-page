import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import { 
  AlertOctagon, 
  Trash2, 
  ShieldAlert, 
  CheckCircle, 
  Smartphone, 
  HelpCircle, 
  ArrowRight, 
  Coins, 
  Copy, 
  Check 
} from 'lucide-react';

export default function DeleteAccount({ onNavigate }) {
  const [identifier, setIdentifier] = useState('');
  const [reason, setReason] = useState('No longer using the app');
  const [feedback, setFeedback] = useState('');
  const [checkProfile, setCheckProfile] = useState(false);
  const [checkCoins, setCheckCoins] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!identifier.trim()) {
      setError('Please enter your registered mobile number, email, or oyecam User ID.');
      return;
    }

    if (!checkProfile || !checkCoins) {
      setError('Please acknowledge both confirmation checkboxes to proceed with account deletion.');
      return;
    }

    setSubmitting(true);

    // Simulate secure request submission
    setTimeout(() => {
      const randomId = 'OYE-DEL-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(randomId);
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(refId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LegalLayout activePage="delete-account" onNavigate={onNavigate}>
      <div className="legal-hero">
        <span className="legal-badge" style={{ color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
          User Rights & Account Management
        </span>
        <h1>Delete <span className="gradient-text">Account</span> & Data</h1>
        <p>
          We respect your autonomy and your privacy. You can permanently delete your oyecam account 
          and all associated personal data directly through this page or within the mobile application.
        </p>
      </div>

      <div className="delete-container" style={{ margin: '0 auto' }}>
        {submitted ? (
          <div className="delete-success-card">
            <div className="success-icon-badge">
              <CheckCircle size={36} />
            </div>
            <h2>Account Deletion Request Submitted</h2>
            <p>
              Your deletion request for <strong>{identifier}</strong> has been successfully registered. 
              Your account has been deactivated immediately and will be permanently erased from all 
              oyecam production systems within 30 days.
            </p>

            <div className="reference-box">
              <small>Your Deletion Reference ID</small>
              <code>{refId}</code>
            </div>

            <div className="success-actions">
              <button className="button small" onClick={handleCopy}>
                {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Reference ID</>}
              </button>
              <button 
                className="secondary-button" 
                onClick={() => {
                  setSubmitted(false);
                  setIdentifier('');
                  setCheckProfile(false);
                  setCheckCoins(false);
                }}
              >
                Submit another request
              </button>
              <button className="secondary-button" onClick={() => onNavigate('home')}>
                Back to home
              </button>
            </div>

            <div style={{ marginTop: '28px', fontSize: '12px', color: '#8d839f' }}>
              Have questions or want to cancel within the 30-day grace period? Contact our Helpline at{' '}
              <a href="tel:+919010187125" style={{ color: '#d1a9f8', fontWeight: 600 }}>+91 90101 87125</a>{' '}
              quoting your reference ID.
            </div>
          </div>
        ) : (
          <>
            <div className="warning-banner">
              <ShieldAlert size={28} />
              <div>
                <h3>Important Notice: Deletion is Permanent and Irreversible</h3>
                <p>
                  Once your account is deleted, your profile, username, conversations, performer followings, 
                  and remaining coin balance cannot be restored. Please review the details below before submitting.
                </p>
              </div>
            </div>

            <div className="deletion-impact-grid">
              <div className="impact-card danger">
                <h4><Trash2 size={16} /> Data That Will Be Deleted</h4>
                <ul>
                  <li>Your user profile, bio, display name & avatar</li>
                  <li>Authentication credentials (phone number/email link)</li>
                  <li>Direct chat messages & media history</li>
                  <li>Performer followings, favorites & room memberships</li>
                  <li>All remaining unused virtual coin balances</li>
                </ul>
              </div>

              <div className="impact-card info">
                <h4><Coins size={16} /> Data Retained For Compliance</h4>
                <ul>
                  <li>Financial purchase transaction receipts (retained for statutory taxation & anti-fraud audit as required by law)</li>
                  <li>Resolved support logs without personal identifiers</li>
                  <li>Hardware bans on abusive devices to protect community</li>
                </ul>
              </div>
            </div>

            <div className="delete-form-card">
              <h3>Web Account Deletion Request</h3>
              <p>Complete this form if you cannot access the oyecam mobile app or have uninstalled it.</p>

              {error && (
                <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: '10px', padding: '12px 16px', color: '#fca5a5', fontSize: '13px', marginBottom: '20px' }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="userIdentifier">
                    Registered Mobile Number / Email / User ID
                    <small>(Required)</small>
                  </label>
                  <input
                    id="userIdentifier"
                    type="text"
                    className="form-input"
                    placeholder="e.g. +91 90101 00000 or registered User ID"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="deleteReason">
                    Primary reason for leaving
                  </label>
                  <select
                    id="deleteReason"
                    className="form-select"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  >
                    <option value="No longer using the app">No longer using the app</option>
                    <option value="Privacy or data security concerns">Privacy or data security concerns</option>
                    <option value="Found someone / taking a break">Found someone / taking a break</option>
                    <option value="Too many notifications">Too many notifications</option>
                    <option value="Coin pricing or payment issues">Coin pricing or payment issues</option>
                    <option value="Creating a new account">Creating a fresh new account</option>
                    <option value="Other">Other reasons</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="feedbackText">
                    Additional feedback <small>(Optional)</small>
                  </label>
                  <textarea
                    id="feedbackText"
                    className="form-textarea"
                    placeholder="How could oyecam have been better for you?"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>

                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={checkProfile}
                      onChange={(e) => setCheckProfile(e.target.checked)}
                    />
                    <span>
                      I understand that my profile, chats, performer connections, and account history will be permanently deleted and cannot be recovered.
                    </span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={checkCoins}
                      onChange={(e) => setCheckCoins(e.target.checked)}
                    />
                    <span>
                      I acknowledge that all unspent coin balances in my oyecam wallet will be forfeited without any cash refund.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="delete-submit-btn"
                  disabled={submitting}
                >
                  <AlertOctagon size={18} />
                  {submitting ? 'Processing Request...' : 'Permanently Delete My Account'}
                </button>
              </form>
            </div>

            <div className="in-app-steps-card">
              <h4><Smartphone size={18} /> How to Delete Your Account Inside the oyecam App</h4>
              <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#9f94b3' }}>
                If you currently have the app installed, deleting directly inside the app is instantaneous:
              </p>
              <ol>
                <li>Open the <strong>oyecam</strong> app on your Android or iOS device.</li>
                <li>Tap your <strong>Profile avatar</strong> in the bottom navigation bar.</li>
                <li>Tap the <strong>Settings (Gear)</strong> icon at the top right.</li>
                <li>Select <kbd>Account & Security</kbd> &gt; <kbd>Delete Account</kbd>.</li>
                <li>Confirm with your registered mobile OTP to complete instant deletion.</li>
              </ol>
            </div>
          </>
        )}
      </div>
    </LegalLayout>
  );
}
