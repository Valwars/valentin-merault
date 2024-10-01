import {NormalText,H2, LightText} from "@/components/Text/Text";

export const Contact = () => {
    return (
        <div className={"mt-32 flex flex-col justify-center items-center relative"}>
            <NormalText text={'"An idea for a project ?"'} className={"text-center"}/>
            <H2 text={"Get in touch"} className={"mt-1 text-center"} />
            <LightText
                className={"text-center text-[--light-txt] mt-3 text-xl"}
                text={
                    <>
                        Want to chat? Just shoot me a dm <a href={""} className={"underline"}>with a direct question on linkedin</a> and I'll respond whenever I can. I will ignore all soliciting.
                    </>
                }
            />

        </div>
    )
}