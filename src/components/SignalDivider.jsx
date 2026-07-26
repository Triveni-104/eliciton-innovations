import React from 'react';

export default function SignalDivider({ dark = false }) {
  return (
    <svg className={`signal-divider ${dark ? 'dark' : ''} reveal`} viewBox="0 0 1440 90" preserveAspectRatio="none">
      <path d="M0,45 C240,45 260,10 340,10 C420,10 440,80 520,80 C620,80 640,45 760,45 L1440,45"/>
    </svg>
  );
}
