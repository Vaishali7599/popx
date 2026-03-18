import { Link } from 'react-router-dom'
import PhoneShell from '../components/PhoneShell'
import PrimaryButton from '../components/PrimaryButton'

export default function WelcomePage() {
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