import {NormalText,H2, LightText} from "@/components/Text/Text";
import {BlurFade} from "@/components/BlurFade/BlurFade";

export const Contact = () => {
    return (
        <BlurFade delay={0.25} inView>

        <div className={"mt-32 flex flex-col justify-center items-center relative"}>
            <NormalText text={'"An idea for a project ?"'} className={"text-center"}/>
            <H2 text={"Get in touch"} className={"mt-1 text-center"} />
            <LightText
                className={"text-center text-[--light-txt] mt-3 text-xl"}
                text={
                    <>
                        Want to chat? Just shoot me a dm <a href={"https://www.linkedin.com/in/valentin-merault-2a420b245"} target={"_blank"} className={"underline"}>with a direct question on linkedin</a> and I&#39;ll respond whenever I can. I will ignore all soliciting.
                    </>
                }
            />

        </div></BlurFade>
    )
}