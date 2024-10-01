"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Dots = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Assure que le composant est monté pour éviter les erreurs d'hydratation
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Evite le rendu côté serveur incorrect

    // Utilise le thème système si l'utilisateur a réglé le thème sur "system"
    const currentTheme = theme === "system" ? systemTheme : theme;
    console.log(currentTheme);
    return (
        <img
            src={currentTheme === "dark" ? "/assets/dotsd.png" : "/assets/dots.png"}
            alt={"dots"}
            className={"fixed top-1/2 right-0 z-0 h-1/3 w-3/6"}
            style={{ transform: "translateY(-50%)", zIndex: -2 }}
        />
    );
};
