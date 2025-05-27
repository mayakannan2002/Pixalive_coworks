import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
    {
        title: "Unbeatable Location",
        number: "01",
        content:
            "Located in the heart of Bengaluru, our coworking space offers unparalleled access to the city's vibrant culture and tech scene.",
    },
    {
        title: "Tech-Driven Spaces",
        number: "02",
        content:
            "Smart infrastructure with high-speed Wi-Fi, IoT-enabled meeting rooms, and power backup to keep your work uninterrupted.",
    },
    {
        title: "Flexible Workspace Solutions",
        number: "03",
        content:
            "Enjoy flexible workspace options tailored to your comfort and productivity, Choose from private cabins, dedicated desks, hot desks, and meeting rooms.",
    },
    {
        title: "24/7 Access & Security",
        number: "04",
        content:
            "24/7 access to shared spaces, secure access control, and state-of-the-art security measures to ensure your safety and privacy.",
    },
    {
        title: "Vibrant Community & Networking",
        number: "05",
        content:
            "Join a vibrant community of like-minded professionals, collaborate, learn, and grow together in a supportive environment.",
    },
    {
        title: "End-to-End Business Supports",
        number: "06",
        content:
            "End-to-end business support, including legal, tax, and accounting services to help you manage your business effectively.",
    },
    {
        title: "FOCO Model Partnership Opportunities",
        number: "07",
        content:
            "FOCO Model Partnership Opportunities to grow your business and connect with like-minded professionals and entrepreneurs. ",
    },
];

const FaqTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="max-w-[1260px]  md:mt-26 mx-auto md:px-10 px-2 py-10">
            <h2 className="text-sm md:text-lg font-medium text-black mb-15">
                Why Pixalive tech Co-work?
            </h2>

            <div className="bg-white space-y-2.5 ">
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
