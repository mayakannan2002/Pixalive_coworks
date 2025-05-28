// import React from "react";

// const Contact = () => {
//     return (
//         <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-12 bg-white text-black">
//             {/* Top Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 gap-6">
//                 <h2 className="text-[30px] sm:text-[40px] md:text-[60px] font-normal leading-tight">
//                     GET IN TOUCH <br className="hidden sm:block" /> WITH US
//                 </h2>
//                 <div className="text-[36px] sm:text-[44px] font-normal mt-4 md:mt-0">
//                     S-F <span className="text-[24px] sm:text-[30px]">©</span> 2025
//                 </div>
//             </div>

//             {/* Contact Info Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm md:text-base">
//                 <div>
//                     <h3 className="font-semibold mb-1">EMAIL</h3>
//                     <p className="text-[#5D5D5D]">
//                         <a
//                             href="https://mail.google.com/mail/?view=cm&fs=1&to=pixalivetech@gmail.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-base sm:text-lg cursor-pointer hover:underline block"
//                         >
//                             pixalivetech@gmail.com
//                         </a>
//                     </p>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold mb-1">PHONE</h3>
//                     <p className="text-[#5D5D5D]">
//                         <a
//                             href="https://wa.me/918778584566"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-base sm:text-lg cursor-pointer hover:underline block"
//                         >
//                             +91 87785 84566
//                         </a>
//                     </p>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold mb-1">ADDRESS</h3>
//                     <p className="text-[#5D5D5D]">
//                         3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
//                     </p>
//                 </div>
//             </div>

//             {/* Form Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//                 <div>
//                     <p className="text-[18px] sm:text-[20px] leading-relaxed">
//                         Fill out the form and our <br /> specialist will contact you <br /> as soon as possible
//                     </p>
//                 </div>

//                 <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         className="w-full border-b border-[#5d5d5dbb] p-2 outline-none placeholder:text-black"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Company"
//                         className="w-full border-b border-[#5d5d5dbb] p-2 outline-none"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email Id"
//                         className="w-full border-b border-[#5d5d5dbb] p-2 outline-none"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Mobile no"
//                         className="w-full border-b border-[#5d5d5dbb] p-2 outline-none"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Address"
//                         className="col-span-full border-b border-[#5d5d5dbb] p-2 outline-none"
//                     />
//                     <textarea
//                         placeholder="Message"
//                         className="col-span-full border-b border-[#5d5d5dbb] p-2 outline-none"
//                         rows="3"
//                     />
//                     <button
//                         type="submit"
//                         className="col-span-full cursor-pointer bg-black text-white px-6 py-3 mt-4 w-fit rounded-sm shadow-md hover:bg-gray-900 transition duration-150 ease-in-out transform hover:scale-105"
//                     >
//                         Contact Us
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "lucide-react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_8u2nfhn',          // Service ID
            'template_inmj0w6',         // Template ID
            form.current,
            'Rtu6cd3hLk1kF4xZW'         // Public Key
        )
            .then((result) => {
                console.log("Email successfully sent!", result.text);
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please check the console for details.");
            });
    };

    return (
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-12 bg-white text-black">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 gap-6">
                <h2 className="text-[30px] sm:text-[40px] md:text-[60px] font-normal leading-tight">
                    GET IN TOUCH <br className="hidden sm:block" /> WITH US
                </h2>
                <div className="text-[36px] sm:text-[44px] font-normal mt-4 md:mt-0">
                    S-F <span className="text-[24px] sm:text-[30px]">©</span> 2025
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm md:text-base">
                <div>
                    <h3 className="font-semibold mb-1">EMAIL</h3>
                    <a href="mailto:pixalivetech@gmail.com" className="text-[#5D5D5D] hover:underline block">
                        pixalivetech@gmail.com
                    </a>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">PHONE</h3>
                    <a href="https://wa.me/918778584566" target="_blank" rel="noopener noreferrer" className="text-[#5D5D5D] hover:underline block">
                        +91 87785 84566
                    </a>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">ADDRESS</h3>
                    <p className="text-[#5D5D5D]">
                        3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div>
                    <p className="text-[18px] sm:text-[20px] leading-relaxed">
                        Fill out the form and our <br /> specialist will contact you <br /> as soon as possible
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <input name="user_name" type="text" placeholder="Name" required className="w-full border-b border-[#5d5d5dbb] p-2 outline-none" />
                    <input name="user_company" type="text" placeholder="Company" className="w-full border-b border-[#5d5d5dbb] p-2 outline-none" />
                    <input name="user_email" type="email" placeholder="Email Id" required className="w-full border-b border-[#5d5d5dbb] p-2 outline-none" />
                    <input name="user_phone" type="text" placeholder="Mobile no" className="w-full border-b border-[#5d5d5dbb] p-2 outline-none" />
                    <input name="user_address" type="text" placeholder="Address" className="col-span-full border-b border-[#5d5d5dbb] p-2 outline-none" />
                    <textarea name="message" placeholder="Message" rows="3" required className="col-span-full border-b border-[#5d5d5dbb] p-2 outline-none"></textarea>

                   <div className="col-span-full flex gap-4 mt-4">
    <button
        type="submit"
        className="cursor-pointer bg-black text-white px-6 py-3 w-fit rounded-sm shadow-md  transition duration-150 ease-in-out transform hover:scale-105"
    >
        Contact Us
    </button>
    <a
        href="/"
        className="cursor-pointer bg-black text-white px-6 py-3 w-fit rounded-sm shadow-md  transition duration-150 ease-in-out transform hover:scale-105"
    >
        Go Home
    </a>
</div>



                </form>

            </div>
        </div>
    );
};

export default Contact;
