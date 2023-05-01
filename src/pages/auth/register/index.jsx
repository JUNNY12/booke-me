import React from 'react'
import { Billing, RegisterForm, Shipping } from '@/components/templates/auth'

const Register = () => {
  return (
    <div className="h-full bg-pink-400 bg-cover relative w-full p-6">
      <RegisterForm />
      <Billing />
      <Shipping />
    </div>
  )
}

export default Register