import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";

const App= () => {
  const location = router.city.find(el => el.path === `/Mariypol`);

  const city = "Мариуполе";

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
        Многие владельцы транспортных средств, кто решает продать движимое имущество, задаются вопросом: «Как быстро продать подержанный автомобиль и получить за него хорошую цену?». На первый взгляд, все просто. Достаточно оплатить рекламу в интернете, и неиссякаемый поток потенциальных покупателей будет в очередь выстраиваться на просмотр. Однако на практике все не так. Автомобильный рынок переполнен предложениями на любой цвет и вкус. А в условиях конкуренции выручить за машину с пробегом приличную сумму не так уж просто. Избалованные скидками и рассрочками покупатели во время показа автомобиля выискивают реальные и несуществующие дефекты в попытке снизить стоимость транспортного средства. И владелец, которому деньги нужны срочно, вынужден отдавать «товар» на треть дешевле, чем он реально стоит. Ну а те, кто держит цену, может прождать сделки несколько месяцев.
        </p>
<p>
  Все эти неприятные моменты останутся в стороне, если воспользоваться услугой «Автовыкуп в Мариуполе». Сравнительно новая, но уже очень популярная услуга позволяет продать машину в течение одного дня и получить от продажи приличную сумму – не менее 90% от реальной рыночной стоимости. Кроме того, продавец избавляется от необходимости затратной предпродажной подготовки, от хлопот, связанных с проведением переговоров, необходимостью демонстрации ТС многочисленным потенциальным покупателям. Нашим клиентам не нужно платить деньги за оценку авто, его перерегистрацию. Хотите узнать все выгоды, которые открывает для вас автовыкуп в Мариуполе?
</p>
        <h5>Какие преимущества несет автовыкуп в Мариуполе автовладельцам?</h5>
        <ol>
<li>Узнать предварительно, какую цену вы сможете выручить за конкретное ТС, можно по телефону. Достаточно озвучить основные параметры авто специалисту, и он скажет, за какую сумму компания готова его выкупить.</li>
<li>
Мы предлагаем максимально высокие цены на автомобили – 90 и более процентов от фактической стоимости ТС на момент обращения клиента.
</li>
<li>
Автовыкуп в Мариуполе распространяется на практически все транспортные средства. Банковский залог, неудовлетворительное техническое состояние, отсутствие таможенной легализации – все это для нас не повод отказать вам в сделке. Условия выкупа проблемного автомобиля оговариваются с каждым собственником в индивидуальном порядке.
</li>
<li>
Вам не придется тратить силу и время. Мы приедем сами на место стоянки или хранения транспортного средства, на месте оформим сделку и проведем расчет.
</li>
<li>
Автовыкуп в Мариуполе сопровождает опытный юрист, поэтому вы полностью защищены с правовой точки зрения. Мы работаем без скрытых комиссий, штрафов. Деятельность регламентируется нормами действующего законодательства. Мы работаем по всей Украине и дорожим своей репутацией, поэтому полное соблюдение прав клиента – одно из главных условий сотрудничества.
</li>
<li>
Круглосуточный прием заявок на автовыкуп в Мариуполе – это то, что особенно ценят те люди, которых в сотрудничестве с нами привлекает оперативность получения средств от продаж автомобилей. Когда банки и другие финансовые учреждения обедают или отдыхают, мы работаем. Если вам срочно нужны деньги и ваш способ их получения – продажа автомобиля, то звоните прямо сейчас! Быстрее чем мы, вашу машину никто не купит.
</li>
<li>
Командная работа по принципу одного окна позволяет быстро проводить сделку. Вам не придется ездить к оценщику, встречаться с юристом, посещать нотариуса для оформления бумаг. Все специалисты сами приедут, чтобы заверить и подтвердить факт купли/продажи авто. 
</li>
<li>
Мы уважаем ваше право на конфиденциальность, поэтому персональные данные, а также сам факт продажи транспорта не подлежит разглашению третьим (незаинтересованным) лицам. 
</li>
<li>
По вашему выбору мы готовы рассчитаться за покупку наличными средствами на месте оформления сделки или перевести деньги на указанную банковскую карточку.
</li>
<li>
Вы ничем не рискуете. Быстро, с соблюдением предварительных договоренностей, корректно. Именно так осуществляется авовыкуп в Мариуполе.
</li>
        </ol>
        <p>
        Узнать подробности и оставить заявку на автовыкуп можно прямо сейчас. Свяжитесь с нами по телефону или оформите обратный звонок. Мы перезвоним, чтобы ответить на ваши вопросы.
        </p>
      </City>
    </>
  );
};

export default App;
