"use client";
import Lenis from "lenis";

export const SmoothScroll   = () => {

    const lenis = new Lenis({
        duration: 1.15, // Modifie ce chiffre pour ajuster la vélocité (1.0 = vitesse normale)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Tu peux aussi ajuster l'easing pour des transitions plus douces
    });
    lenis.on('scroll', () => {
    })

    function raf(time : number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return <></>;
}