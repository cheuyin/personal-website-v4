import Image from "next/image";

export default function Home() {
    return (
        <div>
            <header className="max-w-lg m-auto flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Hello, I&apos;m Stanley Cheung
                    </h1>
                    <h2 className="text-2xl">Freelance Web Developer</h2>
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
        </div>
    );
}
