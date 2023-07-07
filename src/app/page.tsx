'use client'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image"
import profile from "../../public/profile.jpg"
import { ThemeProvider, useTheme } from "next-themes";
 


export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
  <ThemeProvider attribute="class">  
   <div>
    <main className="bg-white text-black px-10">
      <section className="h-screen ">
        <nav className="py-4 mb-1">
          <h1 className="font-bold">OBruce</h1>
        </nav>
        <div className="text-center">
          <h2 className="text-4xl py-2 text-teal-700 font-medium">OBruce Simiyu</h2>
          <h3 className="py-2 font-medium">Web Developer | Technical Writer</h3>
          <p className="leading-6 py-3 text-red-300">A freelance web developer with passion for the frontend.
            Enjoys working with React, TypeScript and JavaScript technologies. 
            You will also find me using Tailwind CSS
          </p>
        </div>
        <div className="text-3xl flex justify-center gap-16 py-8">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="w-40 h-40 m-auto text-center">
          <Image src={profile} alt="" className="rounded-full"/>

        </div>
      </section>
      <section className="leading-6 ">
        <h2 className="font-extrabold text-3xl">About</h2>
        <h1>I am a full stack software craftsman with a soft spot for the frontend.
          I use my curiosity, obsessive attention to detail, unequivocal love for 
          creation of things and a mission-driven work ethic to literally extend the boundaries
          of whats possible in the world of technology.
        <br />
        I have a working proficiency in JavaScript, TypeScript, React/Next, Tailwind CSS, and Styled Components
          I focus primarily on delivering clean code that is easy to maintain and scale using Test Driven Development. <br /><br />
          Additionally, I specialize in creating concise, detailed and accurate documents that helps developers comprehend
          even the most complex systems and topics. I have experience in creating user manuals, software documents, and technical reports.<br /><br />
          Away from work, when the screens go off, My creativity continues to flow as a cueist and quadbike speed junkie. <br /><br />
          Here is my technology toolbelt:
           </h1> 
        <ul className="text-sm mx-auto text-center">
         
              <li className="py-1 my-2">
                  <span className="bg-blue-600 rounded p-1 mx-2">JavaScript</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">Ruby</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">Tailwind CSS</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">React/Redux</span><br />
              </li>
              <li className="my-2 py-1">    
                  <span className="bg-blue-600 rounded p-1 mx-2">Next</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">TypeScript</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">ShadCN</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">AWS</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">GraphQL</span><br />
                  
              </li> 
            
              <li className="my-2 py-1">
                  <span className="bg-blue-600 rounded p-1 mx-2">Vitest</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">GitHub Actions</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">Git/GitHub</span>
                  <span className="bg-blue-600 rounded p-1 mx-2">RESTful API</span><br />
              </li>
        </ul>   
      </section>
    <span className="cursor-pointer">
        <span onClick={()=>setTheme("Light")}>Light</span> | {" "}
        <span onClick={()=>setTheme("Dark")}>Dark</span> | ({theme})

    </span>
    </main>
   </div> 
   </ThemeProvider>

  )
}
