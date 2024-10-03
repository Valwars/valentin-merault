import {H2, LightText, NormalText} from "@/components/Text/Text";
import {BlurFade} from "@/components/BlurFade/BlurFade";

const education = [
    {
        img: "/assets/enac.webp",
        place: "ENAC - National Civil Aviation School, Toulouse France",
        date: "2024-2025",
        description: "Final year of a Masters in HMI (Human-Computer Interaction)",
        link:"https://www.enac.fr/"
    },
    {
        img: "/assets/paulsab.webp",
        place: "University of Paul Sabatier, Toulouse France",
        date: "2023-2024",
        description: "First year of a Master's degree in HMI (Human-Computer Interaction)",
        link:"https://masterihm.fr//"
    },
    {
        img: "/assets/champ.webp",
        place: "University of Champollion, Albi France",
        date: "2020-2023",
        description: "Bachelor's degree in Computer Science",
        link:"https://www.univ-jfc.fr/"
    },
]

export const Education = () => {
    return (

        <BlurFade delay={0.25} inView>
            <div
                className={"mt-16"}
            >
                <H2 text={"Education"}/>
                <div className={"w-full flex flex-col mt-3 content-container"}>
                    {education.map((item, index) => (
                        <EducationItem key={index} {...item}/>
                    ))}
                </div>
            </div>
        </BlurFade>
    )
}

interface EducationItemProps {
    img: string;
    place: string;
    date: string;
    description: string;
    link: string;
}

const EducationItem = ({img, place, date, description, link}:EducationItemProps) => {

    return (
        <a href={link}>


        <div className={"flex flex-row justify-between w-full py-2 gap-2 pb-8 flex-wrap"}>
            <div className={"flex flex-row gap-3"}>
                <div className={"flex-none"}>
                      <span
                          className={"relative flex shrink-0 overflow-hidden rounded-full border-solid border-2 border-[--border-color] size-12 m-auto bg-muted-background dark:bg-foreground"}>
                    <img src={img} alt={place}
                         className={"aspect-square h-full w-full object-contain"}/>
                </span>
                </div>

                <div>
                    <NormalText text={place} className={"font-semibold"}/>
                    <LightText text={description} className={"text-xs"}/>
                </div>
            </div>
            <p className={"text-xs w-max ml-auto"}>{date}</p>
        </div>  </a>
    )
}