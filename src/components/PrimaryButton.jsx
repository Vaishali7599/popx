export default function PrimaryButton({ children, className = '', muted = false, type = 'button' }) {
  return (
    <button type={type} className={`btn ${muted ? 'btn-muted' : 'btn-primary'} ${className}`.trim()}>
      {children}
    </button>
  )
}