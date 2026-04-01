import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiVisaLine, RiMastercardLine, RiPaypalLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND & ABOUT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="text-red-500">TYCORE</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your one-stop destination for premium products. We deliver quality,
            style, and comfort right to your doorstep.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ),
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-4 text-gray-400">
            {["Home", "Shop All", "Best Sellers", "New Arrivals", "Offers"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3">
            Support
          </h4>
          <ul className="space-y-4 text-gray-400">
            {[
              "Track Order",
              "Return Policy",
              "Shipping Info",
              "FAQs",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3">
            Contact Us
          </h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <FaMapMarkerAlt className="mt-1 text-red-500 group-hover:animate-bounce" />
              <p className="text-gray-400">
                123 Commerce Street New York, 
                <br />
                NY 10001 United States
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <FaPhoneAlt className="text-red-500" />
              <p className="text-gray-400 group-hover:text-white transition-colors">
                +91 5252525252
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <FaEnvelope className="text-red-500" />
              <p className="text-gray-400 group-hover:text-white transition-colors">
                tycore@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <hr className="border-white/10 my-12" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-bold text-gray-300">TYCORE</span>. All Rights
          Reserved.
        </p>

        {/* PAYMENT ICONS */}
        <div className="flex items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <RiVisaLine size={40} />
          <RiMastercardLine size={40} />
          <RiPaypalLine size={40} />
          <div className="text-xs border border-white/20 px-2 py-1 rounded">
            UPI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
