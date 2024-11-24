import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="lg:absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1} alt="Design Example 2 Image" />
                </div>
                <div className="lg:absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2} alt="Design Example 1 Image" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-5 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl mt-6 font-medium text text-center">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl mt-8 text-white/50 max-w-2xl mx-auto">
                    Design toold shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive itnerface that keeps you
                    in your creative flow.
                </p>
                <form className="flex mx-auto border border-white/15 rounded-full p-2 mt-8 max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </section>
    );
}
