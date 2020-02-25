/*
  name: Название страницы (тайтл)
  url: Ссылка на сайте
  path: путь до компонента
*/

const router = {
  home: { name: "О нас", url: "/", path: "/" },
  city: [
    { name: "киев", url: "/kiev", path: "" },
    { name: "харьков", url: "/harkov", path: "" },
    { name: "донецк", url: "/donetsk", path: "" },
    { name: "Запорожье", url: "/zaporozhye", path: "" },
    { name: "Мариуполь", url: "/zhytomyr", path: "" },
    { name: "Житомир", url: "/Zhytomyr", path: "" },
    { name: "Полтава", url: "/poltava", path: "" },
    { name: "Львов", url: "/lviv", path: "" },
    { name: "Артемовск (Бахмут)", url: "/artyomovsk ", path: "" },
    { name: "Сумы", url: "/sumy", path: "" },
    { name: "Чернигов", url: "/chernihiv", path: "" },
    { name: "Ровно", url: "/rovno", path: "" },
    { name: "Хмельницкий", url: "/khmelnitsky", path: "" },
    { name: "Винница", url: "/vinnitsa", path: "" },
    { name: "Бердянск", url: "/berdyansk", path: "" }
  ],
  readme: { name: "Полезная Информация", url: "#", path: "" },
  contact: { name: "Контакты", url: "/contact", path: "/contact" }
};

// export default router;
module.exports = router;
