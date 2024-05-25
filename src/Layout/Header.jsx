import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookSquare, FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  IconButton, Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import logo from '../../public/logo.png';
import ru from '../../public/ru.png';
import uk from '../../public/uk.png';
import { NavLink, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-7 w-7 inline-block align-text-bottom text-yellow ${id === open ? "rotate-180" : ""} transition-transform duration-300`}
    >
      <path
        fillRule="evenodd"
        d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Header = () => {
  var { t, i18n } = useTranslation("header")
  var { pathname } = useLocation()
  const [openNav, setOpenNav] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [li, setLi] = useState(false);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#f6f5f2] py-2 hidden lg:block font-nunito">
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
            <h1 className="text-xs text-gray">{t("topHeader.slogan")}</h1>
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
              <span>{t("topHeader.days")}</span>
            </div>
          </div>
        </div>
      </div>
      <nav className='bg-header bg-no-repeat bg-cover bg-bottom absolute py-5 w-full'>
        <div className='container flex flex-row justify-between items-center'>
          <div className='mr-5 xl:mr-0'>
            <img src={logo} alt="" />
          </div>
          <div className='hidden 2xl:block'>
            <ul className='flex flex-row gap-5 items-center justify-center h-full'>
              <li className={`group hover:text-black text-gray duration-300 relative`}>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <NavLink to={"/"}>{t("bottomHeader.home")}</NavLink>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
              </li>
              <li onMouseEnter={() => setLi(true)} onMouseLeave={() => setLi(false)} className={`group hover:text-black text-gray relative`}>
                <button className='flex flex-row items-center'>{t("bottomHeader.about")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-17 w-7 inline-block align-text-bottom text-yellow"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-[1px] -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-[1px] right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/certificate"} className={`${li === true ? "scale-y-100" : "scale-y-0"} absolute -bottom-10 rounded-md -right-4 -left-4 shadow-md py-2 px-4 flex flex-row items-center justify-center duration-300`}>
                  <button>
                    {t("bottomHeader.certificate")}
                  </button>
                </NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/products"}>{t("bottomHeader.products")}</NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/news"}>{t("bottomHeader.news")}</NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/contact"}>{t("bottomHeader.contact")}</NavLink>
              </li>
            </ul>
          </div>
          <div className='md:flex flex-row items-center gap-5 hidden ml-10 2xl:ml-0'>
            <button className='scale-100 hover:scale-110 duration-300'>
              <img src={ru} alt={t("altRu")} onClick={() => i18n.changeLanguage("ru")} />
            </button>
            <button className='scale-100 hover:scale-110 duration-300'>
              <img src={uk} alt={t("altEn")} onClick={() => i18n.changeLanguage("en")} />
            </button>
            <button className='flex flex-row text-white py-5 px-4 bg-[#f7c35f] rounded-xl gap-1'>
              <svg width="306" height="259" className='w-10 h-10' viewBox="0 0 306 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.263 186.383C120.791 182.971 74.1512 131.732 71.5308 118.682C68.9104 105.632 88.2515 98.0922 88.1244 89.1391C87.9972 80.186 58.1359 30.9227 48.192 28.271C38.2481 25.6192 6.49969 53.8592 5.98273 75.0907C5.51244 94.4052 31.7241 143.457 68.9242 183.544C99.3189 216.297 153.155 253.199 175.574 253.744C197.994 254.29 228.107 222.322 226.247 213.67C224.387 205.019 179.634 170.986 169.657 169.711C159.679 168.435 145.366 188.391 136.263 186.383Z" stroke="white" strokeWidth="10" />
                <path d="M224.5 110C266.75 110 301 86.4949 301 57.5C301 28.5051 266.75 5 224.5 5C182.25 5 148 28.5051 148 57.5C148 67.1448 151.79 76.1822 158.403 83.9491L148 110L183.539 101.848C195.382 107.01 209.432 110 224.5 110Z" stroke="white" strokeWidth="10" />
                <circle cx="198.5" cy="57.5" r="7.5" fill="white" />
                <circle cx="250.5" cy="57.5" r="7.5" fill="white" />
                <circle cx="224.5" cy="57.5" r="7.5" fill="white" />
              </svg>
              <div className='flex flex-col items-start'>
                <span className='text-xs'>{t("bottomHeader.call")}</span>
                <span className='font-semibold'>+998 97 700 78 72</span>
              </div>
            </button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 2xl:hidden duration-300"
            ripple={false}
            onClick={() => setOpenNav(true)}
          >
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
          </IconButton>
        </div>
      </nav >
      <nav className={`bg-header bg-no-repeat bg-cover bg-bottom py-5 w-screen fixed top-0 ${headerBg === true ? "translate-y-0" : "-translate-y-full"} duration-300`}>
        <div className='container flex flex-row justify-between items-center'>
          <div className='mr-5 xl:mr-0'>
            <img src={logo} alt="" />
          </div>
          <div className='hidden 2xl:block'>
            <ul className='flex flex-row gap-5 items-center justify-center h-full'>
              <li className={`group hover:text-black text-gray duration-300 relative`}>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <NavLink to={"/"}>{t("bottomHeader.home")}</NavLink>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
              </li>
              <li onMouseEnter={() => setLi(true)} onMouseLeave={() => setLi(false)} className={`group hover:text-black text-gray relative`}>
                <button className='flex flex-row items-center'>{t("bottomHeader.about")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-17 w-7 inline-block align-text-bottom text-yellow"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-[1px] -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/certificate" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-[1px] right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/certificate"} className={`${li === true ? "scale-y-100" : "scale-0"} absolute -bottom-10 rounded-md -right-4 -left-4 shadow-md py-2 px-4 flex flex-row items-center justify-center duration-300`}>
                  <button>
                    {t("bottomHeader.certificate")}
                  </button>
                </NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/products" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/products"}>{t("bottomHeader.products")}</NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/news" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/news"}>{t("bottomHeader.news")}</NavLink>
              </li>
              <li className={`group hover:text-black text-gray relative`}>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/3 transition duration-700 bg-yellow absolute h-[2px] left-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/3 transition duration-700 bg-yellow right-0 -bottom-[2px]`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 w-1/6 transition duration-700 bg-yellow absolute h-[2px] bottom-0 -rotate-[20deg] left-1/3`}></div>
                <div className={`${pathname === "/contact" ? "scale-y-100" : "scale-y-0"} group-hover:scale-y-100 absolute h-[2px] w-1/6 transition duration-700 bg-yellow bottom-0 right-1/3 rotate-[20deg] `}></div>
                <NavLink to={"/contact"}>{t("bottomHeader.contact")}</NavLink>
              </li>
            </ul>
          </div>
          <div className='md:flex flex-row items-center gap-5 hidden ml-10 2xl:ml-0'>
            <button className='scale-100 hover:scale-110 duration-300'>
              <img src={ru} alt={t("altRu")} onClick={() => i18n.changeLanguage("ru")} />
            </button>
            <button className='scale-100 hover:scale-110 duration-300'>
              <img src={uk} alt={t("altEn")} onClick={() => i18n.changeLanguage("en")} />
            </button>
            <button className='flex flex-row text-white py-5 px-4 bg-[#f7c35f] rounded-xl gap-1'>
              <svg width="306" height="259" className='w-10 h-10' viewBox="0 0 306 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.263 186.383C120.791 182.971 74.1512 131.732 71.5308 118.682C68.9104 105.632 88.2515 98.0922 88.1244 89.1391C87.9972 80.186 58.1359 30.9227 48.192 28.271C38.2481 25.6192 6.49969 53.8592 5.98273 75.0907C5.51244 94.4052 31.7241 143.457 68.9242 183.544C99.3189 216.297 153.155 253.199 175.574 253.744C197.994 254.29 228.107 222.322 226.247 213.67C224.387 205.019 179.634 170.986 169.657 169.711C159.679 168.435 145.366 188.391 136.263 186.383Z" stroke="white" strokeWidth="10" />
                <path d="M224.5 110C266.75 110 301 86.4949 301 57.5C301 28.5051 266.75 5 224.5 5C182.25 5 148 28.5051 148 57.5C148 67.1448 151.79 76.1822 158.403 83.9491L148 110L183.539 101.848C195.382 107.01 209.432 110 224.5 110Z" stroke="white" strokeWidth="10" />
                <circle cx="198.5" cy="57.5" r="7.5" fill="white" />
                <circle cx="250.5" cy="57.5" r="7.5" fill="white" />
                <circle cx="224.5" cy="57.5" r="7.5" fill="white" />
              </svg>
              <div className='flex flex-col items-start'>
                <span className='text-xs'>{t("bottomHeader.call")}</span>
                <span className='font-semibold'>+998 97 700 78 72</span>
              </div>
            </button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 2xl:hidden duration-300"
            ripple={false}
            onClick={() => setOpenNav(true)}
          >
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
          </IconButton>
        </div>
      </nav >
      <div className={`absolute top-0 bg-white py-10 w-1/3 z-20 h-full flex flex-col items-center ${openNav ? "translate-x-0" : "-translate-x-[110%]"} duration-300`}>
        <div className='flex flex-row justify-between items-center gap-5  w-10/12'>
          <img src={logo} alt="logo" className='w-1/2' />
          <button onClick={() => setOpenNav(false)}>
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
          </button>
        </div>
        <ul className='flex flex-col gap-5 items-start justify-center w-10/12 pt-10'>
          <li className={`group text-green duration-300 relative`}>
            <NavLink to={"/"}>{t("bottomHeader.home")}</NavLink>
          </li>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className='border-b-0 text-green text-base font-normal py-0 px-0 justify-start hover:text-green' onClick={() => handleOpen(1)}>{t("bottomHeader.about")}</AccordionHeader>
            <AccordionBody className="py-0 pt-4">
              <NavLink to={"/certificate"} className="text-green text-base font-normal mb-0">
                <button>
                  {t("bottomHeader.certificate")}
                </button>
              </NavLink>
            </AccordionBody>
          </Accordion>
          <li className={`group text-green relative`}>
            <NavLink to={"/products"}>{t("bottomHeader.products")}</NavLink>
          </li>
          <li className={`group text-green relative`}>
            <NavLink to={"/news"}>{t("bottomHeader.news")}</NavLink>
          </li>
          <li className={`group text-green relative`}>
            <NavLink to={"/contact"}>{t("bottomHeader.contact")}</NavLink>
          </li>
        </ul>
        <div className='flex flex-row items-center justify-start w-10/12 gap-3 mt-5'>
          <svg width="172" height="120" viewBox="0 0 172 120" className="w-7 h-8 text-yellow" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M83.1769 77.0836L22.8753 28.5043C19.5687 25.8405 21.4523 20.5 25.6983 20.5L146.302 20.5C150.548 20.5 152.431 25.8405 149.125 28.5043L88.8231 77.0836C87.1751 78.4112 84.8249 78.4112 83.1769 77.0836Z" fill="#f7c35f" stroke="#f7c35f" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 20C15.9249 20 11 24.9249 11 31V109C11 111.44 11.7942 113.694 13.1382 115.518L84.1046 57.6746L86 56.1297L87.8954 57.6746L158.862 115.518C160.206 113.694 161 111.44 161 109V31C161 24.9249 156.075 20 150 20H22ZM156.762 117.677L155.932 117L86 60L16.0684 117L15.2381 117.677C17.1035 119.133 19.4504 120 22 120H150C152.55 120 154.897 119.133 156.762 117.677Z" fill="#f7c35f" />
            <path d="M85.0523 81.1627L86 81.9352L86.9477 81.1627L160.56 21.1627L163.827 18.5H159.612L12.3878 18.5H8.17337L11.4402 21.1627L85.0523 81.1627Z" stroke="#F6F5F2" strokeWidth="3" />
          </svg>
          <svg width="100" height="100" className="w-5 h-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM52 47.0378V10H48V49.8146V50H48.321L82.1404 69.5256L84.3428 65.711L52 47.0378Z" fill="#f7c35f" />
          </svg>
        </div>
        <div className='flex flex-row items-center justify-between w-10/12 mt-10'>
          <div className='flex flex-row items-center gap-2'>
            <img src={ru} alt="" />
            <img src={uk} alt="" />
          </div>
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
        </div>
      </div>
      <div className={`${openNav ? "translate-x-0" : "-translate-x-full"} delay-100 duration-300 h-full w-full bg-green bg-opacity-50 absolute top-0 left-0 z-10`}></div>
    </>
  )
}

export default Header