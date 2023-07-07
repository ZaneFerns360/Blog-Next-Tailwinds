import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex-center flex-col"><Image src='/assets/zane.JPG' alt='Author Image'
     width={200} height={200} className='rounded-lg' />
     <h1 className="head_text text-center">
        
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">I'm Zane</span>
    </h1>
    <p className='mt-4 text-3xL font-bold leading-[1.15] '>Studying computer engineering from Mumbai University</p>
    </div>
  )
}

export default About