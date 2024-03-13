"use server";
import axios from "axios";
interface sendMailProps {
    phone: string;
    url: string;
}

export async function sendAmo({ url, phone }: sendMailProps) {
    console.log("работает?");
    try {
        const amoResult = await axios.post(
            "https://amo-service.vercel.app/api/create-lead",
            { url, phone, account: "intertorgbeiben" }
        );

        console.log("all right");
    } catch (error) {
        console.log(error);
    }
}
