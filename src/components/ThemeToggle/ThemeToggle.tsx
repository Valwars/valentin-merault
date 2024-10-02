import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme(); // Utilisation de resolvedTheme
    const [mounted, setMounted] = useState(false);

    // S'assurer que le composant est monté avant d'appliquer le thème
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Évite les problèmes d'hydratation côté serveur

    return (
        <button
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")} // Utilisation de resolvedTheme
            className="p-2 rounded-full transition-all item"
        >
            {resolvedTheme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};
