import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneShell from '../components/PhoneShell'
import Field from '../components/Field'
import PrimaryButton from '../components/PrimaryButton'
import { defaultProfile } from '../constants/profile'
import { validateLoginForm } from '../utils/validation'

export default function LoginPage({ profile, setProfile }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: profile.email === defaultProfile.email ? '' : profile.email,
    password: profile.password,
  })
  const [errors, setErrors] = useState({})

  const validate = (nextForm) => validateLoginForm(nextForm)

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

    setProfile((current) => ({
      ...current,
      email: form.email || current.email,
      password: form.password || current.password,
    }))

    navigate('/account')
  }

  return (
    <PhoneShell>
      <form className="form-screen narrow" onSubmit={handleSubmit} noValidate>
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
            onBlur={handleBlur}
            placeholder="Enter email address"
            error={errors.email}
            required
          />
          <Field
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter password"
            type="password"
            error={errors.password}
            required
          />
          <PrimaryButton className="disabled-look" type="submit">
            Login
          </PrimaryButton>
        </div>
      </form>
    </PhoneShell>
  )
}