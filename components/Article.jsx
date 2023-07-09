import Link from "next/link";
import Image from "next/image";

const Article = () => {
  return (
    <div>
        <div className='flex flex-center'>
        <form className='w-96 flex max-sm:w-60'>
          <input type='text' className='search_input' placeholder='Search for'/>
        </form>
      </div>
    </div>
  )
}

export default Article