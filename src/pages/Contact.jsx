import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SignalDivider from '../components/SignalDivider';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageError, setShowMessageError] = useState(false);

  useEffect(() => {
    document.title = "Contact Us — Eliciton Innovations";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Get in touch with the Eliciton laboratory and research team in Hyderabad for diagnostics assay development inquiries.');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!message.trim()) {
      setShowMessageError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your-web3forms-access-key-here' || accessKey === '') {
      setSubmitStatus('error');
      setErrorMessage('Web3Forms access key is not configured in environment variables.');
      setIsSubmitting(false);
      return;
    }

    const finalSubject = subject.trim() || 'General Inquiry';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: finalSubject,
          message: message,
          from_name: 'Eliciton Contact Form',
          timestamp: new Date().toString()
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to submit the form.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Let's talk about your diagnostic challenge"
        compact={true}
      />

      <SignalDivider />

      {/* ================= CONTACT ================= */}
      <section className="section-pad contact">
        <div className="wrap">
          <div className="contact-shell reveal">

            <div className="contact-form-side">
              <div className="eyebrow">Get in Touch</div>
              <h2>Connect with our team</h2>
              <p>Whether you require assay validation reference materials, custom monoclonal antibody pairs, or have inquiries regarding Brucellosis surveillance programs, we look forward to hearing from you.</p>

              {submitStatus === 'success' && (
                <div style={{ padding: '16px', background: 'rgba(141,198,191,0.15)', color: '#4a9388', borderRadius: '12px', fontSize: '14.5px', marginBottom: '24px', fontWeight: '600' }}>
                  Message sent successfully! We will get back to you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ padding: '16px', background: 'rgba(249,123,79,0.15)', color: 'var(--coral)', borderRadius: '12px', fontSize: '14.5px', marginBottom: '24px', fontWeight: '600' }}>
                  {errorMessage || 'Failed to send message. Please try again later.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="form-grid">
                <div className="field">
                  <label htmlFor="cName">Your Name</label>
                  <input
                    type="text"
                    id="cName"
                    placeholder="Dr. Sarah Jenkins"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cEmail">Email Address</label>
                  <input
                    type="email"
                    id="cEmail"
                    placeholder="s.jenkins@veterinary.org"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field full">
                  <label htmlFor="cSubject">Subject</label>
                  <input
                    type="text"
                    id="cSubject"
                    placeholder="Enter subject (optional)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="field full">
                  <label htmlFor="cMessage">Your Message</label>
                  <textarea
                    id="cMessage"
                    placeholder="Please describe your specific diagnostic or research requirements..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (e.target.value.trim()) {
                        setShowMessageError(false);
                      }
                    }}
                  ></textarea>
                  {showMessageError && (
                    <div style={{ color: 'var(--coral)', fontSize: '13px', marginTop: '6px', fontWeight: '600' }}>
                      Please enter your message.
                    </div>
                  )}
                </div>
                <div className="full">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>

              <div className="contact-details-card" style={{ marginTop: '36px', padding: '24px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px', fontFamily: 'Outfit, sans-serif', color: '#fff' }}>Direct Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(242, 194, 114, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px', fontWeight: '600', letterSpacing: '0.03em' }}>Phone</div>
                      <a href="tel:+919492922500" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15.5px', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--gold)'} onMouseOut={(e) => e.target.style.color = '#fff'}>+91 9492922500</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(242, 194, 114, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px', fontWeight: '600', letterSpacing: '0.03em' }}>Email</div>
                      <a href="mailto:elicitoninnovations@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15.5px', transition: 'color 0.2s', wordBreak: 'break-all' }} onMouseOver={(e) => e.target.style.color = 'var(--gold)'} onMouseOut={(e) => e.target.style.color = '#fff'}>elicitoninnovations@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map-side">
              <iframe src="https://maps.google.com/maps?q=Eliciton+Innovations+Private+Limited&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Eliciton Innovations Office Location Map"></iframe>
              <div className="contact-map-overlay">
                <b>Eliciton Innovations Private Limited</b>
                <a href="https://maps.app.goo.gl/q8dJMVYZVpxz9G6B7" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <span>Plot No. M 42/1, Medical Devices Park, Sultanpur,<br />Near Patancheru, Hyderabad, Telangana, 502319.</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
