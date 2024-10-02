import {Forme} from "@/components/Formes/Forme/Forme";
import {About} from "@/components/About/About";
import {H1, H3} from "@/components/Text/Text";
import {Education} from "@/components/Education/Education";
import {Skills} from "@/components/Skills/Skills";
import {Projects} from "@/components/Projects/Projects";
import {Content} from "@/components/Content/Content";
import {Contact} from "@/components/Contact/Contact";
import {Dots} from "@/components/dots/Dots";
import { ArrowRight} from "lucide-react";

export default function Home() {

    return (
      <div className="w-full min-h-screen  font-[family-name:var(--font-geist-sans)] pb-28 overflow-x-hidden">
        <Dots/>
          <Forme size={200} rotation={28.32} opacity={0.6} coords={{x: "-50px", y: "-50px"}} rounded={true}/>

          <main className="w-full flex flex-col gap-50 align-middle justify-center  m-auto max-w-2xl">

              <div className={"flex flex-col gap-1 h-svh justify-center  m-auto"}>
                  <H1 text={<>I’m Valentin<br/>MERAULT,</>}/>
                  <H3 text={<>FullStack developer, UI/UX Designer and Content creator...
                      I love building things and helping people.</>}/>

                  <a href="/about" className="btn text-[--purple] mt-5 text-lg flex flew-row gap-1 items-center">Learn more about me <ArrowRight/></a>
              </div>
              <Forme size={220} rotation={28.32} coords={{x: "75%", y: "80svh"}}/>
              <section className={"w-full mx-auto mt-10 "}>
                  <About/>
                  <Forme size={150} rotation={28.32} opacity={0.29} coords={{x: "-60px", y: "auto"}} rounded={true}/>
                  <Education/>
                  <Forme size={100} rotation={150} opacity={0.63} coords={{x: "90%", y: "auto"}}/>
                  <Skills/>
                  <Projects/>
                  <Content/>
                  <Contact/>
              </section>

          </main>
      </div>
  );
}
