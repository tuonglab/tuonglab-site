import Image from "next/image";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-red-800 font-sans text-white ">
      <Header/>
      <Hero/>
    </main>
  );
}

const Header = () => {
  return(
    <div className="container flex justify-around items-center py-[25px] ">
      <ul className="flex gap-6 text-2xl">
        <li className="pr-6">logo</li>
        <li>Aims</li>
        <li>Research</li>
        <li>Team</li>
        <li>Publications</li>
      </ul>

      <div className="">
      <FaGithub size={40} className=""/>
      </div>
    </div>    
  )
}


const Hero = () => {
  return(
   <div className="flex flex-grow  w-full justify-center items-center">
       <div className=" w-[70%] flex flex-col gap-10">
          <p className="text-7xl">Tuong Lab</p>
          <p className="w-[50%] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
        </div> 
   </div>
  )
}