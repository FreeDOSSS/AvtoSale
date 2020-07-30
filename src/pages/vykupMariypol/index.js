import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";


const App= () => {
  const location = router.city.find(el => el.path === `/vykupMariypol`);

  const city = "Мариуполе";

  return (
    <>
      <Head>
        <title>Автовыкуп в {city}. Работаем 24/7. Даем 95% рыночной цены</title>
        <link rel="canonical" href="https://vykup.org/vykyp-avto-mariypol" />
        <meta name="description" content={`Выкуп авто в ${city}. Выкупим ваше авто по самой высокой цене быстро! Все виды оплат. Безопасная сделка, бесплатная оценка авто.  Платим сразу всю сумму. Работаем быстро.`} />
        <meta property="og:title" content={`Автовыкуп в ${city}. Работаем 24/7. Даем 95% рыночной цены`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vykup.org/vykyp-avto-mariypol" />
        <meta property="og:site_name" content={`Автовыкуп в ${city}. Работаем 24/7. Даем 95% рыночной цены`} />
        <meta property="og:description" content={`Выкуп авто в ${city}. Выкупим ваше авто по самой высокой цене быстро! Все виды оплат. Безопасная сделка, бесплатная оценка авто.  Платим сразу всю сумму. Работаем быстро.`} />

      </Head>
      <City city={city}>
        <h5>Выкуп автомобиля в Мариуполе</h5>
        <p>
        Рады сообщить автолюбителям Мариуполя, что для них доступен сервис срочного выкупа авто. Эта услуга уже несколько лет действует по всей Украине. А теперь наш филиал открыт в вашем городе. Для вас это означает, что всего за несколько часов, без сложной предпродажной подготовки и предварительной рекламной кампании, без рисков и стрессов вы можете продать транспортное средство по выгодной цене. Расскажем обо всех выгодах и нюансах предложения.
        </p>
        <h5>Срочный выкуп авто в Мариуполе</h5>
        <p>
        Продажа транспортного средства представляет собой достаточно сложный поэтапный процесс. Автомобиль – дорогостоящий товар, поэтому сделка купли-продажи требует подготовки. Нужно посетить СТО, поменять расходные материалы, почистить салон. Только в этом случае можно рассчитывать на максимальную выручку. Когда машина готова к продаже, нужно организовать рекламную кампанию для привлечения потенциальных покупателей. А когда заинтересованные лица начнут звонить, надо будет обеспечить им просмотр машины. Это все требует много сил и времени. Ну и не стоит забывать про услуги оценщика, юридическое оформление сделки. Если вы прежде не сталкивались с продажей машины, каждый из перечисленных этапов станет настоящим испытанием. 
        </p>
        <p>
        Что предлагает выкуп авто в Мариуполе? 
        </p>
        <ul>
          <li>Наша фирма покупает машины без предварительной подготовки, после ДТП, без таможенной легализации. </li>
          <li>Мы берем на себя расходы, связанные с оценкой транспорта и с юридическим оформлением сделки.</li>
          <li>Мы приезжаем на место стоянки или хранения машины для ее осмотра в удобное для вас время. </li>
          <li>Выкуп авто осуществляется по максимально высокой цене (с учетом сервиса), которая достигает 80-85% от рыночной стоимости. </li>
          <li>Процедура оформления сделки займет не больше часа. Это отличный вариант для тех, кто продает машину, чтобы быстро поправить финансовое положение. </li>
          <li>Главное правило нашей компании – лояльность  к клиентам. Мы не «сбиваем» цену, не задаем вопросов. </li>
          <li>Выплата денег за покупку осуществляется наличными или перечислением на банковский счет.      </li>
        </ul>
<p>
Итак, выкуп авто в Мариуполе помогает сэкономить время и средства, избавляет от хлопот, стресса, рисков, повышенного внимания мошенников. Наши клиенты получают безопасность, скорость сделки, хорошую выручку. </p>
<p>
Если вам интересно предложение, заполните на сайте форму-анкету, чтобы заранее узнать приблизительную стоимость машины. 
</p>
  <h5>Выкуп авто в Мариуполе для юридических лиц</h5>
<p>
К нашим услугам часто прибегают не только частные лица, но и компании, организации. У среднего бизнеса часто возникает необходимость оперативно получить определенную сумму денег. К примеру, нужно дать задаток за товар или завершить сделку. В этом случае прекрасным вариантом будет продажа подержанного автомобиля. И только мы предлагаем оформление сделки за один час. 
</p>
 <p>
 Также услуга выкупа авто может быть интересна бизнесу, если пришла пора обновлять автопарк. Машины, используемые для коммерческих целей, подвергаются высокому износу узлов и деталей. Частая смена водителей, большой километраж, отсутствие соответствующего технического обслуживания – все эти факторы неблагоприятно влияют на состояние транспорта. Именно поэтому важно продать машину, пока ее цена не достигла низкого уровня. А найти покупателя на такой товар не очень легко. 
 </p>
 <p>
 Мы покупаем подержанные машины, бывшие в коммерческом использовании по максимально выгодной цене. Важно: если автопарк находится в кредите или лизинге, мы возьмем на себя решение формальностей. Компания гарантирует полное юридическое сопровождение сделки. Расчет осуществляется наличными или безналичным способом. Мы работаем без перерывов и выходных, что актуально, если поддержать бизнес финансами требуется на уик-энд или в праздничный день.  
 </p>
 <p>
 Мы гарантируем нашим бизнес покупателям конфиденциальность, сохранение коммерческой информации. Если вам интересна услуга, позвоните нашему менеджеру. Специалист проведет бесплатную консультацию, обозначит все выгоды, которые вы получите от сотрудничества. По телефону можно сразу оформить бесплатный выезд оценщика.   
 </p>
      </City>
    </>
  );
};

export default App;