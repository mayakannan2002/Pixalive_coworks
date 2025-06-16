import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black py-10 overflow-hidden relative">
      <div className="w-full max-w-[1280px] px-3 mx-auto text-white">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-2xl sm:text-3xl font-normal mt-4 mb-6 text-left">
              Let's work Together
            </h2>

            <a
              href="mailto:contact@pixalivetech.com"
              className="mb-2 text-base sm:text-lg hover:underline block"
            >
              contact@pixalivetech.com
            </a>
            <a
              href="https://wa.me/918778584566"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-base sm:text-lg hover:underline block"
            >
              +91 87785 84566
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            <div className="w-full max-w-md text-base sm:text-lg grid grid-cols-2 gap-6">
              {/* Social Links */}
              <div className="flex flex-col items-start gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61572736722664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-gray-300 transition"
                >
                  Facebook <FaFacebookF className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/pixalivetech/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-gray-300 transition"
                >
                  Instagram <FaInstagram className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pixalive-technology-network/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-gray-300 transition"
                >
                  LinkedIn <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://x.com/Pixalivetech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 hover:text-gray-300 transition"
                >
                  Twitter <FaXTwitter className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Address */}
            <p className="mt-8 text-base sm:text-lg leading-relaxed font-normal max-w-md text-left md:text-right">
              3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-10 sm:mt-16 flex items-center justify-center overflow-hidden px-4">
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[10rem] bg-gradient-to-b from-white/70 to-black bg-clip-text text-transparent text-center font-extrabold leading-none break-words max-w-full">
            Pixalive
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
