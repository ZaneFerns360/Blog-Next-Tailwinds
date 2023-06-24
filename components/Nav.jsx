"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
        <nav className='flex-between gap-x-8 w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={100}
          height={100}
          className='object-contain'
        />
        <p className='logo_text'>DEVCUT</p>
      </Link>

        </nav>

  )
}

export default Nav