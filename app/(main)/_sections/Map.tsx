import React from "react";
import { Content } from "@/src/components/Content";
import { contacts } from "@/src/const/contacts";
import Link from "next/link";

const Map = () => {
    return (
        <div>
            <Content>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start max-w-5xl mx-auto">
                    <div className=" aspect-square bg-gray-400 max-md:order-2"></div>
                    <div className="max-md:order-1">
                        <h2 className="display_medium uppercase  mb-7 md:mb-14">
                            Контакты
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-4 md:gap-x-6">
                            <div className="flex flex-col gap-2">
                                <p className="uppercase font-bold md:text-lg">
                                    Адрес:
                                </p>
                                <p className=" text-sm text-gray-700">
                                    Г. Зеленодольск, ул. Карла Маркса, д. 24,
                                    офис 1
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="uppercase font-bold md:text-lg">
                                    График работы:
                                </p>
                                <p className=" text-sm text-gray-700">
                                    Г. Зеленодольск, ул. Карла Маркса, д. 24,
                                    офис 1
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="uppercase font-bold md:text-lg">
                                    Телефон:
                                </p>
                                <p className=" text-sm text-gray-700">
                                    {contacts.phone}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="uppercase font-bold md:text-lg">
                                    мессенджеры:
                                </p>
                                <p className=" text-sm text-gray-700">
                                    <div className="flex gap-4">
                                        <Link
                                            href={contacts.telegram}
                                            className="underline"
                                        >
                                            Telegram
                                        </Link>
                                        <Link
                                            href={contacts.whatsapp}
                                            className="underline"
                                        >
                                            WhatsApp
                                        </Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default Map;
