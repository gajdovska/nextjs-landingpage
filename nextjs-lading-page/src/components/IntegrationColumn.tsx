import React from "react";
import Image from "next/image";
import { IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";

const IntegrationColumn = (props: {
    integrations: IntegrationsType[];
    className?: string;
}) => {
    const { integrations, className } = props;

    return (
        <div className="grid grid-cols-1 gap-4  pb-4">
            {integrations.map((integration) => (
                <div
                    key={integration.name}
                    className={twMerge(
                        "border border-white/10 bg-neutral-900 p-6 rounded-3xl items-center text-center",
                        className
                    )}
                >
                    <div className="flex justify-center">
                        <Image
                            src={integration.icon}
                            className="size-24"
                            alt={`Integration ${integration.name}`}
                        />
                    </div>
                    <h2 className="text-3xl mt-6">{integration.name}</h2>
                    <p className="text-center text-white/50 mt-2">
                        {integration.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IntegrationColumn;
