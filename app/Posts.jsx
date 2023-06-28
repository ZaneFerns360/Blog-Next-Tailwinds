"use client";
import HelloWorld from './posts/hello.mdx'

const Posts= () => {
    return (
     <section className="w-full flex-center flex-col text-black">
      <div className='text-center'>
        <HelloWorld/>
      </div>
   
      
     </section>
  
    )
  }
  
  export default Posts