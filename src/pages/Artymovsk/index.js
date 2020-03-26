import City from "./../../templates/City";
import Head from "./../../components/Head";
import React from "react";
import { baseUrl } from "./../../constants/constants";
import router from "./../../router/router";


const App= () => {
  const location = router.city.find(el => el.path === `/Artymovsk`);

  const city = "Артемовске";

  return (
    <>
      <Head>
        <title>Автовыкуп в {city}</title>
        <meta rel="cononical" href={`${baseUrl}${location.url}`} />
        <meta name="description" content={`Срочный выкуп авто в ${city}`} />
        <meta property="og:title" content={`Автовыкуп в ${city}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${location.url}`} />
        <meta property="og:site_name" content="Автовыкуп" />
        <meta property="og:description" content={`Срочный выкуп авто в ${city}`} />
      </Head>
      <City city={city}>
        <p>
        Услуга «Автовыкуп» в Артемовске пользуется высоким спросом у автовладельцев. Ведь она позволяет быстро и выгодно продать любой автомобиль вне зависимости от его марки, модели и даже технического состояния. Сервис избавляет собственника транспортного средства от хлопот и забот, связанных с предпродажной подготовкой, размещением рекламы, демонстрацией авто потенциальным покупателям и оформлением самой сделки. Если прежде продажа машины могла занять месяцы, то сегодня автовыкуп в Артемовске – это возможность получить до 90% от честной рыночной стоимости транспорта на руки или на банковскую карту в день обращения.
        </p>
        <h5>Кому интересен автовыкуп в Артемовске?</h5>
        <p>
        Любой автовладелец, кто действительно хочет продать автомобиль, оценит преимущества сервиса. Когда деньги нужны «сегодня», если некогда заниматься юридическими вопросами, те, кто никогда прежде не сталкивался с подобной задачей – все эти люди становятся нашими партнерами.
        </p>
        <p>
        Наш главный козырь – ваше выигранное время. Мы его гарантированно сэкономим. На оформление сделки потребуется не больше часа. И даже ехать на нашу базу вам не придется. Если машина не на ходу – это уже не ваша проблема. Мы знаем, что с ней делать. Услуга автовыкуп в Артемовске стала для многих автовладельцев той возможностью, которая позволила им не отказываться от планов. Сравните, что мы предлагаем, и чем вы рискуете, отказавшись от сотрудничества: 
        </p>
        <p><strong>1.	Безопасная сделка</strong></p>
        <p>Самый большой риск для продавца дорогого имущества – быть обманутым. При самостоятельной продаже автомобиля вы можете встретиться с мошенниками, которые выплатят не полную сумму, насчитают скрытые штрафы.</p>
        <p>Автовыкуп в Артемовске сопровождают квалифицированные юристы. Поэтому клиенты компании абсолютно защищены с правовой точки зрения. Мы платим ту сумму, которую называет оценщик в полном размере, до копейки. Скрытые комиссии, штрафы, взносы отсутствуют.</p>
        <p><strong>2.	Отсутствие дополнительных расходов</strong></p>
        <p>При самостоятельной продаже автомобиля его владельцу придется потратиться. Статьи расхода – подготовка машины к продаже, реклама в интернете или местных СМИ, подготовка документов, перерегистрация в ГИБДД.</p>
        <p>Автовыкуп в Артемовске исключает дополнительные расходы для продавца. Оценка транспортного средства, переоформление – компания берет на себя все расходы.</p>
        <p><strong>3.	Покупка автомобилей в любом техническом состоянии</strong></p>
        <p>Получится ли самостоятельно продать автомобиль, который побывал в ДТП или пожаре? А если ТС «искупалось»? Старая машина? Не на ходу? «Евробляха», в залоге у банка? Ни в одном из случаев быстро и выгодно продать машину вам не получится. Попробовать можно, но результат будет один – вы обратитесь к автовыкупу в Артемовске.</p>
        <p><strong>4.	Удобная форма расчета</strong></p>
        <p>Для продавцов машин до сих пор небезопасно получать крупную сумму денег на руки и добираться с ней до дома. Но только не при автовыкупе. Мы переведем деньги на указанную вами банковскую карту, чтобы исключить для вас любые риски.</p>
        <p>Для нас ни один из этих параметров не является проблемным. Мы покупаем разные машины и даем за них объективную цену.</p>
        <h5>Автовыкуп в Артемовске: что вы получите?</h5>
        <p>Главные плюсы, которые вы получите – экономия времени и гарантированная юридическая безопасность. Предлагаем ваши преимущества списком:</p>
        <ul>
          <li>Скорость сделки – получите деньги в день обращения.</li>
          <li>Никаких рисков. Сделка проходит под пристальным контролем юристов.</li>
          <li>Выгодно. Мы выкупаем авто по самой высокой цене в Артемовске. Лучшую стоимость на таких условиях вам не предложит никто.</li>
          <li>Работаем, когда другие отдыхают. В любое время дня и ночи, в выходной и праздничный день мы готовы предложить вам сделку. </li>
          <li>Узнайте заранее, сколько получите. Достаточно по телефону озвучить параметры вашей машины, и специалист назовет цену, которую мы готовы заплатить за нее.</li>
          <li>Никаких дополнительных трат. Все сопутствующие расходы оплачивает компания-покупатель.</li>
        </ul>
        <h5>Наша команда</h5>
        <p>
        Автовыкуп в Артемовске осуществляет компания, в штате которой или на договорных условиях работают юристы, нотариусы, оценщики, технические специалисты. Принцип «одного окна» – это удобно для наших клиентов. А для нас это очень важно. Перезвоните или закажите обратный звонок, чтобы уточнить нюансы самого выгодного автовыкупа в Артемовске. Конфиденциальность гарантируем.
        </p>
      </City>
    </>
  );
};

export default App;
