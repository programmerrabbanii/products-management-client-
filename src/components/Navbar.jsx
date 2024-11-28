import { NavLink } from "react-router-dom";
import logoNav from "../assets/images.jpeg";

const Navbar = () => {
  const links = (
    <>
      <li className="ml-2 text-lg hover:text-[#f3a953] transition duration-300">
        <NavLink to="/" activeClassName="text-[#f3a953]">
          Home
        </NavLink>
      </li>
      <li className="ml-2 text-lg hover:text-[#f3a953] transition duration-300">
        <NavLink to="/addcoffee" activeClassName="text-[#f3a953]">
          Add Coffee
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-[#3b3a3a] via-[#5c5c5c] to-[#292929] text-white sticky top-0 z-10 shadow-md">
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="bg-[#f3a953] p-2 rounded-full shadow-md">
            <img
              className="h-16 border-2 border-white"
              src={logoNav}
              alt="Coffee Logo"
            />
          </div>
          <h2 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-md">
            Coffee <span className="text-[#f3a953]">Store</span>
          </h2>
        </div> 
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline border-[#f3a953] text-[#f3a953] hover:bg-[#f3a953] hover:text-white transition duration-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;