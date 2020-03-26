import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Vinnitsa`);

  const city = "Виннице";

  return (
    <>
      <Head>
        <title>Автовыкуп в {city}</title>
        <meta rel="cononical" href={`${baseUrl}${location.url}`} />
        <meta name="description" content={`Срочный выкуп авто в ${city}`} />
        <meta property="og:title" content={`Автовыкуп в ${city}`} />
        <meta property="og:type" content="website" />
        <meta property = "og:url" content = {`${baseUrl}${location.url}`} />
       

      </Head>
      <City city={city}>
        <p>
        Услуга «Автовыкуп» в Виннице еще только набирает обороты, а уже вызвал интерес сотен автолюбителей. А все потому, что сервис позволяет частному или юридическому лицу быстро, удобно и безопасно продать автомобиль на максимально выгодных условиях. 
        </p>
<p>Если вы не хотите тратить время и силы на самостоятельную продажу авто, которая может и не увенчаться успехом, обязательно узнайте больше про автовыкуп в Виннице, связавшись с нами по телефону. А информация и сам сервис вас реально может заинтересовать, ведь наши клиенты получают за свои транспортные средства не менее 90% рыночной стоимости авто на момент обращения. К тому же, все хлопоты, связанные с оценкой машины,  оформлением сделки, переоформлением бумаг мы берем на себя.</p>

        <h5>Кому интересен автовыкуп в Виннице?</h5>
        <p>
        Машина – это не только средство быстрого и комфортного передвижения внутри города, а так же за его пределами. Прежде всего, это ликвидное имущество, которое при необходимости можно выгодно продать. Такие ситуации могут возникнуть в самый неожиданный момент. Например, у бизнесмена необходимость быстрой продажи авто может возникнуть из-за нехватки средств для заключения выгодной сделки. А у рядового автолюбителя желание продать машину может появиться, если на «горизонте» маячит выгодное предложение более «молодой» и продвинутой модели. Причины продажи могут быть разными. Но каждый владелец автомобиля хочет продать его с максимальной выгодой и как можно быстрее. 
        </p>
<h5>Какие риски поджидают автовладельцев при самостоятельной продаже транспортного средства?</h5>
        <p>
        Сложности самостоятельной продажи автомобиля подстерегают его владельца на разных этапах реализации задумки. Начать с того, что далеко не каждый человек знает, как сделать выигрышные фотографии, где поместить объявление, как грамотно составить текст описания. 
        </p>
        <p>На следующем этапе, если потенциальные покупатели все же найдутся, владельцу машины предстоит тратить время на показ «товара», выслушивать критику, направленную покупателем на снижение цены, отвечать на многочисленные вопросы. Все это тяжело выдержать физически и морально. А если показов несколько? </p>
        <p>Не стоит забывать о рисках встречи с мошенниками, когда можно лишиться и машины, и средств за нее. Да и расходы, связанные с предпродажной подготовкой, оценкой, переоформлением машины никто не отменял.</p>
        <p>Вообще, продажа может затянуться на долгие месяцы, что вовсе не устраивает тех, кто нуждается в большой сумме денег, ради которой и расстается с железным конем, уже сегодня. Всех этих неудобств, неприятностей и рисков лишена такая услуга как автовыкуп в Виннице.</p>
        <h5>Автовыкуп в Виннице: особенности и выгоды</h5>
        <p>Самые главные плюсы сервиса – возможность получить деньги от продажи авто в день обращения и абсолютная безопасность сделки. Ну и цена машины, которую предлагает автовыкуп в Виннице, более чем привлекательная. Она составляет не меньше 90% от рыночной стоимости авто на момент обращения. Сделку сопровождают квалифицированные юристы, поэтому она абсолютно правомерна и полностью защищает справа сторон. Договор купли/продажи заверяет нотариус. Если говорить коротко о других преимуществах услуги, то они выглядят так:</p>
        <ul>
          <li>Высокая скорость продажи. Уже в день обращения владелец автомобиля получает деньги от продажи авто.</li>
          <li>Безопасность. Сделка не несет никакого риска, проводится под пристальным надзором адвокатов.</li>
          <li>С учетом комплексного сервиса и оформления по принципу «одного окна» наши клиенты получают максимально возможную финансовую выгоду. Тем более что все сопутствующие расходы компенсирует компания-покупатель.</li>
          <li>От продавца требуется минимальный пакет самых необходимых документов. А автовыкуп у Виннице, в свою очередь, предоставляет круглосуточный сервис. Мы работаем без выходных и перерывов.</li>
          <li>Узнать сумму, которую можно выручить за машину, компания предлагает заранее и по телефону. Достаточно озвучить основные параметры машины, чтобы специалист назвал цену, которую автовыкуп готов за нее заплатить.</li>
        </ul>
        <p>
        Больше подробностей про сервис можно узнать по телефону. Закажите обратный звонок! Конфиденциальность обращения и сделки мы гарантируем.
        </p>
      </City>
    </>
  );
};

export default App;
