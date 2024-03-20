import React from "react";
import { Content } from "./Content";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../lib/const/navigation";
import { Button } from "./ui/button";
import OrderModalContent from "./modal-content/order-modal";
import OrderModal from "./modals/order-modal";
import { contacts } from "../lib/const/contacts";

const Footer = () => {
    return (
        <footer className="bg-[#161616]">
            <Content>
                {" "}
                <div className="flex justify-between max-xl:flex-col gap-5">
                    <div className=" md:shrink-0">
                        <div className="flex gap-5 md:items-center ">
                            {/*  <Image
                                src="/logo/logo-white.svg"
                                width={55}
                                height={33}
                                alt="logo"
                                className="-translate-y-1 object-contain max-sm:w-[75px] shrink-0"
                            /> */}
                            <div className="text-xl text-white uppercase font-extrabold leading-6">
                                <p>Образ</p>
                                <p>Групп</p>
                            </div>
                            <p className=" xl:block max-sm:text-[11px] max-sm:leading-[16px] text-sm font-medium text-white max-w-sm">
                                Выходим за рамки стандартов – эксклюзивные
                                предложения на спецтехнику для тяжёлых задач!
                            </p>
                        </div>
                    </div>
                    <div className="max-sm:flex-col flex gap-2.5 sm:gap-16  w-full xl:justify-end">
                        <div className="space-y-1">
                            <p className="title_medium text-white xl:text-right">
                                Время работы
                            </p>
                            <p className="body_smallest text-white">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                        <div>
                            <p className="title_medium text-white xl:text-right">
                                Телефон
                            </p>
                            <Link
                                href={`tel:${contacts.phone}`}
                                className="text-sm text-white"
                            >
                                {contacts.phone}
                            </Link>
                        </div>
                        <div>
                            <p className="title_medium text-white xl:text-right">
                                Мессенджер
                            </p>
                            <div className="flex gap-4 text-sm text-white">
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
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-between items-start">
                    {/* <div className="hidden md:block space-x-10 mt-10">
                        {navigation.map((e, i) => (
                            <Link
                                key={i}
                                href={e.link}
                                className="body_medium hover:font-bold hover:underline text-white"
                            >
                                {e.title}
                            </Link>
                        ))}
                    </div> */}
                    <div className="text-sm flex flex-col gap-2.5 sm:gap-5 text-white max-w-xl">
                        <p>
                            <span className="text-white/60">
                                Юридический адрес (Фактический адрес):
                            </span>{" "}
                            422550, Республика Татарстан, Зеденододьский район,
                            город Зеленодольск, улица Карла Маркса, дом 24, офис
                            1
                        </p>
                        {/* <p>
                            Фактический адрес: 422550, Республика Татарстан,
                            Зеденододьский район, город Зеленодольск, улица
                            Карла Маркса, дом 24, офис 1
                        </p> */}
                        {/* <a className=" underline" href="tel:+7 (927) 245-91-70">
                            Рабочий телефон: +7 (927) 245-91-70
                        </a> */}
                        <div className="flex gap-2.5 sm:gap-5 max-sm:flex-col">
                            <p>
                                <span className="text-white/60">
                                    ИНН / КПП:{" "}
                                </span>{" "}
                                1648045363 / 164801001
                            </p>
                            <p>
                                <span className="text-white/60">ОГРН: </span>{" "}
                                1171690021293
                            </p>
                        </div>
                    </div>
                    <OrderModal
                        trigger={
                            <Button className="max-md:hidden relative z-10">
                                Получить консультацию
                            </Button>
                        }
                    >
                        <OrderModalContent />
                    </OrderModal>
                </div>
            </Content>
        </footer>
    );
};

export default Footer;
