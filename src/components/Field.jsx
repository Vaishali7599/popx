export default function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  name,
  error = '',
  required = false,
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
        aria-invalid={Boolean(error)}
      />
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  )
}