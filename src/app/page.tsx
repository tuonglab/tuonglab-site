"use client"
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import tuongLabGroupPic from "../../public/tuong-lab-group-pic.jpeg";
import { FaChild } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdScience } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";

import tuonglablogo from  "../../public/lab_logo.pdf-image-000-removebg-preview.png"

export default function Home() {

  const screenHeightRef = useRef(null)

  const handleScrollToVisionMission = () => {
    if (screenHeightRef.current) {
      const topOffset = (screenHeightRef.current as HTMLDivElement).clientHeight; // Assert as HTMLDivElement
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="font-sans text-white font-light">
      <div
        ref={screenHeightRef}
        className="flex min-h-screen flex-col items-center justify-between relative"
      >
        {/* Opacity overlay */}
        <div
          className="absolute inset-0 bg-red-900 opacity-[80%]"
        ></div>

        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${tuongLabGroupPic.src})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: -1, // Set a negative z-index for the background image
          }}
        ></div>

        {/* Header and Hero components */}
        <Header />
        <Hero handleScrollToVisionMission={handleScrollToVisionMission}/>
      </div>

      {/* Other components */}
      <div className="flex flex-col items-center">
        <VisionAndMission />
        <Research />
        <TheTeam />
        <Footer/>
      </div>
    </main>
  );
}






const Header = () => {
  return (
    <div className="container flex justify-around items-center py-[25px] font-light z-50 mt-2">
      <ul className="flex gap-6 text-lg items-center">
        <Image
            src={tuonglablogo} // Replace with your image URL
            alt="Image description"
            width={70} // Adjust width as needed
            height={70} // Adjust height as needed
          />
        <li className="cursor-pointer transition-colors duration-150 hover:text-amber-400">Vision & Mission</li>
        <li className="cursor-pointer transition-colors duration-150 hover:text-amber-400 ">Research</li>
        <li className="cursor-pointer transition-colors duration-150 hover:text-amber-400">Team</li>
        <li className="cursor-pointer transition-colors duration-150 hover:text-amber-400">Publications</li>
      </ul>

      <div className="">
        <FaGithub size={30} className="cursor-pointer transition-colors duration-150 hover:text-red-400" />
      </div>
    </div>
  );
};

const Hero = ({ handleScrollToVisionMission }: {
  handleScrollToVisionMission: () => void
}) => {
  return (
    <div className="flex flex-grow w-full justify-center items-center z-50">
      <div className=" lg:w-[70%] w-[90%] flex flex-col gap-8">
        <p className="md:text-6xl text-5xl lg:text-left text-center">Tuong Lab</p>
        <p className="xl:w-[50%] w-[100%] md:text-xl text-md lg:text-left text-justify leading-1">
        Our lab is dedicated to the cutting-edge research in the field of immunology using computational approaches. Here, we combine the power of computer science and biology to unravel the complexities of the immune system.
        </p>
        <span>
          <button
          onClick={handleScrollToVisionMission}
            className="lg:w-auto w-full inline-block px-4 py-3 rounded-full border border-white text-xl
              duration-300 hover:bg-white hover:text-black "
          >
            Learn More
          </button>
        </span>
      </div>
    </div>
  );
};

