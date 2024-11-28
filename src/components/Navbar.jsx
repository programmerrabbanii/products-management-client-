import { NavLink } from "react-router-dom";
import logoNav from "../assets/images.jpeg";

const Navbar = () => {
  const links = (
    <>
      <li className="ml-6 text-lg hover:text-[#f3a953] transition duration-300">
        <NavLink to="/" activeClassName="text-[#f3a953]">
          Home
        </NavLink>
      </li>
      <li className="ml-6 text-lg hover:text-[#f3a953] transition duration-300">
        <NavLink to="/addproducts" activeClassName="text-[#f3a953]">
          Add Products
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-[#1e1e1e] via-[#434343] to-[#2f2f2f] text-white sticky top-0 z-10 shadow-lg ">
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content bg-[#f8f1e8] text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="bg-[#f3a953] p-2 rounded-full shadow-lg">
            <img
              className="h-16 w-16 border-2 border-white rounded-full"
              src={logoNav}
              alt="Coffee Logo"
            />
          </div>
          <h2 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
            Coffee <span className="text-[#f3a953]">Store</span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-6">{links}</ul>
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
