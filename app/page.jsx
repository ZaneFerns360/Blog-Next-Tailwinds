import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'
import Image from "next/image";

const Home = async () => {
  const posts = await getAllPostsMeta({ limit: 6 })
  return (
    <div>
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Welcome To My Blog 
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">DEVCUT</span>
    </h1>
    <p className="desc text-center">Made by ZaneFerns360
    </p>
    
   </section>
   <div className="py-9">
   <h2 className="head_text text-center">
        
        <span className="orange_gradient text-center">Latest Posts:</span>
    </h2>
    <section className='py-7'>
        
        <div className='flex-col gap-6 mt-6'>
          {posts?.map(post => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md flex'
            >
              
              <h3 className='text-2xl font-semibold'>{post.title}</h3>
              <p className='mt-2 text-sm px-10'>By {post.author}</p>
              <time className='text-[12px] text-gray-400 px-10'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
      
    </section>
   </div>
   </div>

  )
}

export default Home