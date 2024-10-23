import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Mission", path: "/mission" },
    { name: "Product", path: "/products" },
    // { name: "Contact us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-20 bg-white ">
      <img src="/Logo.svg" alt="noneven logo" />
      {/* Desktop Menu */}
      <ul className="hidden md:flex w-fit m-auto space-x-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[#2D89BF]"
                  : "text-[#DDDDDD] hover:text-[#2D89BF]"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <button className="hidden md:block px-4 py-2 border border-[#2D89BF] text-blue-600 rounded hover:bg-[#2D89BF] hover:text-white"   href="mailto:noblenegroventures@gmail.com">
        Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-lg z-10 md:hidden">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2D89BF]"
                    : "text-[#DDDDDD] hover:text-[#2D89BF]"
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            {/* <button className="px-4 py-2 border border-[#2D89BF] text-blue-600 rounded hover:bg-[#2D89BF] hover:text-white">
              Contact Me
            </button> */}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
