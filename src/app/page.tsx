import { Forme } from "@/components/Formes/Forme/Forme";
import { About } from "@/components/About/About";
import { H1, H3 } from "@/components/Text/Text";
import { Education } from "@/components/Education/Education";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Content } from "@/components/Content/Content";
import { Contact } from "@/components/Contact/Contact";
import { Dots } from "@/components/dots/Dots";
import { BlurFade } from "@/components/BlurFade/BlurFade";
import { SmoothScroll } from "@/components/Lenis/SmoothScroll";
import {Dock} from "@/components/dock/Dock";
import { ScrollButton} from "@/components/GoTo";

export default function Page() {

    return (
        <div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)] pb-40 relative overflow-x-hidden px-6">
            <Dots />

            <SmoothScroll>
            <Forme size={200} rotation={28.32} opacity={0.6} coords={{ x: "-50px", y: "-50px" }} rounded={true} />

            <main className="w-full flex flex-col gap-50 align-middle justify-center m-auto max-w-2xl">
                <Dock/>
                <BlurFade delay={0.25} inView>

                    <div className={"flex flex-col gap-1 h-svh justify-center m-auto"}>

                        <H1 text={<>I’m Valentin<br />MERAULT,</>} />
                        <H3 text={<>FullStack developer, UI/UX Designer and Content creator... I love building things and helping people.</>} />
                        {/* Ajout du gestionnaire d'événements au clic */}
                        <ScrollButton targetId="about" offset={-100} buttonText="Learn more about me" className="text-[--purple]" />
                    </div>
                </BlurFade>

                <Forme size={220} rotation={28.32} coords={{ x: "75%", y: "80svh" }} parallax={true} parallaxRange={[200, 0]} />

                {/* Section About avec le ref */}
                <section id={"about"} className={"w-full mx-auto mt-10"}>
                    <About />
                    <Forme size={150} rotation={28.32} opacity={0.29} coords={{ x: "-60px", y: "auto" }} rounded={true} parallax={true} parallaxRange={[300, 0]} />
                    <Education />
                    <Forme size={100} rotation={150} opacity={0.63} coords={{ x: "90%", y: "auto" }} parallax={true} parallaxRange={[400, 0]} />
                    <Skills />
                    <div className={"relative"}>
                        <Projects />
                        <Forme size={100} rotation={150} opacity={0.63} coords={{ x: "60%", y: "140px" }} rounded={true} parallax={true} parallaxRange={[-200, 0]} />
                    </div>

                    <div className={"relative"}>
                        <Content />
                        <Forme size={100} rotation={100} opacity={0.8} coords={{ x: "100%", y: "400px" }} rounded={true} parallax={true} parallaxRange={[-100, 100]} />
                        <Forme size={300} rotation={170} opacity={2} coords={{ x: "-200px", y: "-300px" }} parallax={true} parallaxRange={[-100, 0]} />
                    </div>

                    <Contact />
                </section>
            </main>
            <div
            className={"fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"}>

            </div>
                </SmoothScroll>
        </div>
    );
}
