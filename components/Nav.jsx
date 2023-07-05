import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
        <nav className='flex-between gap-x-1 w-full mb-16 mt-4 max-sm:mt-8'>
        <Link href='/' className='flex gap-2 flex-center '>
        <Image
          src='/assets/logo-no-background.svg'
          alt='logo'
          width={90}
          height={50}
          className='object-contain'
        />
        
      </Link>
      <Link href='/posts' className='black_btn'>All Posts</Link>
      
          <div><Link href='/about' className='black_btn'>
              About Me
            </Link></div>
        </nav>

  )
}
//*max-sm:hidden*//
export default Nav