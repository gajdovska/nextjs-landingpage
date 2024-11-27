"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(true);
    return (
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
            <div className="container max-w-5xl">
                <div className=" border border-white/15 md:rounded-full rounded-[27px] bg-neutral-950/70 backdrop-blur">
                    <div className="flex justify-between p-2 px-4 md:pr-2 items-center ">
                        <div>
                            <Image
                                src={logoImage}
                                alt="Logo"
                                className="h-9 w-auto md:h-auto"
                            />
                        </div>
                        <div className="lg:flex justify-center hidden">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <a href={link.href} key={link.label}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-menu md:hidden"
                                onClick={() => setIsMenuOpened(!isMenuOpened)}
                            >
                                <line
                                    x1="3"
                                    y1="6"
                                    x2="21"
                                    y2="6"
                                    className={twMerge(
                                        "origin-left transition",
                                        isMenuOpened &&
                                            "rotate-45 -translate-y-1"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    className={twMerge(
                                        isMenuOpened && "opacity-0"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="18"
                                    x2="21"
                                    y2="18"
                                    className={twMerge(
                                        "origin-left transition",
                                        isMenuOpened &&
                                            "-rotate-45 translate-y-1"
                                    )}
                                ></line>
                            </svg>
                            <Button
                                variant="secondary"
                                className="md:block hidden"
                            >
                                Log In
                            </Button>
                            <Button
                                variant="primary"
                                className="md:block hidden"
                            >
                                Sign up
                            </Button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMenuOpened && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col items-center gap-2 py-4 ">
                                    {navLinks.map((link) => (
                                        <a key={link.label} href={link.href}>
                                            {link.label}
                                        </a>
                                    ))}
                                    <Button variant="secondary">Log In</Button>
                                    <Button variant="primary">Sign up</Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
