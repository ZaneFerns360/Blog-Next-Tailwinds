"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const About = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="w-full flex-center flex-col"><Image src='/assets/zane.JPG' alt='Author Image'
     width={200} height={200} className='rounded-lg' />
     <h1 className="head_text text-center py-2">
        
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">I&#39;m Zane</span>
    </h1>
    <p className='mt-4 text-xl font-bold leading-[1.15] '>Studying Computer engineering from Mumbai University</p>
    <p className='mt-4 text-xl font-bold leading-[1.15] '>I am adept in frontend with frameworks like React & Next Js</p>
    <p className='mt-4 text-lg font-bold leading-[1.15] '>Feel free to contact me or give me feedback.</p>
    <div className='flex py-9'> 
   <Link href="https://github.com/ZaneFerns360"><Image src='/assets/github-mark.png' className='mr-6' alt='Github' width={50} height={50}/></Link>
   <Link href="https://www.linkedin.com/in/zane-fernandes-b46b75264"><Image src='/assets/linkedin.svg' className='mr-6' alt='Linkedin' width={50} height={50}/></Link>
   <div className='flex'>
            <Image src='/assets/email.svg' alt='Email' width={70} height={100}
              onClick={() => { setToggleDropdown(!toggleDropdown); setIsCopied(false) }}
            />

            {toggleDropdown && (
              <div className='dropdown place-content-center'>
                <span className="text-lg font-medium">zane.ferns360@gmail.com</span>
                <button
                  type='button'
                    onClick={() => {
                    const text = 'zane.ferns360@gmail.com';
                    setIsCopied(true);
                    navigator.clipboard.writeText(text);
                                   }}
                    className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-l font-inter flex items-center justify-center'>
                       {isCopied ? 'Copied' : 'Copy'}
                 </button>

              </div>
            )}
          </div>
     </div>
    </div>
  )
}

export default About
