import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex  flex-col md:flex-row justify-between">
          {/* Left Section - Logo and Registration Info */}
          <div className="mb-8 w-[50%] md:mb-0 flex flex-col items-center md:items-start">
            <p className="text-sm font-semibold">Proudly Registered</p>

            <img
              src="/corporate.svg" // Replace with the path to the logo
              alt="Corporate Affairs Commission"
              className="w-86 object-cover aspect-auto mb-4"
            />
          </div>

          {/* Middle Sections - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* NONEVEN Section */}

            {/* Products Section */}

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul>
                <li className="mb-2">
                  <a href="#">Palm Oil</a>
                </li>
                <li className="mb-2">
                  <a href="#">Coconut</a>
                </li>
                <li className="mb-2">
                  <a href="#">Packaged Crayfish </a>
                </li>
                <li className="mb-2">
                  <a href="#">Books</a>
                </li>
              </ul>
            </div>

            {/* Locations Section */}
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul>
                <li className="mb-2">
                  <strong>Head Office</strong>
                  <br />
                  372A Abak-Ukanafun Road, Nkek Enen Ido, Ukanafun LGA, Akwa
                  Ibom State, Nigeria.
                </li>
                <li className="mb-2">
                  <strong>Branch Office</strong>
                  <br />5 Udo Usoro Close, Behind Mechanic Village, Uyo, Akwa
                  Ibom State, Nigeria.
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul>
                <li className="mb-2">
                  <a href="#">Import</a>
                </li>
                <li className="mb-2">
                  <a href="#">Export</a>
                </li>
                <li className="mb-2">
                  <a href="#">Manufacturing</a>
                </li>
                <li className="mb-2">
                  <a href="#">Agro Allied Products</a>
                </li>
                <li className="mb-2">
                  <a href="#">General Contractors</a>
                </li>
                <li className="mb-2">
                  <a href="#">General Merchandise</a>
                </li>
                <li className="mb-2">
                  <a href="#">Real Estate Consultation</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="mb-2">
                  <strong>General Contractors</strong>
                  <br />
                  Undertake and Execute contracts for production or procurement
                  of required goods and services on agreed terms. .
                </li>
                <li className="mb-2">
                  <strong>General Merchandise</strong>
                  <br />
                  <p>Personal Profile </p>
                  <p>Books </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-xs text-center md:text-left">
            ©NONEVEN 2024 All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="X">
              <i className="fab fa-x"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Mail">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="flex text-2xl items-center gap-6">
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <IoMdMail />
            <IoMdCall />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
