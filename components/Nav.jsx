"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav>
        <div className='flex justify-between gap-x-8 w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/logo-white.svg'
          alt='logo'
          width={60}
          height={60}
          className='object-contain'
        />
        <p className='logo_text'>DEVCUT</p>
      </Link>

        </div>

    </nav>
  )
}

export default Nav