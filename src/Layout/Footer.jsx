import { useTranslation } from "react-i18next"
import { FaFacebookSquare, FaInstagram, FaTelegramPlane, FaYoutube, FaChevronRight, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logoLight from "../../public/logo-light.png"

const Footer = () => {
  const { t } = useTranslation("footer")
  const navigation = [
    {
      name: t("navigation.home"),
      path: "/home",
    },
    {
      name: t("navigation.about"),
      path: "/home",
    },
    {
      name: t("navigation.certificates"),
      path: "/certificates",
    },
    {
      name: t("navigation.products"),
      path: "/products",
    },
    {
      name: t("navigation.news"),
      path: "/news",
    },
    {
      name: t("navigation.contact"),
      path: "/contact",
    }
  ]
  const icons = [
    {
      icon: "Facebook",
      element: <FaFacebookSquare size={25} className="text-white hover:text-yellow duration-300" />,
      path: "https://mehrigiyo.org/ru/"
    },
    {
      icon: "Telegram",
      element: <FaTelegramPlane size={25} className="text-white hover:text-yellow duration-300" />,
      path: "https://mehrigiyo.org/ru/"
    },
    {
      icon: "Youtube",
      element: <FaYoutube size={25} className="text-white hover:text-yellow duration-300" />,
      path: "https://mehrigiyo.org/ru/"
    },
    {
      icon: "Instagram",
      element: <FaInstagram size={25} className="text-white hover:text-yellow duration-300" />,
      path: "https://mehrigiyo.org/ru/"
    },
  ]
  const news = [
    {
      path: "/news/broadcast",
      img: "../../public/tv.jpg",
      title: t("news.tv")
    },
    {
      path: "/news/xait",
      img: "../../public/hay.jpg",
      title: t("news.eid")
    },
    {
      path: "/news/1-june",
      img: "../../public/v1.jpg",
      title: t("news.june")
    },
  ]
  return (
    <footer>
      <div className="w-full bg-footer1 h-4"></div>
      <div className="2xl:bg-footer bg-footerGreen text-white font-nunito">
        <div className="container py-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-20">
          <div className="w-full flex flex-col gap-5">
            <img src={logoLight} alt="" className="w-48" />
            <h1 className="w-full text-sm text-grey max-w-[271px] 2xl:max-w-[291px]">{t("h1")}</h1>
            <div className="flex flex-row gap-3 lg:gap-5 duration-300">
              {icons.map((icon) => {
                return <Link key={icon.icon} to={icon.path}>
                  {icon.element}
                </Link>
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h3 className="text-lg">{t("h3")}</h3>
            <ul className="flex flex-col gap-5">
              {navigation.map((li) => {
                return <li key={li.name}>
                  <Link to={li.path} className="text-grey flex flex-row items-center gap-2 hover:text-yellow text-sm duration-300">
                    <FaChevronRight size={10} />
                    {li.name}
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3>{t("news.news")}</h3>
            <ul className="grid grid-rows-3 gap-5">
              {news.map((news) => {
                return <li key={news.title}>
                  <Link to="/news/broadcast" className="flex flex-row items-center gap-3">
                    <img src={news.img} alt="tv" className="w-[90px] h-[65px]" />
                    {news.title}
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div>
            <h3 className="mb-5">{t("feedback")}</h3>
            <ul className="grid grid-rows-3 gap-10">
              <li className="flex flex-col gap-5">
                <FaPhone className="text-yellow hover:text-white duration-300" />
                <hr className="max-w-[271px] text-[#ffffff1a]" />
              </li>
              <li className="flex flex-col gap-5">
                <IoIosMail className="text-yellow hover:text-white duration-300" size={20} />
                <hr className="max-w-[271px] text-[#ffffff1a]" />
              </li>
              <li className="flex flex-col gap-5">
                <IoLocationSharp className="text-yellow hover:text-white duration-300" />
                <hr className="max-w-[271px] text-[#ffffff1a]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1f4e3d] relative">
      <div className="w-full bg-footer2 absolute h-4 -top-4"></div>
        <div className="container flex flex-row items-center justify-center py-10 text-grey">
          <h5 className="text-sm">© Copyright 2022 - Mehrigiyo || Designed by © <span className="text-green">Innovations</span> 2021</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer