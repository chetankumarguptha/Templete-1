import { Link } from "gatsby";
import React, { useState } from "react";
import LogoIcon from '../../svg/LogoIcon';


function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className=" fixed top-0 bg-red-500 w-screen z-50 shadow-xl ">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8 ">
        <Link className="flex items-center no-underline text-white " to="/">
        <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <LogoIcon />
            </div>
            @rino
         </div>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3 "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title >Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto `}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/services`,
              title: `Services`
            },
            {
              route: `/contact`,
              title: `Contact`
            },
           
           
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white text-black py-2 px-4 hover:bg-red-600 hover:text-gray-800 rounded-lg "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
