import { useTranslation } from "react-i18next"
import logoLight from "../../public/logo-light.png"

const Footer = () => {
  const { t } = useTranslation("footer")
  return (
    <footer>
      <div className="bg-footer">
        <div className="container">
          <div>
            <div className="w-full 2xl:w-1/4 flex flex-col gap-5">
              <img src={logoLight} alt="" className="w-48" />
              <h1 className="w-full text-sm text-grey">{t("h1")}</h1>
              <div></div>
            </div>
            <ul>
              <li>
                <svg width="38" height="70" viewBox="0 0 38 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.8284 1.1716C3.04735 0.390553 1.78102 0.390553 0.999971 1.1716C0.218922 1.95265 0.218922 3.21898 0.999971 4.00003L3.8284 1.1716ZM0.999971 4.00003L35 38L37.8284 35.1716L3.8284 1.1716L0.999971 4.00003Z" fill="#B5C3BE" />
                  <path d="M0.585786 66.5858C-0.195262 67.3668 -0.195262 68.6332 0.585786 69.4142C1.36684 70.1953 2.63316 70.1953 3.41421 69.4142L0.585786 66.5858ZM3.41421 69.4142L37.4142 35.4142L34.5858 32.5858L0.585786 66.5858L3.41421 69.4142Z" fill="#B5C3BE" />
                </svg>
                Home
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="bg-[#1f4e3d]">
        <div className="container">

        </div>
      </div>
    </footer>
  )
}

export default Footer