const VisionAndMission = () => {
  return (
    <div className="md:h-[80vh] h-[100vh] w-full text-amber-600 flex justify-center bg-neutral-200 border-t border-b border-gray-400">
      <div className="flex flex-col justify-center items-center flex-grow container font-light gap-20">
        <h2 className="text-4xl py-8 w-full text-center text-neutral-600">Vision & Missions</h2>

        <div className=" flex flex-col items-center md:gap-20 gap-3">
          <h2 className="text-3xl md:w-[55%] w-[85%]">Pioneering child health interventions and solutions through computational immunology analysis, innovative therapies, and early detection methods.</h2>
          <ul className="flex justify-between md:w-[65%] w-[85%] ">
            <li className="flex flex-col items-center justify-center gap-3">
              <div className="text-4xl rounded-full p-5 shadow-md hover:bg-neutral-300 transition-colors duration-300 cursor-pointer">
              <MdScience size={50} className="cursor-pointer transition-colors duration-300 hover:text-amber-700" />
              </div>
              <p className="text-md  max-w-[150px] text-center text-neutral-600">Study T and B cell receptors</p>
            </li>
            <li className="flex flex-col items-center justify-center gap-3">
              <div className="text-4xl rounded-full p-5 shadow-md hover:bg-neutral-300 transition-colors duration-300 cursor-pointer">
              <BiCodeAlt size={50} className="cursor-pointer transition-colors duration-300 hover:text-red-700" />
              </div>
              <p className="text-md max-w-[200px] text-center text-neutral-600">Develop single-cell receptor analysis tools</p>
            </li>
            <li className="flex flex-col items-center justify-center gap-3">
              <div className="text-4xl rounded-full p-5 shadow-md hover:bg-neutral-300 transition-colors duration-300 cursor-pointer">
              <HiOutlineLightBulb size={50} className="cursor-pointer transition-colors duration-300 hover:text-red-700" />
              </div>
              <p className="text-md max-w-[200px] text-center text-neutral-600">Innovate T/B cell response tracking</p>
            </li>
            <li className="flex flex-col items-center justify-center gap-3">
              <div className="text-4xl rounded-full p-5 shadow-md hover:bg-neutral-300 transition-colors duration-300 cursor-pointer">
              <FaPeopleGroup size={50} className="cursor-pointer transition-colors duration-300 hover:text-red-700 " />
              </div>
              <p className="text-md max-w-[200px] text-center text-neutral-600">Collaborate with IFCCIR and UQ</p>
            </li>
          </ul>
          <i className="text-2xl text-neutral-600">Hover to find out more about our missions</i>
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <div className="relative md:h-[120vh] h-[165vh] w-full text-white flex justify-center items-center">
      {/* Parallax background */}

              {/* Opacity overlay */}
              <div
          className="absolute inset-0 bg-red-900 opacity-[90%]"
        ></div>

      <div
        className="absolute inset-0 z-[-1] bg-red-900 bg-opacity-20"
        style={{
          backgroundImage: `url(${tuongLabGroupPic.src})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container flex flex-col flex-grow font-light items-center sm:gap-32">
        <h2 className="text-4xl py-8 w-full text-center my-2 z-50">
          Research & Projects
        </h2>
        <div className="flex flex-1 w-full md:gap-20 gap-6 justify-center flex-wrap">
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
        </div>
      </div>
    </div>
  );
};

import kelvin_pic from "../../public/member-portraits/13353.jpeg"
import john_pic from "../../public/member-portraits/JohnSaxon.jpg"
import megan_pic from "../../public/member-portraits/Megan-Headshot.jpg"
import amos_pic from "../../public/member-portraits/AmosChoo.jpg"
import nicole_pic from "../../public/member-portraits/n-gunn.jpg"
import alicia_pic from "../../public/member-portraits/AliciaHarasty.jpg"
import charlotte_pic from "../../public/member-portraits/charlotte-tsui.jpg"
import xiaohan_pic from "../../public/member-portraits/XiaohanXu.jpg"
import hiuon_pic from "../../public/member-portraits/HiuonMan.jpg"
import norman_pic from "../../public/member-portraits/NormanYap.jpg"
import rohan_pic from "../../public/member-portraits/RohanVandermerwe.jpg"

const ResearchCard = () => {
  return (
    <div className="flex flex-col relative shadow-md bg-slate-500 lg:w-[300px] lg:h-[440px] sm:w-[200px] sm:h-[300px] w-[150px] h-[250px] rounded-2xl">
      <div className="flex h-[35%] rounded-t-2xl relative">
        <Image
          src={john_pic}
          alt="Image description"
          layout="fill" // This fills the parent container with the image
          objectFit="cover" // Ensures the image covers the entire area without stretching
          className="rounded-t-2xl" // Optional: Apply rounded corners to match the container
        />
      </div>

      <div className="bg-neutral-200 flex flex-1 rounded-b-xl relative">
        <div className="lg:text-sm text-[11px] text-neutral-600 m-4 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptates similique ut incidunt, esse obcaecati doloremque odit atque
          minima dolorem quis delectus iure! Ex necessitatibus officia autem
          aliquid neque fugit.
        </div>
        <button className="absolute italic bottom-4 right-4 bg-amber-600 transition-colors duration-300 hover:bg-amber-800 md:py-3 py-1 px-3 rounded-xl md:text-sm text-xs">
          Learn More
        </button>
      </div>
    </div>
  );
};



const teamMembers = [
  { name: "Ms Nicole Gunn", position: "Casual Research Assistant", pic: nicole_pic},
  { name: "Ms Alicia Harasty", position: "Casual Research Assistant", pic: alicia_pic},
  { name: "Charlotte Tsui", position: "UQ MD student (UWEF)", pic:charlotte_pic },
  { name: "John Saxon", position: "UQ MD student (UWEF)", pic:john_pic },
  { name: "Xiaohan Xu", position: "Masters in Bioinformatics" , pic:xiaohan_pic},
  { name: "Norman Yap", position: "IT (Honours)" , pic: norman_pic},
  { name: "Hiuon Man", position: "Masters in Bioinformatics" , pic:hiuon_pic},
  { name: "Rohan van der Merwe", position: "Biotechnology (Honours)", pic:rohan_pic },
  { name: "Dr Megan Soon", position: "Postdoctoral Research Fellow", pic: megan_pic },
  { name: "Mr Amos Choo", position: "Casual Research Assistant", pic: amos_pic},
];

const TheTeam = () => {
  return (
    <div className="h-[140vh] bg-neutral-200 text-neutral-600 w-full flex justify-center items-center relative border-t border-b border-gray-400">
      <div className="absolute top-0 w-full text-center py-4 mt-14">
        <p className="text-4xl">Meet the Team</p>
      </div>
      <div className="container relative flex flex-grow font-light items-center justify-center">
        {/* Place team members in a circular layout */}
        {teamMembers.map((member, index) => (
          <TeamMemberEntry key={index} index={index} total={teamMembers.length} member={member} />
        ))}
        {/* Team member entry for Kelvin Tuong (center) */}
        <TeamMemberEntry index={0} total={1} member={{ name: "Dr Kelvin Tuong", position: "Group Leader", pic: kelvin_pic }} isCenter={true} />
      </div>
    </div>
  );
};



const TeamMemberEntry = ({ index, total, member, isCenter }: { index: number; total: number; member: { name: string; position: string; pic: StaticImageData }; isCenter?: boolean }) => {
  const angle = (index / total) * 2 * Math.PI; // Calculate the angle for each item
  const radius = isCenter ? 0 : 410; // Set radius 0 if it's the center, otherwise use the normal radius
  const x = radius * Math.cos(angle); // Calculate x position
  const y = radius * Math.sin(angle); // Calculate y position



  return (
    <div
      className="flex flex-col gap-2 absolute"
      style={{
        transform: `translate(${x}px, ${y}px)`, // Use translate to position the elements
      }}
    >
      <div className={`${isCenter ? "md:h-[200px] md:w-[200px]" : "md:h-[120px] md:w-[120px]"}  rounded-full shadow-lg  `}>
        <Image
          src={member.pic} // Replace with your image URL
          alt="Image description"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className={`${member.name === "Kelvin Tuong" ? "text-2xl" : "text-xl"} font-semibold`}>{member.name}</p>
        <p className={`${member.name === "Kelvin Tuong" ? "text-xl" : "text-md"}`}>{member.position}</p>
      </div>
    </div>
  );
};




const Footer = () => {
  return (
    <div className="container flex justify-around items-center py-[25px] font-light z-50">
      <ul className="flex gap-6 text-lg">
        <li className="pr-6 cursor-pointer">logo</li>
        <li className="cursor-pointer">Aims</li>
        <li className="cursor-pointer">Research</li>
        <li className="cursor-pointer">Team</li>
        <li className="cursor-pointer">Publications</li>
      </ul>

      <div className="">
        <FaGithub size={30} className="cursor-pointer" />
      </div>
    </div>
  );
}