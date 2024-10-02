import {H2, LightText, NormalText} from "@/components/Text/Text";
import {Forme} from "@/components/Formes/Forme/Forme";

const content = [
    {
        img: "/assets/topdev.png",
        title: "Topdev-media",
        description: "I share my knowledge and my passion for technology on my Youtube channel",
        date: "2023-2024",
        followers: "- 13.5K followers",  // Ajout des followers
        link: "" // Optionnel si tu souhaites ajouter un lien ici
    },
    {
        img: "/assets/vltcode.jpg",
        title: "vlt.code",
        description: "I write articles about technology and design on my Medium account",
        date: "2023-2024",
        followers: "- 6k followers",  // Ajout des followers
        link: "" // Optionnel si tu souhaites ajouter un lien ici
    },
    {
        img: "/assets/vlt_dev.png",
        title: "vlt_dev",
        description: "I share my daily life and my work on my Instagram account",
        date: "2022-2023",
        followers: "- 100k followers",  // Ajout des followers
        link: "https://instagram.com/vlt_dev" // Lien cliquable vers Instagram
    },

]

export const Content = () => {
    return (
        <div className={"mt-32 flex flex-col justify-center items-center "}>
            <Forme size={300} rotation={170} opacity={2} coords={{x: "-200px", y: "-300px"}}/>

            <NormalText text={'"A desire to share"'} className={"text-center"}/>
            <H2 text={"Content creator"} className={"mt-1 text-center"}/>
            <div className={"w-full flex flex-col mt-8 content-container"}>
                {content.map((item, index) => (
                    <ContentItem key={index} {...item}/>
                ))}
            </div>
            <Forme size={100} rotation={100} opacity={0.8} coords={{x: "120%", y: "400px"}} rounded={true}/>

        </div>)
}

interface ContentItemProps {
    img: string;
    title: string;
    description: string;
    date: string;
    followers: string;  // Ajout de la propriété followers
    link: string;  // Ajout de la propriété pour le lien
}

const ContentItem = ({img, title, description, date, followers, link}: ContentItemProps) => {
    return (
        <div className={"flex flex-row justify-between w-full py-2 gap-2 content-item relative pb-8  "}>
            <div className={"flex flex-row gap-3"}>
                <div className={"flex-none"}>
                    <span
                        className={"relative flex shrink-0 overflow-hidden rounded-full border-solid border-2 border-[--border-color] size-12 m-auto bg-muted-background dark:bg-foreground"}>
                        <img src={img} alt={title}
                             className={"aspect-square h-full w-full object-cover"}/>
                    </span>
                </div>

                <div>
                    <div className={"flex flex-row items-center gap-1"}>

                    <NormalText text={title} className={"font-semibold"}/>

                    <LightText text={followers} className={"mt-1"}/>  {/* Affichage du nombre de followers */}
                    </div>
                    <LightText text={description} className={"text-xs"}/>

                </div>
            </div>
            <p className={"text-xs w-max"}>{date}</p>
        </div>
    )
}
