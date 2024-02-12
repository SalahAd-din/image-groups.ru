//@ts-nocheck
"use server";
import axios from "axios";

interface OrderFormHandlerProps {
    phone: string;
    url: string;
}

const sendToAmo = async data => {
    try {
        const amoResult = await axios.post(
            process.env.API_URL + "universal/amo",
            data
        );
        return amoResult.data.result;
    } catch (error) {
        return "error";
    }
};

const sendToMail = async data => {
    try {
        const mailResult = await axios.post(
            process.env.API_URL + "universal/mail",
            data
        );
        return mailResult.data.result;
    } catch (error) {
        return "error";
    }
};

export const orderFormHandlerAction = async (data: OrderFormHandlerProps) => {
    const [amoResponse, mailResponse] = await Promise.allSettled([
        sendToAmo(data),
        sendToMail(data),
    ]);

    switch (true) {
        case amoResponse.value != "succes" && mailResponse.value != "succes":
            try {
                const amoResult = await axios.post(
                    "https://core-helper.vercel.app/api/telegrammBot/sendMessage",
                    {
                        message: `Посетитель попытался оставить заявка, но заявка не попала ни в амо ни в почту. Номер пользователя:${data.phone}, url: ${data.url} `,
                    }
                );
                return "ok";
            } catch (error) {
                return "ok";
            }

        case amoResponse.value != "succes" || mailResponse.value != "succes":
            try {
                const amoResult = await axios.post(
                    "https://core-helper.vercel.app/api/telegrammBot/sendMessage",
                    {
                        message: `Посетитель попытался оставить заявка, но заявка попала только в почту или только амо. Номер пользователя:${data.phone}, url: ${data.url} `,
                    }
                );
                return "ok";
            } catch (error) {
                return "ok";
            }

        case amoResponse.value === "succes" && mailResponse.value === "succes":
            return "ok";
    }
};
