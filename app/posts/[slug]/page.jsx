import { getPostBySlug } from '@/lib/mdx'
import Image from "next/image";

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return {
    title: meta.title,
    author: meta.author,
    publishDate: meta.publishDate,
    image: meta.image,
    description: meta.description
  }
}

const Page = async ({ params }) => {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <section className='py-20'>
      <div className='container prose items-center sm:pr-0 pl-8'>
      <Image src={meta.image} alt='Post Image' width={400} height={300} className='object-contain' />
        {content}
        This article was written by <p className='mt-4 text-sm'>{meta.author}</p>
      </div>
    </section>
  )
}

export default Page
