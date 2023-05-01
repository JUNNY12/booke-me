import React from 'react'
import Hero from '@/components/templates/home/Hero'
import PopularBooks from '@/components/templates/home/PopularBooks'
import FeaturedBook from '@/components/templates/home/FeaturedBook'
import Explore from '@/components/templates/home/Explore'
import NewBooks from '@/components/templates/home/NewBooks'
import Post from '@/components/templates/home/Post'
import Footer from '@/components/modules/Footer'
const Home = () => {
  return (
    <div className=''>
      <Hero />
      <PopularBooks />
      <FeaturedBook />
      <NewBooks />
      <Explore />
      <Post />
      <Footer />
    </div>
  )
}

export default Home