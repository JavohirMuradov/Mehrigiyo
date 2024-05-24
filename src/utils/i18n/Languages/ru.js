import CertificateRu from "./rus/Certificate"
import ContactRu from "./rus/Contact"
import HomeRu from "./rus/Home"
import NewsRu from "./rus/News"
import ProductsRu from "./rus/Products"


const ru = {
    header: {
        topHeader: {
            slogan: "Mehrigiyo поможет вам во всём",
            days: "Пн - Сб 8:00 - 6:30, Воскресенье - ЗАКРЫТО"
        },
        bottomHeader: {
            home: "Главная",
            contact: "Связаться",
            about: "О компании",
            certificate: "Сертификаты",
            news: "Новости",
            products: "Продукты",
            call: "Звоните в любое время",
        },
    },
    footer: {
        h1: "Наша компания была основана в мае 1992 года.Компания успешно занимается выращивание и переработка различных растительных культур, производство и продажа продукты здорового питания, а также натуральная косметика."
    },
    home: HomeRu,
    contact: ContactRu,
    certificate: CertificateRu,
    news: NewsRu,
    products: ProductsRu,
}

export default ru