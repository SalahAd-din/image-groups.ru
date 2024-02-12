import React from "react";
import { Content } from "./Content";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "../const/navigation";
import { Button } from "./ui/button";
import OrderModalContent from "./modal-content/order-modal";
import OrderModal from "./modals/order-modal";

const Footer = () => {
    return (
        <footer className="bg-[#161616]">
            <Content>
                {" "}
                <div className="flex justify-between">
                    <div className=" md:shrink-0">
                        <div className="flex max-md:flex-col gap-5 md:items-center ">
                            <Image
                                src="/logo/logo-white.svg"
                                width={55}
                                height={33}
                                alt="logo"
                                className="-translate-y-1 object-contain max-sm:w-[75px] shrink-0"
                            />
                            <p className="max-sm:text-[11px] max-sm:leading-[16px] text-sm font-medium text-white max-w-sm">
                                Выходим за рамки стандартов – эксклюзивные
                                предложения на спецтехнику для тяжёлых задач!
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex gap-16  w-full justify-end">
                        <div>
                            <p className="title_medium text-white text-right">
                                Время работы
                            </p>
                            <p className="body_smallest text-white">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                        <div>
                            <p className="title_medium text-white text-right">
                                Телефон
                            </p>
                            <p className="body_smallest text-white">
                                +7 933 322 6371
                            </p>
                        </div>
                        <div>
                            <p className="title_medium text-white text-right">
                                Мессенджер
                            </p>
                            <p className="body_smallest text-white">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-between">
                    <div className="hidden md:block space-x-10 mt-10">
                        {navigation.map((e, i) => (
                            <Link
                                key={i}
                                href={e.link}
                                className="body_medium hover:font-bold hover:underline text-white"
                            >
                                {e.title}
                            </Link>
                        ))}
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
