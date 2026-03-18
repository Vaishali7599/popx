import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { defaultProfile } from './constants/profile'
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'

export default function App() {
  const [profile, setProfile] = useState(defaultProfile)

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage profile={profile} setProfile={setProfile} />} />
      <Route path="/register" element={<RegisterPage setProfile={setProfile} />} />
      <Route path="/account" element={<AccountPage profile={profile} setProfile={setProfile} />} />
    </Routes>
  )
}
