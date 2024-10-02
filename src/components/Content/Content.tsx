import {H2, LightText, NormalText} from "@/components/Text/Text";
import {BlurFade} from "@/components/BlurFade/BlurFade";

const content = [
    {
        img: "/assets/topdev.png",
        title: "Topdev-media",
        description: "I share web development tutorials, coding interviews, cheatsheets...",
        date: "2023-2024",
        followers: "- 13.5K followers",  // Ajout des followers
        link: "https://www.instagram.com/topdev_media/" // Optionnel si tu souhaites ajouter un lien ici
    },
    {
        img: "/assets/vltcode.jpg",
        title: "vlt.code",
        description: "I share my life as a student entrepreneur and content creator.",
        date: "2023-2024",
        followers: "- 6k followers",  // Ajout des followers
        link: "https://www.instagram.com/vlt.code/" // Optionnel si tu souhaites ajouter un lien ici
    },
    {
        img: "/assets/vlt_dev.png",
        title: "vlt_dev",
        description: "Former account, I shared html, css, js animations and web tutorials.",
        date: "2022-2023",
        followers: "- 100k followers",  // Ajout des followers
        link: "https://www.instagram.com/vlt_dev/" // Lien cliquable vers Instagram
    },

]

export const Content = () => {
    return (
        <BlurFade delay={0.25} inView>

        <div className={"mt-32 flex flex-col justify-center items-center relative"}>


            <NormalText text={'"A desire to share"'} className={"text-center"}/>
            <H2 text={"Content creator"} className={"mt-1 text-center"}/>
            <div className={"w-full flex flex-col mt-8 content-container"}>
                {content.map((item, index) => (
                    <ContentItem key={index} {...item}/>
                ))}
            </div>


        </div></BlurFade>)
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
        <a href={link}>

            <div className={"flex flex-row justify-between  w-full py-2 gap-2 content-item relative pb-8  "}>
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

                            <LightText text={followers} className={"mt-1"}/> {/* Affichage du nombre de followers */}
                        </div>
                        <LightText text={description} className={"text-xs"}/>

                    </div>
                </div>
                <p className={"text-xs w-max"}>{date}</p>
            </div>

        </a>
    )
}
