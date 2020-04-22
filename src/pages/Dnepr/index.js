import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Dnepr`);

  const city = "Днепре";

  return (
    <>
      <Head>
        <title>Автовыкуп в {city}</title>
        <link rel="canonical" href={`${baseUrl}${location.url}`} />
        <meta name="description" content={`Срочный выкуп авто в ${city}`} />
        <meta property="og:title" content={`Автовыкуп в ${city}`} />
        <meta property="og:type" content="website" />
        <meta property = "og:url" content = {`${baseUrl}${location.url}`} />
       

      </Head>
      <City city={city}>
      <p>
      Автовыкуп в Днепре — новая, но довольно популярная услуга. Множество автовладельцев пользуются данным сервисом, с его помощью можно быстро и выгодно, без лишних хлопот продать транспортное средство. Особенно популярен автовыкуп среди тех, у кого нет времени на заботы связанные с самостоятельной продажей авто, а крупная денежная сумма понадобилась срочно. Наш сервис выплачивает не менее 90% от рыночной стоимости авто на момент обращения, при этом, мы берем на себя все заботы и расходы, связанные с продажей авто, его оценкой и переоформлением.
      </p>
      <h5>Автовыкуп в Днепре — клиенты сервиса</h5>
<p>
Для многих автолюбителей машина является не просто транспортным средством. В первую очередь — это верный друг, который всегда поможет с комфортом добраться в любую точку на карте. Для многих автомобиль является предметом гордости, способом выразить свою индивидуальность проведя соответствующий тюнинг. Кроме того, машина — это ликвидное имущество, и если своевременно ее обслуживать, проводить технические ремонты, то можно существенно увеличить остаточную стоимость машины.
</p>
<p>
Часто случается так, что автовладелец принимает решение продать транспортное средство. Причины могут быть самыми разными: продажа авто в связи с переездом, больше нет необходимости в транспортном средстве, желание купить новую модель, понадобилась большая сумма денег. Всех этих людей объединяет одно — как можно выгоднее продать авто за краткий срок.
</p>
<h5>Самостоятельная продажа авто - в чем заключается сложность?</h5>
<p>
Приняв решение самостоятельно продать автомобиль, владелец сталкивается с рядом трудностей.
</p>
<ol>
  <li>
  Риск встречи с мошенниками. Выезжая на авторынок для продажи авто, либо приводя покупателей на место хранения автомобиля, есть высокий риск попасть на мошенников, которые оставят Вас без машины и без запланированной выручки.
  </li>
  <li>
  Для самостоятельной продажи важно уметь представить "товар" в выгодном свете, чтобы выручить с него как можно больше. Не многие знают как грамотно представить автомобиль, и к тому же, каждый потенциальный покупатель будет выискивать даже самые мелкие дефекты, дабы как можно больше снизить стоимость. Что тогда остается делать автовладельцу? Либо продавать авто по сниженной цене, не выручив необходимую сумму денег. Либо же держать цену и ждать, пока появится покупатель, готовый заплатить полную сумму. Во втором случае продажа авто может быть затянута на несколько месяцев.
  </li>
  <li>
  Также не стоит забывать о предпродажной подготовке автомобиля. При необходимости оплатить ремонт, потратиться на рекламное объявление и его продвижение (чтобы Ваша реклама всегда была в топе), трата времени и сил на многочисленные звонки, переговоры и показы авто, бумажная волокита с переоформлением авто. А что делать, если авто находится в залоге у банка, либо машина не прошла таможенный контроль?
  </li>
  <li>
  Продажа не справного автомобиля. Как продать автомобиль побывавший в ДТП, либо "плавал" в водоеме? Как продать машину, которая находится не в справном техническом состоянии?
  </li>
</ol>
<p>Единственная возможность продать авто в любом его состоянии, максимально выгодно и быстро — автовыкуп в Днепре.</p>
<h5>Главные плюсы автовыкупа в Днепре</h5>
<p>Важным преимуществом сервиса автовыкуп в Днепре является возможность продать автомобиль непосредственно в день обращения, по максимально выгодной цене. Сделка о купле/продаже авто, в нашем сервисе, оформляется всего в течение часа. При этом, Вам гарантированна юридическая защита, ведь сделка осуществляется в присутствии квалифицированных юриста и нотариуса. Все четко по закону, без скрытых штрафов и комиссий.</p>
<p>
Основные преимущества:
</p>
<ul>
  <li>
  Оперативная продажа автомобиля.
  </li>
  <li>
  Максимально выгодные условия.
  </li>
  <li>
  Юридическая безопасность.
  </li>
  <li>
  Конфиденциальность для каждого клиента.
  </li>
  <li>
  Круглосуточная работа автовыкупа в Днепре.
  </li>
</ul>
<p>
Вы можете заранее узнать примерную стоимость Вашего автомобиля. Для этого, просто закажите обратный звонок, сообщите консультанту основные параметры транспорта и Вы узнаете примерную цену, которая наша компания готова Вам заплатить. Стоимость автомобиля может быть скорректирована при детальном осмотре оценщиком.
</p>
<p>
Более подробную информацию про автовыкуп в Днепре Вы можете узнать на нашем сайте, либо позвонив по номеру телефона.
</p>


      </City>
    </>
  );
};

export default App;
