import React from 'react'
import { Billing, RegisterForm, Shipping } from '@/components/templates/auth'

const Register = () => {
  return (
    <div className="h-screen bg-pink-400 bg-cover relative w-full p-6">
      <RegisterForm />
    </div>
  )
}

export default Register