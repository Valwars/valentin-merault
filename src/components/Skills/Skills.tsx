import {H2} from "@/components/Text/Text";


const skills = [
    "Github",
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe",
    "Vue.js",
    "Php",
    "Java",
    "Python",
    "Google Analytics",
    "Figma",
    "Canva Pro",
    ]

export const Skills = () => {
    return (
        <div className={"mt-16"}>
            <H2 text={"Skills"}/>
            <div className={"flex flex-wrap gap-y-3  gap-x-2 mt-3"}>
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill}/>
                ))}
            </div>
        </div>
    )
}

interface SkillProps {
    name: string;
}

const Skill = ({name}: SkillProps) => {
    return (<div className={"bg-[--card-bg] py-1 px-2 rounded-md font-medium border border-[--border-color]"}>{name}</div>)
}