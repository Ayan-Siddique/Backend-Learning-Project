// src/components/common/BrandPanel.jsx

const BrandPanel = () => {
  return (
    <div className="auth-left">
      {/* Logo */}
      <div className="auth-logo">
        <div className="logo-icon">⬡</div>
        <span className="logo-name">DevConnect</span>
      </div>

      {/* Network Illustration */}
      <div className="auth-illustration">
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <line x1="160" y1="80" x2="100" y2="150" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="160" y1="80" x2="240" y2="140" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="100" y1="150" x2="80" y2="220" stroke="#6c63ff" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="100" y1="150" x2="160" y2="210" stroke="#6c63ff" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="240" y1="140" x2="160" y2="210" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="240" y1="140" x2="250" y2="210" stroke="#6c63ff" strokeWidth="1" strokeOpacity="0.3" />

          {/* Dot nodes */}
          <circle cx="160" cy="80" r="3" fill="#22d3ee" />
          <circle cx="100" cy="150" r="3" fill="#6c63ff" />
          <circle cx="240" cy="140" r="3" fill="#22d3ee" />
          <circle cx="80" cy="220" r="3" fill="#6c63ff" />
          <circle cx="160" cy="210" r="3" fill="#22d3ee" />
          <circle cx="250" cy="210" r="3" fill="#6c63ff" />

          {/* Avatar nodes */}
          {/* Top center – React */}
          <circle cx="160" cy="80" r="28" fill="#111827" stroke="#6c63ff" strokeWidth="1.5" />
          <circle cx="160" cy="73" r="9" fill="#6c63ff" fillOpacity="0.6" />
          <path d="M145 93 Q160 85 175 93" stroke="#6c63ff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="130" y="56" width="60" height="18" rx="4" fill="#1a2235" stroke="#6c63ff" strokeWidth="1" strokeOpacity="0.6" />
          <text x="160" y="68" textAnchor="middle" fill="#6c63ff" fontSize="8" fontFamily="monospace">&lt;/&gt; React</text>

          {/* Mid left – Python */}
          <circle cx="100" cy="150" r="26" fill="#111827" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="100" cy="143" r="8" fill="#22d3ee" fillOpacity="0.6" />
          <path d="M87 163 Q100 155 113 163" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="72" y="172" width="56" height="16" rx="4" fill="#1a2235" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.6" />
          <text x="100" y="183" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontFamily="monospace">Python</text>

          {/* Mid right – Node.js */}
          <circle cx="240" cy="140" r="26" fill="#111827" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="240" cy="133" r="8" fill="#22d3ee" fillOpacity="0.5" />
          <path d="M227 153 Q240 145 253 153" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="210" y="162" width="60" height="16" rx="4" fill="#1a2235" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.6" />
          <text x="240" y="173" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontFamily="monospace">Node.js</text>

          {/* Bottom left */}
          <circle cx="80" cy="220" r="22" fill="#111827" stroke="#6c63ff" strokeWidth="1.5" strokeOpacity="0.7" />
          <circle cx="80" cy="213" r="7" fill="#6c63ff" fillOpacity="0.5" />
          <path d="M69 230 Q80 223 91 230" stroke="#6c63ff" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Bottom center */}
          <circle cx="160" cy="215" r="22" fill="#111827" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.7" />
          <circle cx="160" cy="208" r="7" fill="#22d3ee" fillOpacity="0.5" />
          <path d="M149 225 Q160 218 171 225" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Status dots */}
          <circle cx="182" cy="60" r="5" fill="#22c55e" />
          <circle cx="120" cy="132" r="5" fill="#22c55e" />
          <circle cx="260" cy="122" r="5" fill="#22c55e" />
        </svg>
      </div>

      {/* Hero text + stats */}
      <div className="auth-hero">
        <h2>
          Where <span>developers</span>
          <br />build together
        </h2>
        <p>
          Connect with engineers worldwide, share projects,
          get hired, and grow your career in tech.
        </p>

        <div className="auth-stats">
          <div className="stat">
            <strong>2.4M+</strong>
            <span>Developers</span>
          </div>
          <div className="stat">
            <strong>180+</strong>
            <span>Countries</span>
          </div>
          <div className="stat">
            <strong>94K+</strong>
            <span>Companies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPanel;