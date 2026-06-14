requiere("dotenv").config();

const TelegramBot = requiere("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token || !chatId) {
    console.error("Faltan TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID");

}

const bot = new TelegramBot(token, { polling: false }):

aysinc function enviarMensaje() {
    try {
        await bot.sendMessage(
            chatId,
            "Clase 38: prueba inicial de Telegram desde Node.js"
        );

        console.log("Mensaje enviado correctamente a Telegram");
    }   catch (eror) {
        console.error("Error al enviar mensaje", error.message);
    }
}