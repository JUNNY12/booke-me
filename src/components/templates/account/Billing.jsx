import React from 'react'
import { Input } from '@/components/elements'
import { useFormContext } from '@/hooks'
import { statesInNigeria } from '@/constants'

const Billing = () => {
    const { data, handleChange, step } = useFormContext()
    console.log(step)

    return (
        <div>
            <div className='mb-4'>
                <Input
                    required
                    name='billFirstName'
                    onChange={handleChange}
                    value={data.billFirstName}
                    type={`text`}
                    placeholder={`First Name`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-4'>
                <Input
                    required
                    type={`text`}
                    name='billLastName'
                    onChange={handleChange}
                    value={data.billLastName}
                    placeholder={`Last Name`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>

            <div className='mb-4'>
                <Input
                    required
                    type={`number`}
                    name='billPhoneNumber'
                    onChange={handleChange}
                    value={data.billPhoneNumber}
                    placeholder={`Phone Number`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>

            <div className='mb-4'>
                <Input
                    required
                    type={`email`}
                    name='billEmail'
                    onChange={handleChange}
                    value={data.billEmail}
                    placeholder={`Email Address`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-4'>
                <Input
                    required
                    type={`text`}
                    name='billAddress'
                    onChange={handleChange}
                    value={data.billAddress}
                    placeholder={`Address`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-4'>
                <Input
                    required
                    type={`text`}
                    name='billCity'
                    onChange={handleChange}
                    value={data.billCity}
                    placeholder={`City`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>
            <div className='mb-4'>
                <select
                    required
                    id=""
                    name='billState'
                    onChange={handleChange}
                    value={data.billState}
                    className={`bg-white-50 text-white-950 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
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

            <div className='mb-4'>
                <Input
                    required
                    name='billZip'
                    onChange={handleChange}
                    value={data.billZip}
                    type={`number`}
                    placeholder={`Zip Code`}
                    className={`bg-white-50 w-full h-[40px] text-white-950 rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                />
            </div>

        </div>
    )
}

export default Billing