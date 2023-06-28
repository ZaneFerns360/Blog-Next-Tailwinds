 
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Heading, InlineCode, Pre, Table, Text } from 'my-components'
 
const ResponsiveImage = (props) => (
  <Image alt={props.alt} sizes="100vw" {...props} />
)
 
const components = {
  img: ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  pre: Pre,
  code: InlineCode,
}
 
export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}