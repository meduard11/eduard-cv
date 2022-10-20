import { Arrow } from "./components/Arrow";
import { DescriptionBox } from "./components/DescriptionBox";
import { ExperienceBox } from "./components/ExperienceBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const ABOUT_ME =
  "Je suis un étudiant en informatique de 20 ans qui est à la recherche d’un stage d’observation de 2 jours. Je suis quelqu’un de calme, ponctuel et assidu dans le travail. J’ai aussi le gout du travail bien fait. Mes années d’études ainsi que mes récentes expériences professionelles m’ont appris à être rigoureux, discipliné et curieux. ";
const HOBBIES = "";

const App = () => (
  <>
    <div className="text-xl">
      <Header> </Header>
    </div>

    <div className="w-full flex-col min-w-min sch" id="idx-1">
      <div className="mx-72 m-12">
        <div className="w-1/2 flex-col">
          <div className="absolute bg-maxblue h-2 w-44 -z-10 mt-5 ml-8 opacity-50"></div>
          <div className="absolute bg-maxblue h-2 w-48 -z-10 mt-7 ml-8 opacity-70"></div>
          <h1 className="font-bold text-4xl m-8"> About me</h1>
        </div>

        <DescriptionBox text={ABOUT_ME}></DescriptionBox>
      </div>
      <div className="mt-12">
        <Arrow dark={false} index="idx-2" color="#62B6CB"></Arrow>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit min-w-min w-full" id="idx-2">
      <div className="mx-72 my-12 relative">
        <div className="w-full">
          <div className="flex-col">
            <div className="absolute bg-rajah h-2 w-52  mt-7 ml-8 opacity-90"></div>
            <h1 className="font-bold text-4xl m-8 z-0 relative"> Experience</h1>
          </div>
          <ExperienceBox
            job_title="Front-end Developer Digitalu"
            start_d="August 2021"
            end_d="September 2021"
            job_description="React JS and Typescript frontend developement from Figma design cheets full-time."
          ></ExperienceBox>
          <ExperienceBox
            job_title="Blend editor"
            start_d="August 2021"
            end_d="September 2021"
            job_description="Creation and edition of blends (Blendr.io | Saas Automation Application) for Qollabi, ponctual-time job."
          ></ExperienceBox>
          <ExperienceBox
            job_title="Technicien de maintenance maison de retraite"
            start_d="July 2022"
            end_d="August 2022"
            job_description="Je m'occupais de l'entretien de maintenance de la maison 
        de retraite, mes taches comprenaient : - Trouver une solution à la panne technique qu'il pourrait y avoir dans le batiment (porte/serrure bloquée, appareil en panne, interrupteur ou lampe en panne, meuble cassé, etc.) - Reception des livraisons et rangement dans les réserves. - Gestion du jardin. J'étais seul tout au long de la journée et devait organiser mes taches moi-même."
          ></ExperienceBox>
        </div>
        <Arrow dark={true} index="idx-3" color="#FFAD69"></Arrow>
      </div>
    </div>

    <div className="flex min-w-min w-full sch" id="idx-3">
      <div className="mx-72 m-12">
        <div className="w-1/2 flex-col">
          <div className="absolute bg-violet h-2 w-48 -z-10 mt-5 ml-8 opacity-50"></div>
          <div className="absolute bg-violet h-2 w-52 -z-10 mt-7 ml-8 opacity-70"></div>
          <h1 className="font-bold text-4xl m-8"> Formation </h1>
        </div>
        <ExperienceBox
          job_title="Informatique de gestion - Paul Lambin"
          start_d="September 2020"
          end_d="Now"
          job_description="Compétences enseignées : - Html & Css - PHP - Python - Java - Javascript - Flutter - Kotlin - .NET - C - C# - Linux - Azure Devops - Assembly - Agile - Spring - React Js - Express Js - Machine Learning (Python Scikit-learn) - Sécurité web bases - UML - Anglais"
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sciences informatiques - ULB"
          start_d="September 2019"
          end_d="Aout 2020"
          job_description="Compétences enseignées : - Python - C++ - Assembly"
        ></ExperienceBox>
        <ExperienceBox
          job_title="Sacré-Coeur de Jette - Secondaire"
          start_d="Septembre 2012 ??"
          end_d="Aout 2019"
          job_description="Options sciences - math - anglais"
        ></ExperienceBox>
        <Arrow dark={false} index="idx-4" color="#8F3985"></Arrow>
      </div>
    </div>

    <div className="sch flex bg-grr text-whit min-w-min w-full" id="idx-4">
      <div className="mx-72 m-12 flex">
        <div className="w-1/2 flex-col">
          <div className="absolute bg-oruby3 h-3 w-40  mt-14 ml-8 opacity-90"></div>

          <h1 className="font-bold text-4xl m-8 z-0 relative"> Langues</h1>
          <ExperienceBox
            job_title=" -- Français -- "
            job_description="Langue natale"
          ></ExperienceBox>
          <ExperienceBox
            job_title=" -- Roumain -- "
            job_description="Langue natale"
          ></ExperienceBox>
          <ExperienceBox
            job_title=" -- Anglais -- "
            job_description="Basics and technical english"
          ></ExperienceBox>
          <ExperienceBox
            job_title=" -- Néerlandais -- "
            job_description="Basics need some practice to be fluent"
          ></ExperienceBox>
        </div>
        <div className="flex-col ml-32">
          <div className="absolute bg-corn3 h-3 w-40 mt-14 ml-8 opacity-90"></div>
          <h1 className="font-bold text-4xl m-8 z-0 relative"> Hobbies </h1>
          <p className="font-light ml-8 mt-2"> Formula 1 </p>
          <p className="font-light ml-8 mt-2"> Volleyball</p>
          <p className="font-light ml-8 mt-2"> Anime </p>
          <p className="font-light ml-8 mt-2"> Cinema </p>
        </div>
      </div>
      <div>
        <Arrow dark={true} index="idx-5" color="#FF6A6A"></Arrow>
      </div>
    </div>

    <Footer></Footer>
  </>
);

export default App;
