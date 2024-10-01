interface FormProps {
    size: number;
    rotation ?: number;
    opacity  ? : number;
    coords ?:    {
        x: string;
        y: string;
    },
    rounded ?: boolean;
}

export const Forme = ({ size, rotation = 0, opacity = 1, coords, rounded }: FormProps) => {
    return (
        <div
            className={`bg-[--purple] absolute ${rounded ? "rounded-full" : "rounded-lg"}`}
            style={{zIndex:-1, width: size, height: size,transform: `rotate(${rotation}deg)`, opacity: opacity, top: coords?.y ?? "auto", left: coords?.x ?? "auto" }}
        ></div>
    );
};
