import { H2, LightText, NormalText } from "@/components/Text/Text";
import {BlurFade} from "@/components/BlurFade/BlurFade";

const projects = [
    {
        video: "/assets/topdev.mp4",
        title: "Topdev - Coding Interviews",
        date: "August 2024 - September 2024",
        description:
            "In connection with my instagram account for sharing content, I had the idea of developing an application that would allow my followers to improve their coding skills by taking part in coding interviews, with a dashboard, ai etc...",
        tags: [
            "Next.js",
            "Typescript",
            "Stripe",
            "Google Analytics",
            "Vercel",
            "MongoDB",
            "Mistral API"

        ],
        website: "https://topdev-media.com",
        type : "Website"
    },
    {
        video: "/assets/hopteo.mp4",
        title: "Hopteo Manager",
        date: "May 2024 - Jun 2024",
        description:
            "During my first internship at Hopteo, then a second one, and finally during my current work-study placement, I had the pleasure of working on this platform which allows client schools to manage their accounts on the Hopteo application and to have access to advanced statistics.",
        tags: [
            "React",
            "Express.js",
            "Stripe",
            "MongoDB",
            "Google Analytics",
            "Vercel",
        ],
        website: "https://hopteomanager.hopteo.com/",
    type : "Website"
    },
    {
        video: "/assets/ebook.mp4",
        title: "E-commerce web application",
        date: "May 2024 - Jun 2024",
        description:
            "A friend of mine contacted me to develop a website for him to sell his bodybuilding/lifestyle e-book, in keeping with his world and personality.",
        tags: [
            "React",
            "Express.js",
            "Stripe",
            "MongoDB",
            "Google Analytics",
            "Vercel",
        ],
        website: "https://www.franck-rcrd.com/",
        type : "Website"
    },
    {
        video: "/assets/productisma.mp4",
        title: "Productisma",
        date: "Sept 2024 - Oct 2024",
        description:
            "Productisma is an application that I designed as part of an academic project during my final year of a Masters degree. It's an application designed to improve user productivity. It's thanks to this application that my level in Figma and prototyping has improved enormously.",
        tags: [
            "UI/UX",
            "Figma",
            "Adobe",
        ],
        website: "https://www.figma.com/design/fA6F6sKv3h3EmaA2gRmgQh/ValentinMeraultTP?node-id=0-1&t=bMyyQiFPPor2SEo1-1",
        type : "Figma Prototype"
    },
    // Add more project objects here
];

export const Projects = () => {
    return (
        <BlurFade delay={0.25} inView>

        <div className={"mt-32 flex flex-col justify-center items-center relative"}>


            <NormalText text={'"Like and urge to code"'} className={"text-center"}/>
            <H2 text={"Selected Projects"} className={"mt-1 text-center"} />
            <LightText
                className={"text-center text-[--light-txt] mt-3 text-xl"}
                text={
                    "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
                }
            />

            <div className={"grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8"}>
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>
        </BlurFade>
    );
};
interface ProjectItemProps {
    project: {
        video: string;
        title: string;
        date: string;
        description: string;
        tags: string[];
        website: string;
        type:string;
    };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
    return (
        <div className="rounded-lg bg-card bg-[--background] flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full ">
            <a className="block cursor-pointer" href={project.website}>
                <video
                    src={project.video}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                ></video>
            </a>
            <div className="flex flex-col px-2 pt-2">
                <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight mt-1 text-base">{project.title}</h3>
                    <time className="font-sans text-xs">{project.date}</time>
                    <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-pretty font-sans text-sm text-muted-foreground  flex flex-col px-2 mt-auto">
                <div className="mt-2 flex flex-wrap gap-2 gap-y-1">
                    {project.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  px-2 py-1 text-xs  bg-[--card-bg] text-[--secondary-color] border-[--border-color]"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center pt-2 px-2 pb-2">
                <div className="flex flex-row flex-wrap items-start gap-1">
                    <a target="_blank" href={project.website}>
                        <div className="items-center rounded-md  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[--background] text-primary-foreground  hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]  border border-[--foreground]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe size-3"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            {project.type}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
