import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Home, Instagram, Mail } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Dock = () => {
    // Fonction pour scroller en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={
                "nav shadow bottom-5 fixed left-1/2 border rounded-full z-10 bg-background flex flex-row gap-2 items-center p-1 p-x-4 cursor-pointer"
            }
            style={{
                transform: "translateX(-50%)",
                backdropFilter: "blur(10px)", // Effet de flou pour un meilleur visuel
            }}
        >
            {/* Bouton Home pour renvoyer en haut de la page */}
            <div className={"p-2 item"} onClick={scrollToTop} >
                <Home size={20} />
            </div>

            {/* Icônes des réseaux sociaux avec liens */}
            <div className={"flex flex-row gap-2 border-x-2 px-2"}>
                {/* Ouvrir une fenêtre de mail */}
                <a href="mailto:valentin.merault@gmail.com" className="p-2 item">
                    <Mail size={20}/>
                </a>

                {/* Lien vers LinkedIn */}
                <a
                    href="www.linkedin.com/in/valentin-merault-2a420b245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 item"
                >
                    <LinkedInLogoIcon style={{ width: 20, height: 20 }} />
                </a>

                {/* Lien vers Instagram */}
                <a
                    href="https://www.instagram.com/topdev_media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 item"
                >
                    <Instagram size={20} />
                </a>
            </div>

            {/* Composant ThemeToggle */}
            <ThemeToggle />
        </div>
    );
};
