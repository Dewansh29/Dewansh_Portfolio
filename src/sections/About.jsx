import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe"; 
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end overflow-hidden grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            alt="A stylized view of code on a screen"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-1/2 md:-translate-x-1/2 md:top-10 lg:scale-[2.5]"
          />
          <div className="z-10 p-4">
            <p className="headtext">Hi, I'm Dewansh Jha</p>
            <p className="subtext">
              An AI and Machine Learning practitioner passionate about developing
              intelligent systems and bringing them to life through full-stack web
              technologies.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-900" />
        </div>

        {/* Grid 2 */}
        <div className="relative grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ transform: "rotate(75deg)", top: "30%", left: "20%" }}
              text="Scalable"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-30deg)", top: "60%", left: "45%" }}
              text="Robust"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(90deg)", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-45deg)", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(20deg)", top: "10%", left: "38%" }}
              text="Elegant"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(30deg)", top: "70%", left: "70%" }}
              image="/assets/logos/icons8-c++-48.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-45deg)", top: "70%", left: "25%" }}
              image="/assets/logos/images.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-45deg)", top: "5%", left: "10%" }}
              image="/assets/logos/Python-logo-notext.svg.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ transform: "rotate(-75deg)", top: "6%", left: "70%" }}
              image="/assets/logos/javalogo.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
         <div className="relative overflow-hidden grid-black-color grid-3">
          <div className="relative z-10 w-[50%] p-4">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in India (IST), I'm experienced in collaborating with teams across different time zones.
            </p>
          </div>
          
          {/* FIX: Updated classes for responsive size and position */}
          <figure className="absolute w-[250px] h-[250px] left-[40%] top-[15%] md:w-[350px] md:h-[350px] md:left-1/2 md:top-[25%] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <Globe className="!static w-full h-full max-w-full max-h-full" />
            </div>
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid  5*/}
        {/* Grid 5 */}
<div className="relative overflow-hidden grid-default-color grid-5">
          {/* FIX: Changed w-full to w-3/5 for better text wrapping on mobile */}
          <div className="z-10 w-3/5 p-4 md:w-1/2">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          
          <div className="absolute inset-y-0 w-full h-full left-1/2 -translate-x-1/2 z-0">
            <Frameworks />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;