import Button from "@/components/Button";
import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-[93px] lg:py-44">
            <div className="container text-center">
                <div className="flex justify-center">
                    <Tag>Introducing layers</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium">
                    <span>Your creative process deserves better.</span>{" "}
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 block">
                        That&apos;s why we built Layers.
                    </span>
                </div>
            </div>
        </section>
    );
}
