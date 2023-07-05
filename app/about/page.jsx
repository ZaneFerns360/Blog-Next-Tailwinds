import Image from "next/image";

const About = () => {
  return (
    <div><Image src='/assets/zane.JPG' alt='Author Image'
     width={200} height={200} className='rounded-lg' />
    <p className='mt-4 text-2XL'>This is the about me page.</p></div>
  )
}

export default About