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
    // { name: "Харьков", url: "/avtovykyp-harkov", path: "" },
    // { name: "Донецк", url: "/avtovykyp-donetsk", path: "" },
    // { name: "Запорожье", url: "/avtovykyp-zaporozhye", path: "" },
    // { name: "Мариуполь", url: "/avtovykyp-zhytomyr", path: "" },
    // { name: "Житомир", url: "/avtovykyp-zhytomyr", path: "" },
    // { name: "Полтава", url: "/avtovykyp-poltava", path: "" },
    // { name: "Львов", url: "/avtovykyp-lviv", path: "" },
    {
      name: "Артемовск (Бахмут)",
      url: "/avtovykyp-artemovsk",
      path: "/Artymovsk"
    }
    // { name: "Сумы", url: "/avtovykyp-sumy", path: "" },
    // { name: "Чернигов", url: "/avtovykyp-chernihiv", path: "" },
    // { name: "Ровно", url: "/avtovykyp-rovno", path: "" },
    // { name: "Хмельницкий", url: "/avtovykyp-khmelnitsky", path: "" },
    // { name: "Винница", url: "/avtovykyp-vinnitsa", path: "" },
    // { name: "Бердянск", url: "/avtovykyp-berdyansk", path: "" }
  ],
  contact: { name: "Контакты", url: "/kontakty", path: "/Calc" }
};

module.exports = router;
