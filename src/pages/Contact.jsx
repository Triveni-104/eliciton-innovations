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
      metaDesc.setAttribute('content', 'Get in touch with the Eliciton laboratory and research team in Bengaluru for diagnostics assay development inquiries.');
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
        title="GET IN TOUCH"
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
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-map-side">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973499092892!2d77.58550787593125!3d12.973562614838634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16723223ba99%3A0xc3c545de2b2a632a!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708892400000!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Eliciton Innovations Office Location Map"></iframe>
              <div className="contact-map-overlay">
                <b>Eliciton Innovations Pvt. Ltd.</b>
                <span>Registered Office: Bengaluru, Karnataka, India<br/>Assay Research &amp; Synthesis Laboratory</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
