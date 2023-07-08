import { getPostBySlug } from '@/lib/mdx'

const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }) => {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <section className='py-20'>
      <div className='container prose max-w-full items-center'>
        {content}
        This article was written by <p className='mt-4 text-sm'>{meta.author}</p>
      </div>
    </section>
  )
}

export default Page
