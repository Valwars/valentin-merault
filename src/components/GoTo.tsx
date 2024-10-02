"use client";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";

interface ScrollButtonProps {
    targetId: string;
    offset?: number;
    buttonText: string;
    className?: string;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, offset = 0, buttonText, className }) => {
    const scrollToTarget = useCallback(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = offset;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, [targetId, offset]);

    return (
        <button onClick={scrollToTarget} className={`btn text-[--purple] mt-5 text-lg flex flex-row gap-1 items-center ${className}`}>
            {buttonText} <ArrowRight />
        </button>
    );
};
