import axios from "axios";

const sendTelegramMes = data => {
  const token = "1005869345:AAEyX9GfXq2Wv5N_LklJUro_lkDa_XQjIH4";
  const chatId = "-361745660";
  //   const errChatId = "";
  const sendUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

  const text = data.map(el => `<b>${el.name}: </b>${el.value}%0A`).join("");
  return axios
    .get(`${sendUrl}${text}`)
    .then(data => 200)
    .catch(err => {
      console.log("err is func", err);
      return 400;
    });
};

module.exports = sendTelegramMes;
