import React from 'react'
import { useFormContext } from '@/hooks'
import { Billing, Shipping} from '.'

const FormInput = () => {
    const {step} = useFormContext()

    const renderStep =  {
        0: <Billing />,
        1: <Shipping />
    }

    const content = (
        <div className=''>
            {renderStep[step]}
        </div>
    )

  return content
}

export default FormInput