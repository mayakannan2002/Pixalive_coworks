import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import logo from '../assets/home/plogo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-4 py-12 text-center">
            <p className="text-sm mb-4 tracking-widest uppercase">Pixelive tech co-works</p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">STAY CONNECTED</h2>

            <div className="flex justify-center items-center gap-2 mb-8 w-full max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-2 w-2/3 md:w-3/4 border border-white rounded-md text-black bg-white placeholder-black"
                />

                <button className="bg-white text-black p-3 cursor-pointer rounded-md">
                    <FiSend />
                </button>
            </div>

            <div className="flex justify-between items-center px-6 md:px-12 mt-12">
                {/* Left Logo */}
                <div className="text-3xl">
                    <img className='w-[46px] h-[46px] cursor-pointer ' loading='lazy' src={logo} alt="" />
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-xl cursor-pointer">
                    <FaInstagram />
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>

            <p className="text-sm mt-8 opacity-60">
                2025 All Rights Reserved Pixelive co-workspace
            </p>
        </footer>
    );
};

export default Footer;
