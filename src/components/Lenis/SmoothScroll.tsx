"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export const SmoothScroll = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // S'assurer que le composant est monté côté client
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const lenis = new Lenis({
                duration: 1.15, // Modifie ce chiffre pour ajuster la vélocité (1.0 = vitesse normale)
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ajuster l'easing pour des transitions plus douces
            });

            lenis.on('scroll', () => {
                // Gestionnaire d'événement de défilement (facultatif, ici rien n'est fait)
            });

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);

            // Nettoyage lorsque le composant est démonté
            return () => {
                lenis.destroy();
            };
        }
    }, [isClient]);

    return <></>;
};
