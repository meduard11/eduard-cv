import { Arrow } from "./components/Arrow";
import { DescriptionBox } from "./components/DescriptionBox";
import { ExperienceBox } from "./components/ExperienceBox";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const ABOUT_ME =
  "Je suis un étudiant en informatique de 20 ans qui est à la recherche d’un stage d’observation de 2 jours. Je suis quelqu’un de calme, ponctuel et assidu dans le travail. J’ai aussi le gout du travail bien fait. Mes années d’études ainsi que mes récentes expériences professionelles m’ont appris à être rigoureux, discipliné et curieux. ";

const App = () => (
  <>
    <div className="text-xl">
      <NavBar> </NavBar>
    </div>

    <div className="w-full flex sch" id="idx-1">
      <div className="mx-72 my-12 relative">
        <div className="absolute bg-maxblue h-2 w-44 -z-10 mt-14 ml-8 opacity-70"></div>
        <h1 className="font-bold text-4xl m-8"> About me</h1>

        <DescriptionBox text={ABOUT_ME}></DescriptionBox>
      </div>
      <div className="abs-center bottom-12">
        <Arrow dark={false} index="idx-2" color="#62B6CB"></Arrow>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit min-w-min w-full" id="idx-2">
      <div className="mx-72 my-12 relative">
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
            job_description="React JS and Typescript frontend developement from Figma design cheets full-time."
            text_color="text-rajah"
          ></ExperienceBox>
          <ExperienceBox
            job_title="Blend editor"
            start_d="August 2021"
            end_d="September 2021"
            job_description="Creation and edition of blends (Blendr.io | Saas Automation Application) for Qollabi, ponctual-time job."
            text_color="text-rajah"
          ></ExperienceBox>
          <ExperienceBox
            job_title="Technicien de maintenance maison de retraite"
            start_d="July 2022"
            end_d="August 2022"
            job_description="Je m'occupais de l'entretien de maintenance de la maison 
        de retraite, mes taches comprenaient : - Trouver une solution à la panne technique qu'il pourrait y avoir dans le batiment (porte/serrure bloquée, appareil en panne, interrupteur ou lampe en panne, meuble cassé, etc.) - Reception des livraisons et rangement dans les réserves. - Gestion du jardin. J'étais seul tout au long de la journée et devait organiser mes taches moi-même."
            text_color="text-rajah"
          ></ExperienceBox>
        </div>
        <Arrow dark={true} index="idx-3" color="#FFAD69"></Arrow>
      </div>
    </div>

    <div className="flex min-w-min w-full sch" id="idx-3">
      <div className="mx-72 m-12">
        <div className="w-1/2 flex-col">
          <div className="absolute bg-violet h-2 w-48 -z-10 mt-7 ml-8 opacity-70"></div>
          <h1 className="font-bold text-4xl m-8"> Formation </h1>
        </div>
        <ExperienceBox
          job_title="Informatique de gestion - Paul Lambin"
          start_d="September 2020"
          end_d="Now"
          job_description="Algorithms and Data Structures - Html & Css - PHP - PostgreSQL - Python - Java - Java Spring - Javascript  - React Js - Express Js - Flutter - Kotlin - .NET - C - C# - Assembly - Machine Learning (Python Scikit-learn) -  UML - Agile Methodology - Linux - Azure Devops "
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sciences informatiques - ULB"
          start_d="September 2019"
          end_d="Aout 2020"
          job_description="Python - C++ - Assembly"
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sacré-Coeur de Jette - Secondaire"
          start_d="Septembre 2012 ??"
          end_d="Aout 2019"
          job_description="Mathematics, Sciences and English option"
        ></ExperienceBox>
        <Arrow dark={false} index="idx-4" color="#8F3985"></Arrow>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit min-w-min w-full" id="idx-4">
      <div className="mx-72 m-12 flex text-center">
        <div className="w-1/2 flex-col mx-20">
          <div className="absolute bg-oruby3 h-3 w-36  mt-14 ml-24 opacity-90"></div>
          <h1 className="font-bold text-4xl m-8 z-0 relative"> Langues</h1>
          <h2 className="text-xl mt-12 font-bold "> French </h2>

          <div className="my-4 absolute bg-oruby3 h-4 w-52 ml-16 opacity-90 rounded-sm"></div>

          <h2 className="text-xl mt-16 font-bold ">Romanian</h2>

          <div className="my-4 absolute bg-whit h-4 w-52 ml-16 opacity-90 rounded-sm"></div>
          <div className="my-4 absolute bg-oruby3 h-4 w-48 ml-16 opacity-90 rounded-sm"></div>

          <h2 className="text-xl mt-16 font-bold "> English </h2>

          <div className="my-4 absolute bg-whit h-4 w-52 ml-16 opacity-90 rounded-sm"></div>
          <div className="my-4 absolute bg-oruby3 h-4 w-40 ml-16 opacity-90 rounded-sm"></div>

          <h2 className="text-xl mt-16 font-bold"> Nederlands </h2>

          <div className="my-4 absolute bg-whit h-4 w-52 ml-16 opacity-90 rounded-sm"></div>
          <div className="my-4 absolute bg-oruby3 h-4 w-20 ml-16 opacity-90 rounded-sm"></div>
        </div>

        <div className="flex-col mx-16">
          <div className="absolute bg-corn3 h-3 w-36 mt-14 ml-20 opacity-90"></div>
          <h1 className="font-bold text-4xl mt-8 z-0 relative">Hobbies</h1>
          <h2 className="font-bold text-xl mt-8 z-0 relative ">Formula 1</h2>
          <p className="font-light mt-4">Max Verstappen fan here</p>
          <h2 className="text-xl mt-8 font-bold"> VolleyBall </h2>
          <p className="font-light mt-4">
            I love playing Volleyball with friends from time to time
          </p>
          <h2 className="text-xl mt-8 font-bold"> Films </h2>
          <p className="font-light mt-4">
            Love watching films (The Prestige's my favourite one)
          </p>
          <h2 className="text-xl mt-8 font-bold "> Video Games </h2>
          <p className="font-light mt-4">
            LoL, Rainbow 6, mostly games where teamplay is necessary
          </p>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </>
);

export default App;
