import React from 'react'
import { Typography, Input, Button } from '@/components/elements'
import { useFormContext } from '@/hooks'
import { statesInNigeria } from '@/constants'

const Shipping = () => {

    const { data, handleChange } = useFormContext()

    return (
        <>

            <div className='mt-3 mb-3'>
                <input
                    id='check'
                    type="checkbox"
                    name='sameAsBilling'
                    onChange={handleChange}
                    checked={data.sameAsBilling}
                />
                <label htmlFor="check" className='ms-3'>Same as Billing Address</label>
            </div>


            <div>
                <div className='mb-3'>
                    <Input
                        required
                        disabled={data.sameAsBilling}
                        type={`text`}
                        name='shipFirstName'
                        onChange={handleChange}
                        value={data.shipFirstName}
                        placeholder={`First Name`}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                    />
                </div>
                <div className='mb-3'>
                    <Input
                        required
                        disabled={data.sameAsBilling}
                        name='shipLastName'
                        onChange={handleChange}
                        value={data.shipLastName}
                        type={`text`}
                        placeholder={`Last Name`}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                    />
                </div>
                <div className='mb-3'>
                    <Input
                        required
                        disabled={data.sameAsBilling}
                        name='shipAddress'
                        onChange={handleChange}
                        value={data.shipAddress}
                        type={`text`}
                        placeholder={`Address`}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                    />
                </div>
                <div className='mb-3'>
                    <Input
                        required
                        disabled={data.sameAsBilling}
                        name='shipCity'
                        onChange={handleChange}
                        value={data.shipCity}
                        type={`text`}
                        placeholder={`City`}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                    />
                </div>
                <div className='mb-3'>
                    <select
                        required
                        disabled={data.sameAsBilling}
                        id=""
                        name='shipState'
                        onChange={handleChange}
                        value={data.shipState}
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
                        name='shipZip'
                        onChange={handleChange}
                        value={data.shipZip}
                        required
                        disabled={data.sameAsBilling}
                        type={`number`}
                        placeholder={`Zip Code`}
                        className={`bg-[#ffffff88] w-full h-[35px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                    />
                </div>
            </div>
        </>

    )
}

export default Shipping