export default function PhoneShell({ children, padded = true }) {
  return (
    <div className="app-shell">
      <div className={`phone-frame ${padded ? 'phone-padded' : ''}`}>{children}</div>
    </div>
  )
}