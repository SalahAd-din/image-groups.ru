"use client";
import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
import { OrderForm } from "@/src/components/forms/order-form";
import { useOrderFormStage } from "@/src/lib/stores/order-form-stage";
import {
    IconExclamationCircle,
    IconLoader2,
    IconMailCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import { contacts } from "@/src/lib/const/contacts";

const CTA = () => {
    const { stage, setStage } = useOrderFormStage();
    return (
        <div>
            <Content>
                <div className="max-w-4xl mx-auto">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        Нужна консультация?
                    </h2>

                    <div className="md:grid grid-cols-6 gap-10 items-center">
                        <div className="max-md:mb-7 max-md:max-w-sm mx-auto col-span-2 relative">
                            {stage == "loading" && <Loading />}
                            {stage == "error" && <Error />}
                            {stage == "success" && <Success />}
                            <p className="text-base  md:text-lg lg:text-xl font-semibold mb-7 md:mb-14 text-center">
                                Оставьте заявку и консультанты свяжутся с вами
                            </p>
                            <OrderForm />
                        </div>
                        <div className=" col-span-4 aspect-[2/1.4] relative">
                            <Image
                                src="/pages/main/cta.jpg"
                                className=" object-cover"
                                fill
                                alt="cta"
                            />
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default CTA;
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
