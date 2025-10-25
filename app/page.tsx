import Image from "next/image";
import SocialMediaLink from "./components/social-media-link";
import { SiX } from "react-icons/si";

export default function Home() {
    return (
        <div>
            <header className="p-5">
                <p>Vancouver, Canada</p>
            </header>
            <main className="max-w-2xl m-auto flex flex-col gap-10">
                <header className=" flex items-center justify-between">
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
                    <h2 className="text-2xl font-semibold">Connect With Me</h2>
                    <div>
                        <SocialMediaLink Icon={SiX} title="X.com" />
                    </div>
                </section>
            </main>
        </div>
    );
}
