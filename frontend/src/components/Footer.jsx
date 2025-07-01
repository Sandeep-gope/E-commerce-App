import React from 'react'
import {assets} from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1r_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, laboriosam fugit eius officiis voluptates cupiditate sequi itaque corporis enim accusantium adipisci praesentium exercitationem dolor id quis repellat aliquam. Voluptas, repudiandae.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-black'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-black'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-416-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>
      {/* Footer */}
      <div>
        <hr className='text-black' />
        <p className='py-5 text-sm text-center text-gray-600'>Copyright 2024@ forever.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
