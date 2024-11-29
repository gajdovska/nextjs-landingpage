"use client";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        // start of the div when it reaches the end of the page
        // end of the div when it reaches the end of the page
        offset: ["start end", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        console.log(latest)
    );

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-[93px] lg:py-44">
            <div className="container text-center">
                <div className="sticky top-28 lg:top-32">
                    <div className="flex justify-center">
                        <Tag>Introducing layers</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium">
                        <span>Your creative process deserves better.</span>{" "}
                        <span>
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
