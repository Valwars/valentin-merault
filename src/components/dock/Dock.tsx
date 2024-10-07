"use client";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Home, Instagram, Mail } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {useLenis} from "lenis/react";


export const Dock = () => {
    const lenis = useLenis();

    // Fonction pour scroller en haut de la page avec Lenis
    const scrollToTop = () => {
        if (lenis) {
            console.log("Using Lenis for smooth scroll");
            lenis.scrollTo(0); // Le paramètre "immediate" permet de contrôler si le scroll est instantané
        }
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
            <button
                aria-label="Go to Home"
                onClick={scrollToTop}
                className="p-2 rounded-full transition-all item"
            >
                <Home size={20} />
            </button>

            {/* Icônes des réseaux sociaux avec liens */}
            <div className={"flex flex-row gap-2 border-x-2 px-2 border-[--dock-border]"}>
                <a href="mailto:valentin.merault@gmail.com" className="p-2 item">
                    <Mail size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/valentin-merault-2a420b245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 item"
                >
                    <LinkedInLogoIcon style={{ width: 20, height: 20 }} />
                </a>
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