import React from 'react'
import { Input, Button, Typography } from '@/components/elements'
import { useState } from 'react'
import { formatCurrency } from '@/utils'

const FilterByPrice = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const handleMin = (e) => {
    setMin(e.target.value)
  }

  const handleMax = (e) => {
    setMax(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(min, max)
  }

  return (
    <div className=' bg-white-50 h-[250px] rounded-md w-[220px]  tabletS:w-full p-4 mt-8'>
      <Typography variants={3} className={` text-xl text-white-950 mb-3`}>
        Filter by Price
      </Typography>
      <form action="" onSubmit={handleSubmit}>

        <div>
          <div className='mb-3'>
            <Input
              className={`bg-pink-600 `}
              max={`10`}
              value={min}
              type={`range`}
              onChange={handleMin}
            />
            <div>Min: {formatCurrency(min)}</div>
          </div>
          <div className='mb-6'>
            <Input
              className={`bg-pink-600 `}
              max={`100`}
              value={max}
              onChange={handleMax}
              type={`range`}
            />
            <div>Max: {formatCurrency(max)}</div>
          </div>
        </div>
        <Button className={`w-full p-1 rounded-[20px] bg-pink-600 mt-2 text-white-50 font-bold`}>
          Filter
        </Button>
      </form>
    </div>
  )
}

export default FilterByPrice