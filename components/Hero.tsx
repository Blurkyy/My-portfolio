import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Profile photo */}
                <div className="hero-avatar-ring flex-shrink-0">
                    <div className="hero-avatar-inner">
                        <Image
                            src="/profile.jpg"
                            alt="Michael Mesfin"
                            width={140}
                            height={140}
                            className="hero-avatar-img"
                            priority
                        />
                    </div>
                </div>

                {/* Name & title */}
                <div className="text-center sm:text-left">
                    <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                        Michael Mesfin
                    </h1>
                    <p className="mt-3 text-xl text-gray-400">
                        Full Stack Developer
                    </p>
                </div>
            </div>
        </section>
    );
}