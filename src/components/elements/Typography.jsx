import React from 'react'

const Typography = ({children, variants, className}) => {
    const Element = `h${variants}`

    if(variants < 1 || variants > 6) {
        throw new Error('Variants must be between 1 and 6')
    }

  return (
    <Element className={`${className}`}>{children}</Element>
  )
}

export default Typography