import Image from "next/image";
import SocialMediaLink from "./components/social-media-link";
import { SiX } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import TechSkillBox from "./components/tech-skill-box";
import ProjectBox from "./components/project-box";

export default function Home() {
    return (
        <div>
            <header className="p-5 mb-4">
                <p>Vancouver, Canada</p>
            </header>
            <main className="max-w-2xl m-auto flex flex-col gap-10 px-10 mb-10">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Hello, I&apos;m Stanley Cheung
                        </h1>
                        <h2 className="text-xl">Freelance Web Developer</h2>
                        <p>I try to build useful things on the web.</p>
                    </div>
                    <div className="relative w-25 h-25 rounded-full overflow-hidden">
                        <Image
                            src="/stanley_profile_picture.png"
                            alt="My profile picture"
                            fill
                        />
                    </div>
                </header>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Connect With Me
                    </h2>
                    <div className="flex gap-8">
                        <SocialMediaLink
                            Icon={SiX}
                            url="https://x.com/scheung2104"
                        />
                        <SocialMediaLink
                            Icon={SiUpwork}
                            url="https://www.upwork.com/freelancers/~015ad57974e939c459?viewMode=1"
                        />
                        <SocialMediaLink
                            Icon={SiGithub}
                            url="https://www.upwork.com/freelancers/~015ad57974e939c459?viewMode=1"
                        />
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                    <div className="flex gap-8 flex-wrap">
                        <TechSkillBox Icon={SiNextdotjs} name="Next.js" />
                        <TechSkillBox Icon={SiNodedotjs} name="Node.js" />
                        <TechSkillBox Icon={SiTypescript} name="TypeScript" />
                        <TechSkillBox
                            Icon={SiTailwindcss}
                            name="Tailwind CSS"
                        />
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        Projects & Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectBox
                            name="Pathfinding Visualizer"
                            startDate="Jun. 2025"
                            description="A web app to visualize famous algorithms."
                            link="https://github.com/cheuyin/pathfinding-visualizer"
                        />
                        <ProjectBox
                            name="VoltSafe Dashboard"
                            startDate="Jan. 2024"
                            endDate="Jun. 2024"
                            description="A web dashboard to manage smart devices."
                            link="https://www.voltsafemarine.com/#power-up"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
