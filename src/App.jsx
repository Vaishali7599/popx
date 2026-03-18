import { useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

const defaultProfile = {
  fullName: 'Marry Doe',
  phone: '',
  email: 'Marry@Gmail.Com',
  password: '',
  company: '',
  isAgency: 'yes',
  bio:
    'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
}

function Field({ label, value, onChange, placeholder, type = 'text', name }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </label>
  )
}

function PrimaryButton({ children, className = '', muted = false, type = 'button' }) {
  return (
    <button type={type} className={`btn ${muted ? 'btn-muted' : 'btn-primary'} ${className}`.trim()}>
      {children}
    </button>
  )
}

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
            <Link to="/register">
              <PrimaryButton>Create Account</PrimaryButton>
            </Link>
            <Link to="/login">
              <PrimaryButton muted>Already Registered? Login</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </PhoneShell>
  )
}

function LoginPage({ profile, setProfile }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: profile.email === defaultProfile.email ? '' : profile.email,
    password: profile.password,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setProfile((current) => ({
      ...current,
      email: form.email || current.email,
      password: form.password || current.password,
    }))

    navigate('/account')
  }

  return (
    <PhoneShell>
      <form className="form-screen narrow" onSubmit={handleSubmit}>
        <h1>
          Signin to your<br />PopX account
        </h1>
        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="stack form-gap top-gap">
          <Field
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
          <Field
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
          />
          <PrimaryButton className="disabled-look" type="submit">
            Login
          </PrimaryButton>
        </div>
      </form>
    </PhoneShell>
  )
}

function RegisterPage({ setProfile }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setProfile((current) => ({ ...current, ...form }))
    navigate('/account')
  }

  return (
    <PhoneShell>
      <form className="form-screen register-screen" onSubmit={handleSubmit}>
        <h1>
          Create your<br />PopX account
        </h1>

        <div className="stack form-gap slightly-top-gap">
          <Field label="Full Name*" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Marry Doe" required/>
          <Field label="Phone number*" name="phone" value={form.phone} onChange={handleChange} placeholder="Marry Doe" required />
          <Field label="Email address*" name="email" value={form.email} onChange={handleChange} placeholder="Marry Doe" required/>
          <Field label="Password *" name="password" value={form.password} onChange={handleChange} placeholder="Marry Doe" type="password" />
          <Field label="Company name" name="company" value={form.company} onChange={handleChange} placeholder="Marry Doe" required/>

          <div className="radio-group">
            <p>Are you an Agency?*</p>
            <div className="radio-row">
              <label className="radio-option">
                <input type="radio" name="isAgency" value="yes" checked={form.isAgency === 'yes'} onChange={handleChange} />
                <span className="radio-ui"></span>
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="isAgency" value="no" checked={form.isAgency === 'no'} onChange={handleChange} />
                <span className="radio-ui"></span>
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bottom-cta">
          <PrimaryButton type="submit">Create Account</PrimaryButton>
        </div>
      </form>
    </PhoneShell>
  )
}


function AccountPage({ profile, setProfile }) {
  const navigate = useNavigate()
  const initials = useMemo(() => {
    const name = profile.fullName?.trim()
    if (!name) return 'MD'

    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('')
  }, [profile.fullName])

    const handleLogout = () => {
    setProfile(defaultProfile)
    navigate('/')
  }

  return (
    <PhoneShell padded={false}>
      <div className="account-page">
        <header className="topbar">
          <span>Account Settings</span>
          <button type="button" className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <section className="profile-card">
          <div className="avatar-wrap">
            <div className="avatar">{initials}</div>
            <div className="camera-badge">📷</div>
          </div>

          <div className="profile-meta">
            <h3>{profile.fullName || 'Marry Doe'}</h3>
            <p>{profile.email || 'Marry@Gmail.Com'}</p>
          </div>
        </section>

        <section className="bio-copy">{profile.bio}</section>

        <div className="divider dashed" />
      </div>
    </PhoneShell>
  )
}

export default function App() {
  const [profile, setProfile] = useState(defaultProfile)

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage profile={profile} setProfile={setProfile} />} />
      <Route path="/register" element={<RegisterPage setProfile={setProfile} />} />
      <Route path="/account" element={<AccountPage profile={profile} />} />
    </Routes>
  )
}
