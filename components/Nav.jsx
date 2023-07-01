"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
        <nav className='flex-between gap-x-1 w-full mb-16 mt-4 max-sm:mt-8'>
        <Link href='/' className='flex gap-2 flex-center max-sm:hidden'>
        <Image
          src='/assets/logo-no-background.svg'
          alt='logo'
          width={90}
          height={50}
          className='object-contain'
        />
        
      </Link>
      <Link href='/posts' className='font-bold text-2xl hover:text-grey'>Posts</Link>
      <div className='flex flex-center'>
        <form className='w-96 flex max-sm:w-60'>
          <input type='text' className='search_input' placeholder='Search for'/>
          </form>
          </div>
          <button className='rounded-full border border-black bg-black py-2 px-5
           text-white transition-all hover:bg-white
            hover:text-black text-center text-sm font-inter
             flex items-center justify-center'>About Me</button>
        </nav>

  )
}

export default Nav