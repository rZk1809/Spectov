import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    {
      id: "home",
      title: "Home",
      path: "/",
      isRoute: true,
      anchor: null
    },
    {
      id: "about",
      title: "About",
      path: "/",
      isRoute: false,
      anchor: "#about"
    },
    {
      id: "products",
      title: "Products",
      path: "/products",
      isRoute: true,
      anchor: null
    },
    {
      id: "work",
      title: "Experience",
      path: "/",
      isRoute: false,
      anchor: "#work"
    },
    {
      id: "contact",
      title: "Contact",
      path: "/",
      isRoute: false,
      anchor: "#contact"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active nav based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === "/products") {
      setActive("Products");
    } else if (currentPath === "/") {
      // Check if there's a hash in the URL to set the appropriate active state
      const hash = location.hash;
      if (hash) {
        const navItem = navLinks.find(nav => nav.anchor === hash);
        if (navItem) {
          setActive(navItem.title);
        } else {
          setActive("Home");
        }
      } else {
        setActive("Home");
      }
    }
  }, [location]);

  // Function to scroll to element after navigation
  const scrollToElement = (anchor) => {
    // Use setTimeout to ensure DOM is updated after navigation
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);
    
    // Handle different navigation scenarios
    if (nav.isRoute && !nav.anchor) {
      // Simple route navigation (Home, Products)
      navigate(nav.path);
    } else if (!nav.isRoute && nav.anchor) {
      // Anchor navigation
      const currentPath = location.pathname;
      
      if (currentPath === nav.path) {
        // Already on the correct page, just scroll
        const element = document.querySelector(nav.anchor);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // Navigate to the page first, then scroll
        navigate(nav.path);
        // Update URL with hash for proper state management
        window.history.replaceState(null, null, nav.path + nav.anchor);
        // Scroll after navigation
        scrollToElement(nav.anchor);
      }
    }
  };

  // Handle direct anchor clicks (for accessibility and fallback)
  const handleAnchorClick = (e, nav) => {
    e.preventDefault();
    handleNavClick(nav);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            SpectoV &nbsp;
            <span className='sm:block hidden'> | </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
            >
              {nav.isRoute && !nav.anchor ? (
                <Link
                  to={nav.path}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.title}
                </Link>
              ) : (
                <a
                  href={nav.anchor || nav.path}
                  onClick={(e) => handleAnchorClick(e, nav)}
                >
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } transition-colors duration-200`}
                >
                  {nav.isRoute && !nav.anchor ? (
                    <Link
                      to={nav.path}
                      onClick={() => handleNavClick(nav)}
                    >
                      {nav.title}
                    </Link>
                  ) : (
                    <a
                      href={nav.anchor || nav.path}
                      onClick={(e) => handleAnchorClick(e, nav)}
                    >
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;