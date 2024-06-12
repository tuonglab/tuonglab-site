import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import tuongLabGroupPic from "../../public/tuong-lab-group-pic.jpeg";

export default function Home() {
  return (
    <main className="font-sans text-white font-light">
      <div
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
        <Hero />
      </div>

      {/* Other components */}
      <div className="flex flex-col items-center">
        <Values />
        <Research />
        <TheTeam />
        <Footer/>
      </div>
    </main>
  );
}






const Header = () => {
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
};

const Hero = () => {
  return (
    <div className="flex flex-grow w-full justify-center items-center z-50">
      <div className=" lg:w-[70%] w-[90%] flex flex-col gap-8">
        <p className="md:text-6xl text-5xl lg:text-left text-center">Tuong Lab</p>
        <p className="xl:w-[50%] w-[100%] md:text-xl text-md lg:text-left text-justify leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span>
          <button
            className="lg:w-auto w-full inline-block px-4 py-3 rounded-full border border-white text-xl
              duration-300 hover:bg-white hover:text-black"
          >
            Learn More
          </button>
        </span>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <div className="h-screen w-full text-white flex justify-center bg-slate-700">
      <div className="flex flex-col justify-center flex-grow container font-light">
        <h2 className="text-3xl py-8 w-full text-center">Values and Aims</h2>

        <div className="mt-20 relative h-[500px] ">
          <p className="xl:w-[40%] mt-[30px] ml-[100px] text-2xl xl:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, perferendis blanditiis. Quae harum praesentium
            voluptates consequuntur. Mollitia quos facere quae ducimus, quo
            explicabo excepturi possimus minima hic vel sunt accusamus.
          </p>

          <div className="xl:absolute xl:right-[13em] xl:top-[-1em] text-2xl text-center">
            point 1
          </div>
          <div className="xl:absolute xl:right-[18em] xl:top-[6em] text-2xl text-center">
            point 2
          </div>
          <div className="xl:absolute xl:right-[27em] xl:top-[10em] text-2xl text-center">
            point 3
          </div>
          <div className="xl:absolute xl:right-[40em] xl:top-[11.5em] text-2xl text-center">
            point 4
          </div>
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <div className="relative lg:h-[120vh] md:h-[150vh] h-[120vh] w-full text-white flex justify-center items-center">
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

      <div className="container flex flex-col flex-grow font-light items-center">
        <h2 className="text-3xl py-8 w-full text-center my-2 z-50">
          Research and Projects
        </h2>
        <div className="flex flex-1 w-full md:gap-20 gap-6 justify-center flex-wrap">
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
          <ResearchCard />
        </div>
      </div>
    </div>
  );
};


const ResearchCard = () => {
  return (
    <div className="flex flex-col relative shadow-md bg-white md:w-[250px] md:h-[360px] w-[200px] h-[300px] rounded-2xl">
      <div className=" flex h-[35%] rounded-t-2xl"></div>

      <div className="bg-slate-900 flex flex-1 rounded-b-xl relative">
        <div className="md:text-sm text-xs text-white m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptates similique ut incidunt, esse obcaecati doloremque odit atque
          minima dolorem quis delectus iure! Ex necessitatibus officia autem
          aliquid neque fugit.
        </div>
        <button className="absolute bottom-4 right-4 bg-red-700 md:py-2 py-1 px-2 rounded-xl md:text-sm text-xs">
          Learn More
        </button>
      </div>
    </div>
  );
};

const teamMembers = [
  { name: "Alice", position: "Researcher" },
  { name: "Bob", position: "Research Assistant" },
  { name: "Charlie", position: "Data Scientist" },
  { name: "David", position: "Software Engineer" },
  { name: "David", position: "Software Engineer" },
  { name: "Eve", position: "Designer" },
  { name: "Frank", position: "Project Manager" },
  { name: "Grace", position: "Intern" }
];

const TheTeam = () => {
  return (
    <div className="h-[120vh] bg-slate-700 text-white w-full flex justify-center items-center relative">
      <div className="absolute top-0 w-full text-center py-4 mt-1">
        <p className="text-3xl font-light">Meet the team</p>
      </div>
      <div className="mt-10 container relative flex flex-grow font-light items-center justify-center">
        {/* Place team members in a circular layout */}
        {teamMembers.map((member, index) => (
          <TeamMemberEntry key={index} index={index} total={teamMembers.length} member={member} />
        ))}
        {/* Team member entry for Kelvin Tuong (center) */}
        <TeamMemberEntry index={0} total={1} member={{ name: "Kelvin Tuong", position: "Professor" }} isCenter={true} />
      </div>
    </div>
  );
};



const TeamMemberEntry = ({ index, total, member, isCenter }: { index: number; total: number; member: { name: string; position: string }; isCenter?: boolean }) => {
  const angle = (index / total) * 2 * Math.PI; // Calculate the angle for each item
  const radius = isCenter ? 0 : 350; // Set radius 0 if it's the center, otherwise use the normal radius
  const x = radius * Math.cos(angle); // Calculate x position
  const y = radius * Math.sin(angle); // Calculate y position



  return (
    <div
      className="flex flex-col gap-2 absolute"
      style={{
        transform: `translate(${x}px, ${y}px)`, // Use translate to position the elements
      }}
    >
      <div className={`${isCenter ? "h-[200px] w-[200px]" : "h-[150px] w-[150px]"} bg-white rounded-full`}></div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">{member.name}</p>
        <p className="text-sm">{member.position}</p>
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