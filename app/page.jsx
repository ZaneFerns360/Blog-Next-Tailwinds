import HelloWorld from './posts/hello.mdx'

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Welcome To My Blog 
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">DEV-CUT</span>
    </h1>
    <p className="desc text-center">Made by ZaneFerns360
    </p>
    <HelloWorld />
   </section>

  )
}

export default Home