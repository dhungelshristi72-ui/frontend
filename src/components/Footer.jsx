import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" w-full bg-[#17132B] text-white py-12 sm:px-12 px-6 border-t border-[#8B5CF6]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* <h1 className="text-2xl font-bold text-center">Shristi Dhungel</h1>
        <p className="text-center">Full Stack Developer | Nepal</p>

        <div className="flex justify-center text-2xl gap-6 ">
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://github.com/" aria-label="Github">
            <FaGithub />
          </a>
        </div>
        <div className="w-full  border-t border-white/50 pt-4 text-center">

           © {new Date().getFullYear()} Shristi Dhungel
          

      </div> */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-[#C4B5FD]">About Us</h1>
          <p className="text-text-[#A1A1AA] landing-7 max-w-sm">
            Clouds Nepal Web is a leading software and IT solutions company
            based in Nepal. From websites to mobile apps, digital marketing to
            cloud integrations.
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#C4B5FD]">Useful Links</h1>
          <div className="flex flex-col gap-3">
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              About Us
            </a>
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              Our service
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#C4B5FD]">24/7 Support</h1>
          <div className="flex flex-col gap-3">
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              webcloudsnepal@gmail.com
            </a>
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              📞 984566666
            </a>
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              📞 984566666
            </a>
            <a className="text-text-[#A1A1AA] landing-7 max-w-sm" href="#">
              📞 984566666
            </a>
          </div>
        </div>
        <div className="flex item-start">
          <button className="text-center bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 px-2 h-15 rounded-lg">
            Book An Appoinment
          </button>
        </div>

       
      </div>
       <div className="flex-col max-w-7xl border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-[#A1A1AA] text-sm">
            © {new Date().getFullYear()} Shristi Dhungel
          </p>
        </div>
    </footer>
  );
}

export default Footer;
