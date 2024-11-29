import Tag from "@/components/Tag";
import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaLogo,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionLogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackLogo,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeLogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerLogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubLogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = {
    name: string;
    icon?: any;
    description: string;
};

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden" id="integrations">
            <div className="container lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:mt-64 lg:w-[510px]">
                    <Tag>Integration</Tag>
                    <h2 className="text-6xl font-medium mt-1">
                        Plays well with{" "}
                        <span className="text-lime-500">others</span>
                    </h2>
                    <p className="mt-3 text-white/50 text-lg">
                        Layers seamlessly connect with your favourite tools,
                        making it easy to plug into any workflow and collaborate
                        accross platforms.
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] lg:h-[800px] mt-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationColumn integrations={integrations} />
                        <IntegrationColumn
                            integrations={integrations.slice().reverse()}
                            reverse
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
