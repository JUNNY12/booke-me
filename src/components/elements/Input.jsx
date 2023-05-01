import React from 'react'

const Input = ({className, ...rest}) => {
  return (
    <input
    {...rest}
    className={`
    ${className} border-none outline-none`}
    
    />
  )
}

export default Input