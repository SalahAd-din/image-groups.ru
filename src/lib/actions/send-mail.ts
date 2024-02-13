//@ts-nocheck
"use server";
import * as nodemailer from "nodemailer";

interface sendMailProps {
    phone: string;
    url: string;
}

export async function sendMail({ url, phone }: sendMailProps) {
    console.log(url, phone);
    console.log("ok");
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: "trucks-volga",
                pass: "oujadyjyuzelelth",
            },
        });

        const mailOptions = {
            from: "trucks-volga@yandex.ru",
            to: "trucks-volga@yandex.ru",
            subject: "Заявка с лэндинга",
            text: `Номер телефона: ${phone},\nUrl: ${url}`,
        };

        await transporter.sendMail(mailOptions);

        return { message: "it is alright" };
    } catch (error) {
        return { message: error.message };
    }
}
