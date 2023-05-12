import { Arrow } from "./components/Arrow";
import { ExperienceBox } from "./components/ExperienceBox";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const PART_1 = `I'm Eduard Mihaila, 22 years old, a web development student. Since I became passionate about coding, my goal has been to be the best at it. I'm someone who loves the challenge and needs that to live, I'm competitive at heart and enjoy working in a team. 
  `;
const PART_2 = `
A bit more about my personal life: I am the youngest of three brothers (22 and 23 years old), I am of Romanian origin and I am a rather sociable person. I am also curious and I like to learn new (mindblowing) things.`;

const PART_3 = `I love everything about computers and am open to learn new things, that's what I like the most, because progress never stops and you never get bored. I am also somewhat creative (this design is not a template nor inspired by another site) but I don't feel the need for an artistic job as these needs are already fulfilled by my hobbies`;


const App = () => (
  <>
    <NavBar> </NavBar>

    <div className="flex sch" id="idx-1">
      <div className="mx-auto max-w-4xl px-5 my-8 relative">
        <div className="flex-col justify-center">
          <div className="absolute bg-maxblue h-2 w-44 -z-10 mt-6 ml-8 opacity-70"></div>
          <h1 className="font-bold text-4xl m-8 text-left"> About me</h1>
          <p className="font-light text-lg lg:ml-8 sm:mx-auto">{PART_1}</p>
          <p className="font-light text-lg lg:ml-8 sm:mx-auto mt-4">{PART_2}</p>
          <p className="font-light text-lg lg:ml-8 sm:mx-auto mt-4">{PART_3}</p>

          <div className="mt-8">
            <Arrow dark={false} index="idx-2" color="#62B6CB"></Arrow>
          </div>
        </div>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit min-w-min w-full" id="idx-2">
      <div className="mx-auto max-w-4xl px-5 my-8 relative">
        <div className="w-full">
          <div className="flex-col">
            <div className="absolute bg-rajah h-2 w-52 mt-7 ml-8 opacity-90"></div>

            <h1 className="font-bold text-4xl m-8 z-0 relative text-whit">
              Experience
            </h1>
          </div>
          <ExperienceBox
            job_title="Front-end Developer Digitalu"
            start_d="August 2021"
            end_d="September 2021"
            job_description="React JS and Typescript frontend developement from Figma design sheets (using Tailwind Css)."
            title_color="text-rajah"
          ></ExperienceBox>
          <ExperienceBox
            job_title="Blend editor"
            start_d="August 2021"
            end_d="September 2021"
            job_description="Creation and edition of blends (Blendr.io | Saas Automation Application) for Qollabi."
            title_color="text-rajah"
          ></ExperienceBox>
          <ExperienceBox
            job_title="Fullstack Developer & Data Science (Internship)"
            start_d="February 2023"
            end_d="May 2023"
            job_description="Road traffic prediction based on synthetic data and synthetic data generation. I developed in python a highway traffic simulator that generated data, then used the data generated to train and test two models I had also developed, one being a Random Forest and the other a Recurrent Neural Network (GRU)."
            title_color="text-rajah"
          ></ExperienceBox>
        </div>
        <Arrow dark={true} index="idx-3" color="#FFAD69"></Arrow>
      </div>
    </div>

    <div className="flex min-w-min w-full sch" id="idx-3">
      <div className="max-w-4xl mx-auto my-8 px-5">
        <div className="flex-col">
          <div className="absolute bg-violet h-2 w-48 -z-10 mt-7 ml-8 opacity-70"></div>
          <h1 className="font-bold text-4xl m-8"> Formation </h1>
        </div>
        <ExperienceBox
          job_title="Informatique de gestion - Paul Lambin"
          start_d="September 2020"
          end_d="Now"
          job_description="Algorithms & Data Structures - Html & Css - PHP - PostgreSQL - Python - Java - Java Spring - Javascript  - React Js - Express Js - Flutter - Kotlin - .NET - C - C# - Assembly - Machine Learning (Python Scikit-learn, pytorch) -  UML - Agile Methodology - Linux - Azure Devops - Docker, Ansible, Terraform"
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sciences informatiques - ULB"
          start_d="September 2019"
          end_d="August 2020"
          job_description="Algorithms & Data Structure - Python - C++ - Assembly"
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sacré-Coeur de Jette - Secondaire"
          start_d="September 2012"
          end_d="July 2019"
          job_description="Mathematics, Sciences and English option"
        ></ExperienceBox>
        <Arrow dark={false} index="idx-4" color="#8F3985"></Arrow>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit" id="idx-4">
      <div className="mx-auto max-w-4xl px-5 my-8 relative text-center">
        <div className="lg:flex sm:flex-wrap w-fit-content">
          <div className="flex-col px-12 lg:w-1/2 sm:w-auto">
            <h1 className="font-bold lg:text-4xl sm:text-2xl m-8 z-0 relative cunderline w-max mx-auto">
              Languages
            </h1>
            <h2 className="lg:text-xl sm:text-sm mt-12 font-bold "> French </h2>
            <div className="my-4 bg-crayola h-4 m opacity-90 rounded-sm relative w-full mx-auto px-2"></div>
            <h2 className="lg:text-xl sm:text-sm mt-12 font-bold ">Romanian</h2>{" "}
            <div className="my-4 bg-whit h-4 m opacity-90 rounded-sm relative w-full mx-auto">
              <div className="my-4 bg-crayola h-4 m opacity-90 rounded-sm relative w-full"></div>
            </div>
            <h2 className="lg:text-xl sm:text-sm mt-12 font-bold"> English </h2>
            <div className="my-4 bg-whit h-4 m opacity-90 rounded-sm relative w-full mx-auto">
              <div className="my-4 bg-crayola h-4 m opacity-90 rounded-sm relative w-3/4"></div>
            </div>
            <h2 className="lg:text-xl sm:text-sm mt-12 font-bold">Dutch</h2>
            <div className="my-4 bg-whit h-4 m opacity-90 rounded-sm relative w-full mx-auto">
              <div className="my-4 bg-crayola h-4 m opacity-90 rounded-sm relative w-2/5"></div>
            </div>
          </div>

          <div className="flex-col px-12 lg:w-1/2 sm:w-auto">
            <h1 className="font-bold sm:text-xl lg:text-4xl mt-8 z-0 relative cunderline2 w-max mx-auto">
              Hobbies
            </h1>
            <h2 className="font-bold lg:text-xl sm:text-sm mt-12 z-0 relative ">
              Formula 1
            </h2>
            <p className="font-light mt-4 lg:text-base sm-text-sm">
              Max Verstappen fan here {"<3"}
            </p>
            <h2 className="lg:text-xl sm:text-sm mt-8 font-bold "> Music </h2>
            <p className="font-light mt-4 lg:text-base sm:text-sm">
              Playing Euphonium in a brass band since I was 12 years old, also
              plays bass guitar
            </p>
            <h2 className="lg:text-xl lg:base sm:text-sm mt-8 font-bold">
              {" "}
              VolleyBall{" "}
            </h2>
            <p className="font-light lg:text-base sm:text-sm mt-4">
              I love playing Volleyball with friends from time to time
            </p>

            <h2 className="lg:text-xl sm:text-sm mt-8 font-bold"> Movies </h2>
            <p className="font-light mt-4 lg:text-base sm:text-sm">
              Love watching movies (The Prestige's my favourite one)
            </p>
          </div>
        </div>
        <Arrow dark={true} index="idx-5" color="#DC0073"></Arrow>
      </div>
    </div>

    <Footer></Footer>
  </>
);

export default App;
