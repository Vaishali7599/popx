import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneShell from '../components/PhoneShell'
import Field from '../components/Field'
import PrimaryButton from '../components/PrimaryButton'
import { validateRegisterForm } from '../utils/validation'

export default function RegisterPage({ setProfile }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })
  const [errors, setErrors] = useState({})

  const validate = (nextForm) => validateRegisterForm(nextForm)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => {
      const nextForm = { ...current, [name]: value }

      setErrors((currentErrors) => {
        if (!currentErrors[name]) {
          return currentErrors
        }

        const nextErrors = validate(nextForm)
        return { ...currentErrors, [name]: nextErrors[name] }
      })

      return nextForm
    })
  }

  const handleBlur = (event) => {
    const { name } = event.target
    const nextErrors = validate(form)

    setErrors((current) => ({ ...current, [name]: nextErrors[name] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setProfile((current) => ({ ...current, ...form }))
    navigate('/account')
  }

  return (
    <PhoneShell>
      <form className="form-screen register-screen" onSubmit={handleSubmit} noValidate>
        <h1>
          Create your<br />PopX account
        </h1>

        <div className="stack form-gap slightly-top-gap">
          <Field
            label="Full Name*"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Marry Doe"
            error={errors.fullName}
            required
          />
          <Field
            label="Phone number*"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="9876543210"
            error={errors.phone}
            required
          />
          <Field
            label="Email address*"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Marry Doe"
            error={errors.email}
            required
          />
          <Field
            label="Password *"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Marry Doe"
            type="password"
            error={errors.password}
            required
          />
          <Field
            label="Company name"
            name="company"
            value={form.company}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Marry Doe"
            error={errors.company}
            required
          />

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