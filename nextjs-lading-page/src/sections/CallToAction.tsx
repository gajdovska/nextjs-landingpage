"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);
    // not to initiate re-render of the app when updated
    const animation = useRef<AnimationPlaybackControls>();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            {
                x: "-50%",
            },
            {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
            }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 pr-16 font-medium text-7xl md:text-8xl group"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl ">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
