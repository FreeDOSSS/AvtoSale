import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Chernigov`);

  const city = "Чернигове";

  return (
    <>
      <Head>
        <title>Автовыкуп в Чернигове. Работаем 24/7. Даем 95% рыночной цены</title>
        <link rel="canonical" href="https://vykup.org/avtovykyp-chernigov" />
        <meta name="description" content="Автовыкуп в Чернигове. Выкупим ваше авто по самой высокой цене быстро! Все виды оплат. Безопасная сделка, бесплатная оценка авто.  Платим сразу всю сумму. Работаем быстро." />
        <meta property="og:title" content="Автовыкуп в Чернигове. Работаем 24/7. Даем 95% рыночной цены" />
        <meta property="og:type" content="website" />
        <meta property = "og:url" content="https://vykup.org/avtovykyp-chernigov" />
        <meta property="og:site_name" content="Автовыкуп в Чернигове. Работаем 24/7. Даем 95% рыночной цены" />
        <meta property="og:description" content="Автовыкуп в Чернигове. Выкупим ваше авто по самой высокой цене быстро! Все виды оплат. Безопасная сделка, бесплатная оценка авто.  Платим сразу всю сумму. Работаем быстро." />
      </Head>
      <City city={city}>
      <p>
      Автолюбители, приняв решение продать транспортное средство, задумываются над тем, как осуществить продажу подержанного авто быстро и максимально выгодно. Казалось бы, все просто: размещаешь рекламу в интернет-сети и встречаешь поток заинтересованных клиентов, желающих посмотреть авто в живую и тут же его купить. Но, в реалии все далеко не так просто. Рынок автомобилей переполнен различными транспортными средствами, на самый разный вкус и цвет. При такой конкуренции, продать подержанный автомобиль становиться довольно трудно. К тому же, каждый покупатель выискивает даже самые мелкие изъяны, в попытках сбить цену на транспортное средство. Если владельцу срочно нужны деньги, он вынужден скинуть цену и отдать товар гораздо дешевле, изначальной стоимости. В случае если же владелец автомобиля отказывается снизить стоимость, продажа транспортного средства может затянуться на несколько месяцев.
      </p>
      <p>
      Автовыкуп в Чернигове избавит Вас от всех вышеописанных проблем, это сравнительно новый сервис, стремительно набирающий популярность. С его помощью продажа транспортного средства сокращается всего до одного дня, при этом Вы получаете не менее 90% оплаты от рыночной стоимости авто в момент обращения. Еще один приятный бонус - Вы полностью избавляете себя от растрат касательно подготовки транспорта к продаже, размещению рекламного объявления, от забот связанных с переговорами, показом авто, торгом, переоформлением транспортного имущества и так далее. Клиенты нашего сервиса не оплачивают оценку автомобиля и его переоформление. 
      </p>
      <h5>Основные преимущества автовыкупа в Чернигове</h5>
      <p>
      Обращаясь в автовыкуп в Чернигове, Вы получаете множество преимуществ:
      </p>
      <ul>
        <li>
        Вы заранее можете узнать стоимость транспорта. Для этого необходимо просто позвонить по номеру телефона, который указан у нас на сайте, либо заказав обратный звонок. При консультации, Вы называете нашему специалисту основные параметры Вашего автомобиля, и узнаете цену, за какую наш сервис готов выкупить у Вас авто. Сумма может быть скорректирована во время детального осмотра транспорта. 
        </li>
        <li>
        Наш сервис не ищет способы снизить цену, мы выплачиваем максимально высокую стоимость автомобиля, не менее 90% от рыночной стоимости машины на момент обращения. Никаких сниженных цен и комиссий.
        </li>
        <li>
        С помощью автовыкупа в Чернигове Вы можете продать автомобиль в любом его техническом состоянии: машина не на ходу, после ДТП, даже если транспортное средство "плавало". Кроме того, наш сервис выкупит даже те машины, которые находятся в залоге у банка, либо не прошли таможенный контроль. Все условия выкупа проблемных автомобилей индивидуально оговариваются с каждым клиентом.
        </li>
        <li>
        Клиенты нашей компании не тратят свое время и силы. Наши специалисты сами приедут на место хранения автомобиля для его оценки и оформления. Денежный расчет Вы получаете сразу.
        </li>
        <li>
        Автовыкуп в Чернигове осуществляется в присутствии квалифицированного юриста и нотариуса, что гарантирует полноценную безопасность для обеих сторон сделки. Наша компания работает без скрытых штрафов и комиссий, мы строго придерживаемся норм законодательства. 
        </li>
        <li>
        Сервис работает круглосуточно, без выходных и перерывов. Вы можете обратиться к нам в любое время дня и ночи, подав заявку на автовыкуп транспортного средства. Если деньги понадобились срочно, единственный вариант - позвонить нам, либо заказать обратный звонок, и Вы получите оплату за Ваш автомобиль в течении часа. 
        </li>
      </ul>
      <h5>
        Автовыкуп в Чернигове - быстро и выгодно
        </h5>
        <p>
        Обратившись в автовыкуп в Чернигове, Вам не нужно будет самим подготавливать машину к продаже, оплачивать оценщика, ездить к юристу, нотариусу для переоформления авто. Все эти заботы мы берем на себя. Вам остается лишь получить оплату, способ которой Вы сами выбираете: наличная оплата, либо перевод денежной суммы на банковскую карту. 
        </p>
        <p>
        Наша компания гарантирует конфиденциальность. Вы можете быть уверенны в том, что никто не узнает Ваши персональные данные, а также сам факт продажи транспортного средства.
        </p>
        <p>
        Все подробности автовыкупа в Чернигове Вы можете узнать заказав обратный звонок на нашем сайте. Наш специалист свяжется с Вами в удобное для Вас время.
        </p>
      </City>
    </>
  );
};

export default App;
