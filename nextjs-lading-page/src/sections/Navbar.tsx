import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import menuButton from "@/assets/images/menu.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <div className="flex justify-between border border-white/15 p-2 px-4 md:pr-2 rounded-full items-center">
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
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button variant="secondary" className="md:block hidden">
                            Log In
                        </Button>
                        <Button variant="primary" className="md:block hidden">
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
