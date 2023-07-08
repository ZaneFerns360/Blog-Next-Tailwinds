import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full flex-center flex-col"><Image src='/assets/zane.JPG' alt='Author Image'
     width={200} height={200} className='rounded-lg' />
     <h1 className="head_text text-center">
        
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">I'm Zane</span>
    </h1>
    <p className='mt-4 text-3xL font-bold leading-[1.15] '>Studying computer engineering from Mumbai University</p>
    <div className='flex py-9'> 
   <Link href="https://github.com/ZaneFerns360"><Image src='/assets/github-mark.png' className='mr-4' alt='Github' width={50} height={50}/></Link>
   <Link href="https://www.linkedin.com/in/zane-fernandes-b46b75264"><Image src='/assets/linkedin.svg' alt='Linkedin' width={50} height={50}/></Link>
     </div>
    </div>
  )
}

export default About
