import { Routes, Route, Link } from 'react-router-dom'

const Field = ({ label, placeholder, type = 'text' }) => (
  <label className="field">
    <span className="field-label">{label}</span>
    <input type={type} placeholder={placeholder} />
  </label>
)

const PrimaryButton = ({ children, className = '', muted = false }) => (
  <button className={`btn ${muted ? 'btn-muted' : 'btn-primary'} ${className}`.trim()}>
    {children}
  </button>
)

function PhoneShell({ children, padded = true }) {
  return (
    <div className="app-shell">
      <div className={`phone-frame ${padded ? 'phone-padded' : ''}`}>{children}</div>
    </div>
  )
}

function WelcomePage() {
  return (
    <PhoneShell>
      <div className="welcome-layout">
        <div />
        <div className="welcome-copy">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
          <div className="stack">
            <Link to="/register"><PrimaryButton>Create Account</PrimaryButton></Link>
            <Link to="/login"><PrimaryButton muted>Already Registered? Login</PrimaryButton></Link>
          </div>
        </div>
      </div>
    </PhoneShell>
  )
}

function LoginPage() {
  return (
    <PhoneShell>
      <div className="form-screen narrow">
        <h1>Signin to your<br />PopX account</h1>
        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="stack form-gap top-gap">
          <Field label="Email Address" placeholder="Enter email address" />
          <Field label="Password" placeholder="Enter password" type="password" />
          <Link to="/account"><PrimaryButton className="disabled-look">Login</PrimaryButton></Link>
        </div>
      </div>
    </PhoneShell>
  )
}

function RegisterPage() {
  return (
    <PhoneShell>
      <div className="form-screen register-screen">
        <h1>Create your<br />PopX account</h1>

        <div className="stack form-gap slightly-top-gap">
          <Field label="Full Name*" placeholder="Marry Doe" />
          <Field label="Phone number*" placeholder="Marry Doe" />
          <Field label="Email address*" placeholder="Marry Doe" />
          <Field label="Password *" placeholder="Marry Doe" type="password" />
          <Field label="Company name" placeholder="Marry Doe" />

          <div className="radio-group">
            <p>Are you an Agency?*</p>
            <div className="radio-row">
              <label className="radio-option">
                <input type="radio" name="agency" defaultChecked />
                <span className="radio-ui"></span>
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="agency" />
                <span className="radio-ui"></span>
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <Link to="/account" className="bottom-cta">
          <PrimaryButton>Create Account</PrimaryButton>
        </Link>
      </div>
    </PhoneShell>
  )
}

function AccountPage() {
  return (
    <PhoneShell padded={false}>
      <div className="account-page">
        <header className="topbar">Account Settings</header>

        <section className="profile-card">
          <div className="avatar-wrap">
            <div className="avatar">MD</div>
            <div className="camera-badge">📷</div>
          </div>

          <div className="profile-meta">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </section>

        <section className="bio-copy">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </section>

        <div className="divider dashed" />
      </div>
    </PhoneShell>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  )
}
