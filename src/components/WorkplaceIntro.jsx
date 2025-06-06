import React from 'react';

const WorkplaceIntro = () => {
    return (
        <section className="pt-26 pb-16 px-4 md:px-12 flex justify-center">
            <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-12">
                {/* Left Label */}
                <div className="md:w-1/2">
                <p className="text-m text-black">Workplace Options <br /> for Every Need</p>
                </div>

                {/* Right Text */}
                <div className="md:w-2/2 max-w-[500px]">
                <p className="text-xl md:text-[28px] md:text-2xl font-semibold text-black leading-relaxed">
                    Finding the ideal space is a thing of the past. Welcome to a new era of productivity and collaboration.</p>
                </div>
            </div>
        </section>
        
    );
};

export default WorkplaceIntro;
