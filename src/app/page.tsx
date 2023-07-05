import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image"
import profile from "../../public/profile.jpg"

export default function Home() {
  return (
   <div>
    <main className="bg-white px-10">
      <section className="h-screen ">
        <nav className="py-4 mb-1">
          <h1 className='font-bold'><code>Bruce</code></h1>
        </nav>
        <div className="text-center">
          <h2 className='text-4xl py-2 text-teal-700 font-medium'>OBruce Simiyu</h2>
          <h3 className='py-2 font-medium'>Web Developer | Technical Writer</h3>
          <p className='leading-6 py-3 text-gray-900'>A freelance web developer with passion for the frontend.
            Enjoys working with React, TypeScript and JavaScript technologies. 
            You will also find me using Tailwind CSS
          </p>
        </div>
        <div className='text-3xl flex justify-center gap-16'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className=''>
          <Image src={profile} alt=""/>

        </div>
      </section>
    </main>
   </div> 

  )
}
