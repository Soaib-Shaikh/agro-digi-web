import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from '../assets/images/logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white pt-10 pb-5">

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">

                {/* Logo + About */}
                <div>
                    <Link to="/" className="text-2xl font-bold text-white">
                        <img src={logo} className="h-10 w-auto object-contain" alt="logo" />
                    </Link>
                    <p className="text-sm mt-3 text-green-100">
                        Freshness You Can Trust, Exports You Can Count On.
                        We provide premium agri products and smart solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-green-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-green-300">About</Link></li>
                        <li><Link to="/products" className="hover:text-green-300">Products</Link></li>
                        <li><Link to="/services" className="hover:text-green-300">Services</Link></li>
                        <li><Link to="/consulting" className="hover:text-green-300">Consulting</Link></li>
                        <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Digital Marketing</li>
                        <li>IT Solutions</li>
                        <li>Event Management</li>
                        <li>Public Relations</li>
                        <li>Design & Printing</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-3">Contact</h3>

                    <p className="text-sm text-green-100 space-y-1">

                        {/* Address (Google Maps) */}
                        <a
                            href="https://www.google.com/maps?q=Navsari,Gujarat,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-green-300"
                        >
                            📍 Navsari, Gujarat, India
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+917359867199"
                            className="block hover:text-green-300"
                        >
                            📞 +91 7359867199
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@agridigitech.com"
                            className="block hover:text-green-300"
                        >
                            📧 info@agridigitech.com
                        </a>

                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 text-lg">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF className="hover:text-green-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className="hover:text-green-300" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="hover:text-green-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="hover:text-green-300" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-green-500 mt-8 pt-4 text-center text-sm text-green-200">
                © {new Date().getFullYear()} AgriDigi Tech. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;