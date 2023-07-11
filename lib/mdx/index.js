import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'app', 'content')

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getPostByTitle = async title => {
  const decodedTitle = decodeURIComponent(title)
  const files = fs.readdirSync(rootDirectory)

  for (const file of files) {
    const { meta, content } = await getPostBySlug(file)
    if (meta.title === decodedTitle) {
      return { meta, content }
    }
  }

  throw new Error(`No post found with title "${decodedTitle}"`)
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
