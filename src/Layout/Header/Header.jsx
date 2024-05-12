import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookSquare, FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react";
import logo from '../../../public/logo.png';
import ru from '../../../public/ru.png';
import uk from '../../../public/uk.png';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  var { t } = useTranslation()
  var { pathname } = useLocation()
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const [li, setLi] = useState(false);
  const [li1, setLi1] = useState(false);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);
  const [li4, setLi4] = useState(false);
  var funcClassName1 = (li, path) => {
    var className = `relative before:absolute before:w-1/3 before:scale-x-${li === true || pathname === path ? "100" : null} before:left-0 before:bg-[#f7c35f] before:-bottom-[2px] after:absolute after:w-1/3 after:bg-[#f7c35f] after:right-0 after:-bottom-[2px] after:scale-x-${li === true || pathname === path ? "100" : null} duration-700`
    return className

  }
  var funcClassName = (path, className, dependencie) => {
    var classs = pathname === path || dependencie == true ? `h-${className}` : null;
    return classs
  }
  var div = (w1, w2, path, dependencie) => {
    var div = pathname === path || dependencie == true ? <div className={`absolute right-1/3 left-1/3 bottom-[5px] w-1/3 after:absolute after:w-${w1} after:bg-[#f7c35f] after:-rotate-[20deg] after:-bottom-[4px] after:-left-[1px] after:${funcClassName("/", "[2px]", li)} before:absolute before:w-${w2} before:bg-[#f7c35f] before:rotate-[20deg] before:-right-[1px] before:-bottom-[4px] before:${funcClassName("/", "[2px]", li1)} duration-300`}></div> : ""
    return div
  }

  return (
    <header>
      <div className="bg-[#f6f5f2] py-2 hidden lg:block">
        <div className="hidden lg:flex flex-row justify-between container text-xs">
          <div className="flex flex-row gap-5 items-center">
            <div className="flex flex-row items-center gap-2">
              <a href="https://mehrigiyo.org/en/">
                <FaFacebookSquare className="text-gray hover:text-[#f7c35f] duration-500 cursor-pointer h-5 w-5" />
              </a>
              <a href="https://mehrigiyo.org/en/">
                <FaTelegram className="text-gray hover:text-[#f7c35f] duration-500 cursor-pointer h-5 w-5" />
              </a>
              <a href="https://mehrigiyo.org/en/">
                <FaYoutube className="text-gray hover:text-[#f7c35f] duration-500 cursor-pointer h-5 w-5" />
              </a>
              <a href="https://mehrigiyo.org/en/">
                <FaInstagram className="text-gray hover:text-[#f7c35f] duration-500 cursor-pointer h-5 w-5" />
              </a>
            </div>
            <h1 className="text-xs text-gray">{t("header.topHeader.slogan")}</h1>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row items-center justify-center gap-1">
              <a href="mailto:info@mehrigiyo.org" className="w-5">
                <svg width="172" height="120" viewBox="0 0 172 120" className="w-5 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.1769 77.0836L22.8753 28.5043C19.5687 25.8405 21.4523 20.5 25.6983 20.5L146.302 20.5C150.548 20.5 152.431 25.8405 149.125 28.5043L88.8231 77.0836C87.1751 78.4112 84.8249 78.4112 83.1769 77.0836Z" fill="#255946" stroke="#255946" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 20C15.9249 20 11 24.9249 11 31V109C11 111.44 11.7942 113.694 13.1382 115.518L84.1046 57.6746L86 56.1297L87.8954 57.6746L158.862 115.518C160.206 113.694 161 111.44 161 109V31C161 24.9249 156.075 20 150 20H22ZM156.762 117.677L155.932 117L86 60L16.0684 117L15.2381 117.677C17.1035 119.133 19.4504 120 22 120H150C152.55 120 154.897 119.133 156.762 117.677Z" fill="#255946" />
                  <path d="M85.0523 81.1627L86 81.9352L86.9477 81.1627L160.56 21.1627L163.827 18.5H159.612L12.3878 18.5H8.17337L11.4402 21.1627L85.0523 81.1627Z" stroke="#F6F5F2" strokeWidth="3" />
                </svg>
              </a>
              <span>info@mehrigiyo.org</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <svg width="100" height="100" className="w-4 h-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM52 47.0378V10H48V49.8146V50H48.321L82.1404 69.5256L84.3428 65.711L52 47.0378Z" fill="#255946" />
              </svg>
              <span>{t("header.topHeader.days")}</span>
            </div>
          </div>
        </div>
      </div>
      <nav className='container flex flex-row justify-between items-center'>
        <div className='mr-5 xl:mr-0'>
          <img src={logo} alt="" />
        </div>
        <div className='hidden xl:block'>
          <ul className='flex flex-row gap-5 items-center justify-center h-full'>
            <li onMouseEnter={() => setLi(true)} onMouseLeave={() => setLi(false)} className={`text-gray hover:text-black duration-300 ${funcClassName1(li, "/")} before:${funcClassName("/", "[2px]", li)} after:${funcClassName("/", "[2px]", li)}`}>
              <NavLink to={"/"}>{t("header.bottomHeader.home")}</NavLink>
              {div(3, 3, "/", li)}
            </li>
            <li onMouseEnter={() => setLi1(true)} onMouseLeave={() => setLi1(false)} className={`text-gray hover:text-black duration-300 ${funcClassName1(li1, "/certificate")} before:${funcClassName("/certificate", "[2px]", li1)} after:${funcClassName("/certificate", "[2px]", li1)}`}>
              <button>{t("header.bottomHeader.about")}</button>
              {div(4, 4, "/certificate", li1)}
              <button>
                <NavLink to={"/certificate"} className={`absolute -bottom-10 rounded-md -right-4 -left-4 shadow-md py-2 px-4 flex flex-row items-center justify-center scale-y-0 duration-300 ${li1 == true ? "scale-y-100" : null}`}>{t("header.bottomHeader.certificate")}</NavLink>
              </button>
            </li>
            <li onMouseEnter={() => setLi2(true)} onMouseLeave={() => setLi2(false)} className={`text-gray hover:text-black duration-300 ${funcClassName1(li2, "/products")} before:${funcClassName("/products", "[2px]", li2)} after:${funcClassName("/products", "[2px]", li2)}`}>
              <NavLink to={"/products"}>{t("header.bottomHeader.products")}</NavLink>
              {div(4, 3, "/products", li2)}
            </li>
            <li onMouseEnter={() => setLi3(true)} onMouseLeave={() => setLi3(false)} className={`text-gray hover:text-black duration-300 ${funcClassName1(li3, "/news")} before:${funcClassName("/news", "[2px]", li3)} after:${funcClassName("/news", "[2px]", li3)}`}>
              <NavLink to={"/news"}>{t("header.bottomHeader.news")}</NavLink>
              {div(3, 3, "/news", li3)}
            </li>
            <li onMouseEnter={() => setLi4(true)} onMouseLeave={() => setLi4(false)} className={`text-gray hover:text-black duration-300 ${funcClassName1(li4, "/contact")} before:${funcClassName("/contact", "[2px]", li4)} after:${funcClassName("/contact", "[2px]", li4)}`}>
              <NavLink to={"/contact"}>{t("header.bottomHeader.contact")}</NavLink>
              {div(4, 4, "/contact", li4)}
            </li>
          </ul>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <img src={ru} alt="" />
          <img src={uk} alt="" />
          <button className='flex flex-row text-white py-5 px-4 bg-[#f7c35f] rounded-xl gap-1'>
            <svg width="306" height="259" className='w-10 h-10' viewBox="0 0 306 259" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M136.263 186.383C120.791 182.971 74.1512 131.732 71.5308 118.682C68.9104 105.632 88.2515 98.0922 88.1244 89.1391C87.9972 80.186 58.1359 30.9227 48.192 28.271C38.2481 25.6192 6.49969 53.8592 5.98273 75.0907C5.51244 94.4052 31.7241 143.457 68.9242 183.544C99.3189 216.297 153.155 253.199 175.574 253.744C197.994 254.29 228.107 222.322 226.247 213.67C224.387 205.019 179.634 170.986 169.657 169.711C159.679 168.435 145.366 188.391 136.263 186.383Z" stroke="white" strokeWidth="10" />
              <path d="M224.5 110C266.75 110 301 86.4949 301 57.5C301 28.5051 266.75 5 224.5 5C182.25 5 148 28.5051 148 57.5C148 67.1448 151.79 76.1822 158.403 83.9491L148 110L183.539 101.848C195.382 107.01 209.432 110 224.5 110Z" stroke="white" strokeWidth="10" />
              <circle cx="198.5" cy="57.5" r="7.5" fill="white" />
              <circle cx="250.5" cy="57.5" r="7.5" fill="white" />
              <circle cx="224.5" cy="57.5" r="7.5" fill="white" />
            </svg>
            <div className='flex flex-col items-start'>
              <span className='text-xs'>{t("header.bottomHeader.call")}</span>
              <span className='font-semibold'>+998 97 700 78 72</span>
            </div>
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden duration-300"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </nav>
    </header >
  )
}

export default Header