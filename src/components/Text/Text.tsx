
import {ReactNode} from "react";

interface TitleProps {
    text: string | ReactNode;
    className? : string;
}

export const H1 = ({text} :TitleProps) => {
    return <h1 className={"text-7xl font-bold"}>{text}</h1>
}

export const H2 = ({text, className} :TitleProps) => {
    return <h2 className={ `text-4xl font-bold ${className}`}>{text}</h2>
}

export const H3 = ({text, className} :TitleProps) => {
    return <h3 className={ `text-2xl font-semibold ${className}`}>{text}</h3>
}

export const LightText = ({text,className} :TitleProps) => {
    return <p className={`font-light ${className}`}>{text}</p>
}

export const NormalText = ({text,className} :TitleProps) => {
    return <p className={`normal-txt font-medium ${className}`}>{text}</p>
}


