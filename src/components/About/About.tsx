import {H2, LightText} from "@/components/Text/Text";
import {BlurFade} from "@/components/BlurFade/BlurFade";

export const About = () => {
    return (
        <BlurFade delay={0.25} inView>

        <H2 text={"About"} />
            <LightText
                className={"mt-3"}
                text={
                    <>
                        I am a 22-year-old <span>Master's student</span> specializing in Human-Machine Interaction (HMI) in Toulouse, France.
                        With substantial experience as a <span>freelance developer</span> and within teams during various <span>internships and personal projects</span>,
                        I am deeply passionate about creating intuitive and innovative digital solutions.
                        <br /><br />
                        My ambition is to master the entire process of developing web applications and software, from concept to deployment,
                        ensuring a comprehensive understanding of every aspect along the way.
                        <br /><br />
                        Additionally, I enjoy sharing my knowledge by posting <span>web development tutorials</span> on Instagram, helping others in their coding journeys.
                    </>
                }
            />
        </BlurFade>
    );
};
