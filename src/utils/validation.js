const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9]{10}$/

export function validateLoginForm(form) {
  const errors = {}

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.password.trim()) {
    errors.password = 'Password is required.'
  }

  return errors
}

export function validateRegisterForm(form) {
  const errors = {}

  if (!form.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = 'Enter a 10-digit phone number.'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.password.trim()) {
    errors.password = 'Password is required.'
  } else if (form.password.trim().length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  }

  if (!form.company.trim()) {
    errors.company = 'Company name is required.'
  }

  return errors
}