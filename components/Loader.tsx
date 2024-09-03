'use client'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import t4 from '../public/t44.jpeg'

interface loader {
    isLoading : any,
    setIsLoading : any
}

const Loader = (
    {isLoading , setIsLoading} : loader
) => {
    useEffect(() => {
        setTimeout(() => {
          setIsLoading();
        }, 3000);
      }, [setIsLoading]);
  return (
    <motion.div 
    className=' h-screen w-screen flex justify-center items-center loader text-[#2222ff] text-[50px] font-semibold'
    initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
    >
        <Image src={t4} alt='logo' width={180} height={150} />
    </motion.div>
  )
}

export default Loader