/*
  name: Название страницы (тайтл)
  url: Ссылка на сайте
  path: путь до компонента
  Cacl != url
*/

const router = {
  home: { name: "О нас", url: "/", path: "/" },
  city: [
    // { name: "Киев", url: "/avtovykup-kiyev", path: "" },
    // { name: "Харьков", url: "/avtovykup-harkov", path: "" },
    // { name: "Донецк", url: "/avtovykup-donetsk", path: "" },
    // { name: "Запорожье", url: "/avtovykup-zaporozhye", path: "" },
    // { name: "Мариуполь", url: "/avtovykup-zhytomyr", path: "" },
    // { name: "Житомир", url: "/avtovykup-zhytomyr", path: "" },
    // { name: "Полтава", url: "/avtovykup-poltava", path: "" },
    // { name: "Львов", url: "/avtovykup-lviv", path: "" },
    {
      name: "Артемовск (Бахмут)",
      url: "/avtovykup-artyomovsk",
      path: "/Artymovsk"
    }
    // { name: "Сумы", url: "/avtovykup-sumy", path: "" },
    // { name: "Чернигов", url: "/avtovykup-chernihiv", path: "" },
    // { name: "Ровно", url: "/avtovykup-rovno", path: "" },
    // { name: "Хмельницкий", url: "/avtovykup-khmelnitsky", path: "" },
    // { name: "Винница", url: "/avtovykup-vinnitsa", path: "" },
    // { name: "Бердянск", url: "/avtovykup-berdyansk", path: "" }
  ],
  contact: { name: "Контакты", url: "/kontakty", path: "/Calc" }
};

module.exports = router;
