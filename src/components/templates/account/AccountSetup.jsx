import { Billing, FormInput, Shipping } from '.'
import React from 'react'
import { useFormContext } from '@/hooks'
import { Button, Typography } from '@/components/elements'
import ProgressBar from "@ramonak/react-progress-bar";

const AccountSetup = () => {
  const {
    step,
    setStep,
    data,
    canSubmit,
    title,
    disableNext,
    disablePrev,
    prevHide,
    nextHide,
    numSteps,
    submitHide

  } = useFormContext()

  const handlePrev = () => {
    setStep(step - 1)
  }

  const handleNext = () => {
      setStep(step + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  const progress = Math.round((step / numSteps) * 100) // Calculate percentage of completion

  console.log(progress)

  const content = (
    <div>
      <form className='w-[400px] mobileXL:w-[300px] rounded-md h-[470px] mt-4
    bg-[#ffffff88] shadow-md  shadow-black-800 p-4 '>

        <div>
          <Typography variants={`2`} className={` text-2xl text-white-950 text-center mb-1 mobileL:text-xl`}>
            {title[step]}
          </Typography>
        </div>
        <div>
          <Typography variants={1} className={`text-center text-lg text-white-950 `}>
            Step {step === 0 ? '1' : '2'} / 2
          </Typography>
        </div>

        <div className='mb-2'>
          <ProgressBar isLabelVisible={false} completed={progress} baseBgColor='#ffffff' bgColor='#c13d60' height='10px' />
        </div>

        <FormInput />

        <div className=''>
          <Button
            className={`${prevHide} w-[90px] cursor-pointer me-8 bg-white-50  p-1 transition duration-500 ease-in-out
            rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold  `}
            type={`button`} onClick={handlePrev} disabled={disablePrev}> Prev </Button>

          <Button
            className={`${nextHide} w-[90px] bg-white-50 cursor-pointer  p-1 transition duration-500 ease-in-out
            rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold ${disableNext? 'opacity-20' : ' opacity-100'}  `}
            type={`button`} disabled={disableNext} onClick={handleNext} > Next </Button>

          <Button
            className={`${submitHide} w-[90px] bg-white-50  p-1 transition duration-500 ease-in-out
            rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold ${!canSubmit? 'opacity-20': 'opacity-100'} `}
            type='submit' disabled={!canSubmit} onClick={handleSubmit}> Submit </Button>
        </div>

      </form>
    </div>
  )

  return content
}

export default AccountSetup