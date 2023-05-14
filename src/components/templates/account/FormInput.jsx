import React from 'react'
import { useFormContext } from '@/hooks'
import {Billing1,Billing2 ,Shipping1, Shipping2} from '.'

const FormInput = () => {
    const {step} = useFormContext()

    const renderStep =  {
        0: <Billing1 />,
        1: <Billing2 />,
        2: <Shipping1 />,
        3: <Shipping2 />    
    }

    const content = (
        <div className=''>
            {renderStep[step]}
        </div>
    )

  return content
}

export default FormInput