import React from "react";
import { Content } from "@/src/components/Content";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

const contentItem = [
    {
        title: "Сервис",
        desc: "Мы предлагаем комплексный подход к поддержанию вашего автопарка в оптимальном состоянии, что позволяет предотвратить непредвиденные поломки и продлить срок службы транспортных средств.",
        img: "advantages_2",
    },
    {
        title: "Диагностика",
        desc: "Мы используем современное оборудование для точного определения технического состояния грузовиков, самосвалов и тягачей, что позволяет своевременно выявлять и устранять неисправности.",
        img: "service_img_2",
    },
    {
        title: "Обслуживание",
        desc: "Мы предоставляем полный спектр услуг по техническому обслуживанию, включая замену масел, фильтров, проверку и регулировку систем транспортного средства для обеспечения его бесперебойной работы.",
        img: "advantages_3",
    },
    {
        title: "Ремонт",
        desc: "Мы обладаем всем необходимым оборудованием и квалифицированным персоналом для выполнения ремонтных работ любой сложности, восстанавливая работоспособность вашего транспорта в кратчайшие сроки.",
        img: "service_img_4",
    },
];

const Services = () => {
    return (
        <section>
            <Content>
                <div className="max-w-sm sm:max-w-5xl mx-auto">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        Услуги
                    </h2>
                    <div className="grid grid-cols-1 gap-3 ">
                        {contentItem.map((e, i) => (
                            <div
                                className="bg-gray-200 flex flex-col lg:flex-row"
                                key={i}
                            >
                                <div className="relative sm:h-full w-full max-sm:aspect-[2/1.5]  sm:w-[300px] shrink-0 bg-red-400  order-1 sm:hidden lg:block">
                                    <Image
                                        src={`/pages/main/${e.img}.jpg`}
                                        fill
                                        alt="img"
                                        className="object-cover grayscale "
                                    />
                                </div>
                                <div className="flex flex-col gap-5 p-5 md:p-10 items-start order-2">
                                    <p className="text-2xl uppercase font-bold md:text-4xl ">
                                        {e.title}
                                    </p>
                                    <p className="text-sm md:text-base">
                                        {e.desc}
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="max-sm:w-full"
                                    >
                                        Оставить заявку
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
        </section>
    );
};

export default Services;
