import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneShell from '../components/PhoneShell'
import { defaultProfile } from '../constants/profile'

export default function AccountPage({ profile, setProfile }) {
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