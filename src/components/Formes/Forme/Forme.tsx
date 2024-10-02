"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface FormProps {
    size: number;
    rotation?: number;
    opacity?: number;
    coords?: {
        x: string;
        y: string;
    };
    rounded?: boolean;
    parallax?: boolean;  // Prop pour activer/désactiver le parallax
    parallaxRange?: [number, number];  // Nouvelle prop pour définir la plage de déplacement
}

export const Forme = ({ size, rotation = 0, opacity = 1, coords, rounded, parallax = false, parallaxRange = [-100, 100] }: FormProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    // Utilisation de parallaxRange pour la transformation y
    const y = useTransform(scrollYProgress, [parallax ? 0 : 1, 1], parallax ? parallaxRange : [0, 0]);

    return (
        <motion.div
            ref={ref}
            className={`bg-[--purple] absolute ${rounded ? "rounded-full" : "rounded-lg"}`}
            style={{
                zIndex: -1,
                width: size,
                height: size,
                opacity: opacity,
                top: coords?.y ?? "auto",
                left: coords?.x ?? "auto",
                rotate: rotation,
                translateY: y,
            }}
        />
    );
};
