"use client";
import React from "react";
import { OrderForm } from "../forms/order-form";
import Image from "next/image";
import { useOrderFormStage } from "@/src/lib/stores/order-form-stage";
import {
    IconExclamationCircle,
    IconLoader2,
    IconMailCheck,
} from "@tabler/icons-react";
import { contacts } from "@/src/lib/const/contacts";
import Link from "next/link";

const OrderModalContent = () => {
    const { stage, setStage } = useOrderFormStage();
    return (
        <div className="max-w-sm md:max-w-3xl p-1 sm:p-2.5 ">
            <div className=" flex bg-white justify-between overflow-hidden relative">
                {stage == "loading" && <Loading />}
                {stage == "error" && <Error />}
                {stage == "success" && <Success />}
                <div className="md:w-[60%] h-full p-10 flex flex-col justify-around gap-16 min-h-[350px] sm:min-h-[450px]">
                    <p className="font-bold  text-base sm:text-xl uppercase">
                        Оставьте заявку, специалист компании свяжется с Вами и
                        проконсультирует по всем вопросам
                    </p>
                    <div className=" max-w-xs ">
                        <OrderForm />
                    </div>
                </div>
                <div className="w-[40%] hidden md:block relative">
                    <Image
                        src="/modal/orderModal.jpg"
                        fill
                        alt="orderModalImg"
                        className=" object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderModalContent;

const Loading = () => (
    <div className="w-full top-0 h-full left-0 bg-gray-600/70 absolute z-10 flex justify-center items-center">
        <IconLoader2 color="white" size="100" className="animate-spin" />
    </div>
);
const Success = () => (
    <div className="w-full top-0 h-full left-0 bg-white absolute z-10 flex justify-center items-center">
        <div className="flex flex-col items-center gap-5 p-5">
            <IconMailCheck
                color="green"
                size="100"
                className="animate-bounce"
            />
            <p className="text-center text-gray-800 text-lg sm:text-xl font-bold">
                Спасибо за оставленную заявку, наши менеджер скоро свяжутся с
                вами!
            </p>
        </div>
    </div>
);
const Error = () => (
    <div className="w-full top-0 h-full left-0 bg-gray-800/90 absolute z-10 flex justify-center items-center">
        <div className="flex flex-col items-center gap-5   p-5">
            <IconExclamationCircle color="red" size="100" />
            <p className="text-center text-white text-xl font-bold">
                Что то пошло не так...
            </p>
            <p className="text-center text-white text-lg font-medium">
                Пожалуйста свяжитесь по телефону или мессенджеру
            </p>
            <div className="flex gap-4 justify-center text-lg font-medium">
                <Link href={contacts.telegram} className="underline text-white">
                    Telegram
                </Link>
                <Link href={contacts.whatsapp} className="underline text-white">
                    WhatsApp
                </Link>
            </div>
        </div>
    </div>
);
