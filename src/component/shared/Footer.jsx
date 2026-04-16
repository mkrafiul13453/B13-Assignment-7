import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a4335] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                
                <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>

                <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white p-3 rounded-full text-[#1a4335] hover:bg-gray-200 transition-all">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full text-[#1a4335] hover:bg-gray-200 transition-all">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full text-[#1a4335] hover:bg-gray-200 transition-all">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <p>© {currentYear} KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;