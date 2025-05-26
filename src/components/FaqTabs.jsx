import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
    {
        title: "Tech-Driven Spaces",
        number: "01",
        content:
            "Smart infrastructure with high-speed Wi-Fi, IoT-enabled meeting rooms, and power backup to keep your work uninterrupted.",
    },
    {
        title: "Customizable Workspaces",
        number: "02",
        content:
            "Design your ideal workspace with flexible layouts, themes, and utilities.",
    },
    {
        title: "24/7 Access & Security",
        number: "03",
        content:
            "Round-the-clock access with biometric security and monitored entry.",
    },
    {
        title: "Community & Collaboration",
        number: "04",
        content:
            "Engage with fellow professionals and grow your network organically.",
    },
    {
        title: "End-to-End Business Support",
        number: "05",
        content:
            "We help with business setup, legal services, mail handling, and more.",
    },
    {
        title: "FOCO Model Partnership Opportunities",
        number: "06",
        content:
            "Partner with us in a Franchise-Owned, Company-Operated growth model.",
    },
];

const FaqTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-[1260px] mx-auto md:px-10 py-10">
            <h2 className="text-sm md:text-lg font-medium text-black mb-6">
                Why Pixalive tech Co-work?
            </h2>

            <div className="bg-white space-y-2">
                {faqData.map((item, index) => (
                    <div key={index}>
                        <button
                            onClick={() => setActiveIndex(index)}
                            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer w-full px-4 py-4 text-left transition-all 
                                ${index === activeIndex ? "bg-[#E1DEDE]" : "bg-[#F1F0F0]"}
                            `}
                        >
                            <span className="text-lg md:text-2xl text-black font-medium">{item.title}</span>
                            <span className="text-black font-normal text-lg md:text-2xl sm:mt-0 mt-2">{item.number}</span>
                        </button>

                        <AnimatePresence initial={false}>
                            {index === activeIndex && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="bg-[#E1DEDE]">
                                        <div className="p-5 pt-7 pb-5 w-full sm:w-[90%] md:w-[700px] text-sm md:text-base text-black">
                                            {item.content}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqTabs;
