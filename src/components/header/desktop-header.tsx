import React from "react";
import { Content } from "../Content";
import Image from "next/image";
import { Button } from "../ui/button";
import { navigation } from "@/src/lib/const/navigation";
import Link from "next/link";
import OrderModal from "../modals/order-modal";
import OrderModalContent from "../modal-content/order-modal";

const DesktopHeader = () => {
    return (
        <div className="hidden lg:block">
            <Content verticalPadding={false} className="bg-white opacity-90">
                <div className="relative py-4 md:py-8">
                    <div className="flex justify-between ">
                        <div className="flex justify-around ">
                            <div className="flex justify-center gap-3 sm:gap-5  flex-shrink w-full absolute left-0">
                                <div className="flex gap-5 items-center content-center">
                                    <Image
                                        src="/logo/logo3.svg"
                                        width={55}
                                        height={33}
                                        alt="logo"
                                        className="-translate-y-1 object-contain max-sm:w-[75px] shrink-0"
                                    />
                                    <p className="max-sm:text-[11px] max-sm:leading-[16px] text-sm font-semibold text-amber-900">
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
                    <div className="flex gap-16">
                        <div>
                            <p className="title_medium text-primary">
                                Время работы
                            </p>
                            <p className="body_smallest">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                        <div>
                            <p className="title_medium text-primary">Телефон</p>
                            <p className="body_smallest">+7 933 322 6371</p>
                        </div>
                        <div>
                            <p className="title_medium text-primary">
                                Мессенджер
                            </p>
                            <p className="body_smallest">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default DesktopHeader;
