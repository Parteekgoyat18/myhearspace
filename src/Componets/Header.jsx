import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Header() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>

<nav className="bg-[#1c1c1c] fixed top-0 z-50 w-full md:px-[70px] text-white flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ">
        <img src="myhearspace.png" alt="My Hear Space Logo" className="h-[70px] w-auto" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center py-8 justify-between gap-8">
        <div className="flex space-x-6 text-[18px] font-light">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 hover:text-gray-400 ${isActive ? "border-b-2 border-[#D9D9D9]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/ourListener"
            className={({ isActive }) =>
              `pb-1 hover:text-gray-400 ${isActive ? "border-b-2 border-[#D9D9D9]" : ""}`
            }
          >
            Our Listeners
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `pb-1 hover:text-gray-400 ${isActive ? "border-b-2 border-[#D9D9D9]" : ""}`
            }
          >
            Blogs
          </NavLink>
        </div>
        <div>
          <a
            href="#"
            className="border text-[#D9D9D9] border-white rounded-full px-4 py-1 text-[18px] hover:bg-[#D9D9D9] hover:text-black transition"
          >
            Become a Listener
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden mr-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <div className="fixed inset-0 bg-[#1c1c1c] z-50 flex flex-col p-6 text-white transition-transform">
    {/* Close Button */}
    <div className="flex justify-end mb-6">
      <button onClick={() => setIsMenuOpen(false)} className="text-white">
        <X size={28} />
      </button>
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-col space-y-6 text-xl font-light pl-2">
      <NavLink
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `${isActive ? "text-white" : "text-gray-500"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/ourListener"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `${isActive ? "text-white" : "text-gray-500"}`
        }
      >
        Our Listeners
      </NavLink>
      <NavLink
        to="/blogs"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `${isActive ? "text-white" : "text-gray-500"}`
        }
      >
        Blogs
      </NavLink>
      <a
        href="#"
        className="text-gray-500"
      >
        Become a Listener
      </a>
    </nav>

    {/* Download Buttons */}
    <div className="mt-12 space-y-4">
      <a
        href="#"
        className="flex items-center justify-center gap-3 border border-white rounded-md py-3"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Play Store"
          className="h-6"
        />
        <span>Download App</span>
      </a>
      <a
        href="#"
        className="flex items-center justify-center gap-3 border border-white rounded-md py-3"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg"
          alt="App Store"
          className="h-6"
        />
        <span>Download App</span>
      </a>
    </div>
  </div>
)}

    </nav>
    
    </div>
  )
}

export default Header
