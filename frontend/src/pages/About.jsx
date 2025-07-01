import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim alias quisquam rerum minus explicabo necessitatibus excepturi saepe quos numquam!</p>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic nulla laborum cumque omnis exercitationem delectus unde, illum eaque eum.</p>
            <b className='text-gray-800 text-[22px]'>Our Mission</b>
            <p className='text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sapiente, quo voluptates laboriosam culpa ipsam incidunt eligendi. Explicabo, quaerat aspernatur.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi deserunt molestiae, unde esse aspernatur reprehenderit neque sint, ex quaerat illo odio deleniti beatae cumque eos.</p>
        </div>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi deserunt molestiae, unde esse aspernatur reprehenderit neque sint, ex quaerat illo odio deleniti beatae cumque eos.</p>
        </div>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-black'>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi deserunt molestiae, unde esse aspernatur reprehenderit neque sint, ex quaerat illo odio deleniti beatae cumque eos.</p>
        </div>
      </div>

      <NewsletterBox/>


    </div>
  )
}

export default About
