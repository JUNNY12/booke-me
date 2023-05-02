import React from 'react'
import { Input } from '@/components/elements'
import { useFormContext } from '@/hooks'
import { statesInNigeria } from '@/constants'

const Billing = () => {
    const { data, handleChange, step } = useFormContext()
    console.log(step)

    return (
        <div>
            <div className='mb-3'>
                <Input
                    required
                    name='billFirstName'
                    onChange={handleChange}
                    value={data.billFirstName}
                    type={`text`}
                    placeholder={`First Name`}
                    className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-3'>
                <Input
                    required
                    type={`text`}
                    name='billLastName'
                    onChange={handleChange}
                    value={data.billLastName}
                    placeholder={`Last Name`}
                    className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-3'>
                <Input
                    required
                    type={`text`}
                    name='billAddress'
                    onChange={handleChange}
                    value={data.billAddress}
                    placeholder={`Address`}
                    className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-3'>
                <Input
                    required
                    type={`text`}
                    name='billCity'
                    onChange={handleChange}
                    value={data.billCity}
                    placeholder={`City`}
                    className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-3'>
                    <select
                        required
                        id=""
                        name='billState'
                        onChange={handleChange}
                        value={data.billState}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950 outline-none`}
                    >
                        <option >Select State</option>
                        {
                            statesInNigeria.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))
                        }
                    </select>
                </div>
          
            <div className='mb-3'>
                <Input
                    required
                    name='billZip'
                    onChange={handleChange}
                    value={data.billZip}
                    type={`number`}
                    placeholder={`Zip Code`}
                    className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
           
        </div>
    )
}

export default Billing