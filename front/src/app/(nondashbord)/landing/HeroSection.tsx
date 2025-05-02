"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='relative text-center h-screen'>
        <Image 
        src="/kara-eads-L7EwHkq1B2s-unsplash.jpg"
        alt="hero"
        fill
        className='object-cover object-center'
        priority />
        <div className='absolute inset-0 bg-[rgb(0,0,0)]/65 '></div>
        <motion.div
        initial={{ opacity:0, y:20}}
        animate={{ opacity:1, y:0}}
        transition={{ duration: 0.8}}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <div className='max-w-4xl mx-auto px-16 sm:px-12 w-full'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                Find a residence that reflects your standards and style.
                </h1>
                <p className='text-lg md:text-xl text-white !mb-8'>
                Find your ideal home among properties tailored for comfort and convenience.
                </p>
                <div className='flex justify-center'>
                    <Input
                    type='text'
                    value=''
                    onChange={()=>{}}
                    placeholder='Search by city , neighborhood or address'
                    className='w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12'/>
                    <Button 
                    onClick={()=>{}}
                    className='bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12 cursor-pointer'
                    >Search</Button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default HeroSection