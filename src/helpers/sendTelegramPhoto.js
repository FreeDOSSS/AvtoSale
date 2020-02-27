import { token, chatId } from "./../constants/constants";
import axios from "axios";
function sendTelegramPhoto(data) {
  axios
    .post(
      `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}`,
      // `https://api.telegram.org/bot${token}/sendMediaGroup?chat_id=${chatId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data;"
        }
      }
    )
    .then(res => console.dir(res))
    .catch(err => console.dir(err));
}

module.exports = sendTelegramPhoto;
