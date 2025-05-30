import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Logo from "../../assets/imgs/home/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-20 pb-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5">
          <img src={Logo} alt="Pixalive Logo" className="h-8 w-8" />

          <p className="text-sm leading-relaxed max-w-xs">
            From bold ideas to real-world tech—<br />
            Pixalive is where innovation comes alive.
          </p>

          <a
            href="mailto:contact@pixalivetech.com"
            className="text-sm inline-flex items-center gap-1 hover:underline"
          >
            contact@pixalivetech.com <FaArrowUpRightFromSquare size={10} />
          </a>

          <span className="text-sm">+91 87785 84566</span>
        </div>

        {/* MIDDLE LINKS SECTION */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <div className="flex flex-col gap-2">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Service's</a>
            <a href="/products" className="hover:underline">Products</a>
            <a href="/features" className="hover:underline">Features</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/pricing" className="hover:underline">Pricing</a>
            <a href="/hire-us" className="hover:underline">Hire Us</a>
            <a href="/about" className="hover:underline">About us</a>
          </div>
        </div>

        {/* SOCIAL LINKS SECTION */}
        <div className="flex flex-col gap-2 text-sm">
          <a
             href="https://www.linkedin.com/company/pixalive-technology-network/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            LinkedIn <FaArrowUpRightFromSquare size={10} />
          </a>
          <a
            href="https://www.instagram.com/pixalivetech/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            Instagram <FaArrowUpRightFromSquare size={10} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572736722664"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            Facebook <FaArrowUpRightFromSquare size={10} />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
        <p>© 2025 Pixalive Technology Services. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/terms" className="hover:underline">Terms of Use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      {/* BIG PIXALIVE TEXT */}
      <div className="absolute -bottom-20 left-0 w-full text-white font-extrabold text-[22vw] leading-none pointer-events-none select-none z-[-1] tracking-tighter">
        <span className="block text-left pl-6 md:pl-16">Pixalive</span>
      </div>
    </footer>
  );
};

export default Footer;
