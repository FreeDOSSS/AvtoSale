import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Donetsk`);

  const city = "Донецке";

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
        Хотите быстро и выгодно продать машину? Тогда услуга «автовыкуп в Донецке»  именно для вас. Сервис уже оценили сотни автовладельцев, которые столкнулись с ситуацией, когда срочно нужны деньги, а наиболее выгодным и удобным ликвидным имуществом является транспортное средство. 
        </p>
        <p>Автовыкуп в Донецке – это возможность в течение одного дня продать машину вне зависимости от марки и технического состояния по очень выгодной стоимости и без каких-либо рисков.</p>
<p>Воспользуйтесь нашими услугами, и вам не придется тратить время и силы, чтобы выгодно представить товар на специализированном рынке, объективно оценить его, уверенно провести переговоры с потенциальным покупателем, прежде чем получить результат. Наших клиентов не заботит затратная предпродажная подготовка транспортного средства. Они не думают о размещении рекламы, демонстрации авто на профильных рынках. Не переживают о законном оформлении сделки и не тревожатся о рисках, с которыми продавец может столкнуться.</p>
<p>Автовыкуп в Донецке – это замечательный шанс уже сегодня получить на руки или на банковскую карту деньги от продажи автомобиля. А сумма, на которую вы можете рассчитывать – не менее 90 % от рыночной стоимости транспортного средства на момент обращения.</p>
        <h5>Кого заинтересует автовыкуп в Донецке?</h5>
        <p>
        Время – главная ценность современного человека. Его катастрофически не хватает на общение с семьей, на любимую работу, на творчество и отдых. Особенно жаль тратить драгоценные минуты и часы на проект, который может затянуться на долгие месяцы. А сколько придется ждать реального покупателя на автомобиль? Это одному богу известно.
        </p>
<p>Экономьте время с услугой автовыкуп в Донецке! На оформление сделки купли/продажи вашего транспортного средства нам потребуется не больше часа. Даже если машина не на ходу, вам не стоит переживать. Мы сами приедем для ее оценки и покупки на место стоянки или хранения. Будьте уверены, лучших условий вам точно не найти. Не верите? Сравнивайте сами:</p>
        <p><strong>
        1.	Юридические риски</strong>
        </p><p>
        При самостоятельной продаже автомобиля его владелец рискует нарваться на мошенников, когда документы будут переоформлены, а заплачена будет неполная сумма. Доказать несостоятельность сделки будет очень сложно и сделать это можно только через суд. Это может случиться по причине не порядочности покупателя, а также его сознательном обмане, когда в договор вписываются различные штрафы, комиссии и удержания. Человек, не знакомый со всеми юридическими тонкостями, не может чувствовать себя защищенным.
        </p>
        <p>Автовыкуп в Донецке сопровождают профессиональные юристы. Сделка проводится в полном соответствии с нормами действующего законодательства, поэтому владелец транспортного средства полностью защищен от любых рисков. Никакие комиссии или другие скрытые платежи договором не предусмотрены. Вы получите на руки ровно ту сумму, которая была оговорена.</p>
        <p><strong>2.	Чтобы продать, не нужно платить</strong></p>
        <p>Занимаясь самостоятельной продажей автомобиля, его владельцу придется прилично потратиться: сначала подготовить машину к продаже, затем – хорошо прорекламировать товар, подготовить необходимые документы.</p>
        <p>Автовыкуп в Донецке исключает какие-либо вложения. Оценку машины, переоформление ее мы берем на себя.</p>
        <p><strong>
        3.	Покупка авто не на ходу</strong>
        </p>
<p>
Продать машину после ДТП или нуждающуюся в ремонте сложно. Покупатели ищут дешевый вариант транспортного средства, полностью пригодного к эксплуатации. Вряд ли их заинтересует ваше предложение. Но переживать не стоит. Гарантированно продать машину не на ходу можно, прибегнув к услуге автовыкупа в Донецке.
</p>
<p><strong>
4.	Наличный расчет или деньги на карту</strong>
</p>
<p>
Мы предлагаем вам самим выбрать удобную форму расчета. Мы готовы выплатить деньги от продажи транспортного средства наличными на месте проведения сделки или перевести их на карту. 
</p>
<h5>Автовыкуп в Донецке: что вы гарантированно получите?</h5>
        <ul>
          <li>Продажу машины в день обращения.</li>
          <li>Полную безопасность.</li>
          <li>Не менее 90% от рыночной стоимости авто.</li>
          <li>Возможность оформить сделку в любое время дня и ночи, так как мы работаем без выходных и перерывов. </li>
        </ul>
        <p>
        Узнавайте заранее сумму, которую вы получите за машину. Для этого вам достаточно по телефону назвать основные ее параметры, и наш специалист назовет цену, которую мы заплатим.
        </p>
      </City>
    </>
  );
};

export default App;
