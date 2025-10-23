import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'

const Footer = (isDarkMode) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
      </div>
      <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
        kelmuchy@gmail.com
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6'>
        <p className='mt-4'>&copy; 2024 Kelmuchy. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a href="https://www.behance.net/kelechiemuchay" target='_blank'>Behance</a></li>
          <li><a href="https://github.com/Munchisis" target='_blank'>Github</a></li>
          <li><a href="https://www.tiktok.com/@kelechiemuchay" target='_blank'>TikTok</a></li>
        </ul>
      </div>
    
    </div>
    
  )
}

export default Footer
