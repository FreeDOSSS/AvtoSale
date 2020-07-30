/*
  name: Название страницы (тайтл)
  url: Ссылка на сайте
  path: путь до компонента
  Cacl != url
*/

const router = {
  home: { name: "О нас", url: "/", path: "/" },
  city: [
    { name: "Киев", url: "/avtovykup-kiyev.html", path: "/Kiev" },
    { name: "Харьков", url: "/avtovykyp-harkov.html", path: "/Harkov" },
    { name: "Донецк", url: "/avtovykyp-donetsk.html", path: "/Donetsk" },
    { name: "Запорожье", url: "/avtovykyp-zaporoje.html", path: "/Zaporoje" },
    { name: "Мариуполь", url: "/avtovykyp-mariypol.html", path: "/Mariypol" },
    { name: "Житомир", url: "/avtovykyp-jitomir.html", path: "/Jitomir" },
    { name: "Полтава", url: "/avtovykyp-poltava.html", path: "/Poltava" },
    { name: "Львов", url: "/avtovykyp-lvov.html", path: "/Lvov" },
    { name: "Артемовск (Бахмут)", url: "/avtovykyp-artemovsk.html", path: "/Artymovsk"},
    { name: "Сумы", url: "/avtovykyp-symy.html", path: "/Symy" },
    { name: "Чернигов", url: "/avtovykyp-chernigov.html", path: "/Chernigov" },
    { name: "Ровно", url: "/avtovykyp-rovno.html", path: "/Rovno" },
    { name: "Хмельницкий", url: "/avtovykyp-hmelnitskii.html", path: "/Hmelnitskii"},
    { name: "Винница", url: "/avtovykyp-vinnitsa.html", path: "/Vinnitsa" },
    { name: "Бердянск", url: "/avtovykyp-berdiansk.html", path: "/Berdiansk" },
    { name: "Мелитополь", url: "/avtovykyp-melitopol.html", path: "/Melitopol" },
    { name: "Белая Церковь", url: "/avtovykyp-belaya-tserkov.html", path: "/Belaya-Tserkov" },
    { name: "Луцк", url: "/avtovykyp-lutsk.html", path: "/Lutsk" },
    { name: "Днепр", url: "/avtovykyp-dnepr.html", path: "/Dnepr" },

    {
      name: "Артемовск new",
      url: "/vykyp-avto-artemovsk.html",
      path: "/vykupArtymovsk"
    },
    {
      name: "Житомир new",
      url: "/vykyp-avto-jitomir.html",
      path: "/vykupJitomir"
    },
    {
      name: "Харьков new",
      url: "/vykyp-avto-harkov.html",
      path: "/vykupHarkov"
    },
    {
      name: "Мариуполь new",
      url: "/vykyp-avto-mariypol.html",
      path: "/vykupMariypol"
    },
    {
      name: "Львов new",
      url: "/vykyp-avto-lvov.html",
      path: "/vykupLvov"
    },
    {
      name: "Сумах new",
      url: "/vykyp-avto-symy.html",
      path: "/vykupSymy"
    },
    {
      name: "Белой церкви new",
      url: "/vykyp-avto-belaya-tserkov.html",
      path: "/vykupBelaya-Tserkov"
    },
    {
      name: "Донецк new",
      url: "/vykyp-avto-donetsk.html",
      path: "/vykupDonetsk"
    },
  ],
  contact: { name: "Контакты", url: "/kontakty.html", path: "/Calc" },
};

module.exports = router;