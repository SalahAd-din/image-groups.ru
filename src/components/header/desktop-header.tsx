import React from "react";
import { Content } from "../Content";
import Image from "next/image";
import { Button } from "../ui/button";
import { navigation } from "@/src/lib/const/navigation";
import Link from "next/link";
import OrderModal from "../modals/order-modal";
import OrderModalContent from "../modal-content/order-modal";
import { contacts } from "@/src/lib/const/contacts";

const DesktopHeader = () => {
    return (
        <div className="hidden lg:block">
            <Content verticalPadding={false} className="bg-white opacity-90">
                <div className="relative py-4 md:py-8">
                    <div className="flex justify-between ">
                        <div className="flex justify-around ">
                            <div className="flex justify-center gap-3 sm:gap-5  flex-shrink w-full  left-0">
                                <div className="flex gap-5 items-center content-center">
                                    {/* <Image
                                        src="/logo/logo3.svg"
                                        width={55}
                                        height={33}
                                        alt="logo"
                                        className="-translate-y-1 object-contain max-sm:w-[75px] shrink-0"
                                    /> */}
                                    <div className="text-2xl text-orange-950 uppercase font-extrabold leading-6">
                                        <p>Образ</p>
                                        <p>Групп</p>
                                    </div>
                                    <p className="hidden xl:block max-sm:text-[11px] max-sm:leading-[16px] text-sm font-semibold text-amber-900">
                                        Выходим за рамки стандартов –
                                        эксклюзивные{" "}
                                        <span className="md:block">
                                            предложения на спецтехнику для
                                            тяжёлых задач!
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="space-y-1">
                                <p className="title_medium text-primary">
                                    Время работы
                                </p>
                                <p className="text-sm">{contacts.schedule}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="title_medium text-primary">
                                    Телефон
                                </p>
                                <p className="text-sm">
                                    <Link href={`tel:${contacts.phone}`}>
                                        {contacts.phone}
                                    </Link>
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="title_medium text-primary">
                                    Мессенджер
                                </p>
                                <div className="flex gap-4 text-sm">
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
                </div>
                <div className="max-md:hidden flex justify-between py-5">
                    <div className="space-x-10">
                        {navigation.map((e, i) => (
                            <Link
                                key={i}
                                href={e.link}
                                className="body_medium hover:font-bold hover:underline"
                            >
                                {e.title}
                            </Link>
                        ))}
                    </div>
                    <div className="">
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
                </div>
            </Content>
        </div>
    );
};

export default DesktopHeader;
