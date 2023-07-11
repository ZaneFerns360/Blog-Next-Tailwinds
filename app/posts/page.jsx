import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/mdx'
import Image from "next/image";

const Page = async () => {
  const posts = await getAllPostsMeta()

  return (
    <div>
      
      <section className='py-20'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>All Posts</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
            {posts?.map(post => (
              <Link href={`posts/${encodeURIComponent(post.title)}`} key={post?.title} className='p-8 rounded-md shadow-md'>

                <h3 className='text-xl font-semibold'>{post.title}</h3>
                {post.image && (
                  <Image src={post.image} alt='Post Image' width={90} height={50} className='object-contain' />
                )}
                <p className='mt-4 text-sm'>{post.author}</p>
                <time className='text-[12px] text-gray-400'>
                  {post.publishDate}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
