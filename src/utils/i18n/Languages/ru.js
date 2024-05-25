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
            altRu: "Изменить язык на русский",
            altEn: "Изменить язык на английский",
        },
    },
    footer: {
        h1: "Наша компания была основана в мае 1992 года.Компания успешно занимается выращивание и переработка различных растительных культур, производство и продажа продукты здорового питания, а также натуральная косметика.",
        h3: "Навигация по сайту",
        feedback: "Обратная связь",
        navigation: {
            home: "Главная",
            contact: "Связаться",
            about: "О компании",
            certificates: "Сертификаты",
            news: "Новости",
            products: "Продукты",
        },
        news: {
            news: "Новости",
            tv: "Телеэфир",
            eid: "Хаит",
            june: "1-июня"
        }
    },
    home: HomeRu,
    contact: ContactRu,
    certificate: CertificateRu,
    news: NewsRu,
    products: ProductsRu,
}

export default ru