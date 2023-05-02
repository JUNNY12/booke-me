import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Search } from '@/components/templates/bookStore'
import { BookLayout } from '@/components/templates/bookStore'


const Store = () => {
  return (
    <DefaultLayout>
      <Search />
      <BookLayout />
    </ DefaultLayout>
  )
}

export default Store