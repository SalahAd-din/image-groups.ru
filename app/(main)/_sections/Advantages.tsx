import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
const Advantages = () => {
    return (
        <section>
            <Content className="">
                <div className="max-w-6xl mx-auto ">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        Преимущества
                    </h2>
                    <div className="flex flex-col gap-10">
                        <div className="flex max-lg:flex-col gap-5 xl:gap-10 ">
                            <div className=" w-full lg:w-2/3 lg:order-2 justify-center  flex flex-col">
                                <div className=" max-w-xl  flex flex-col gap-5 ">
                                    <p className="max-sm:text-2xl display_medium  uppercase font-bold text-primary">
                                        {"//"} Большой выбор
                                    </p>
                                    <div className="flex flex-col gap-5">
                                        <p className="body_small md:body_medium">
                                            У нашей компании представлен широкий
                                            ассортимент грузовиков, тягачей и
                                            самосвалов от ведущих мировых
                                            производителей.
                                        </p>
                                        <p className="body_small md:body_medium">
                                            Мы предлагаем решения для любых
                                            задач и бюджетов, помогая найти
                                            идеальный вариант для каждого
                                            бизнеса.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="aspect-[2/1.5]  relative">
                                    <Image
                                        src="/pages/main/advantages_1.jpg"
                                        fill
                                        alt="img_1"
                                        className=" object-cover aspect-video "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col gap-5 xl:gap-10 ">
                            <div className=" w-full lg:w-2/3 lg:order-2 justify-center  flex flex-col">
                                <div className=" max-w-xl  flex flex-col gap-5 ">
                                    <p className="max-sm:text-2xl display_medium  uppercase font-bold">
                                        {"//"} Гарантия качества
                                    </p>
                                    <div className="flex flex-col gap-5">
                                        <p className="body_small md:body_medium">
                                            Каждый грузовик в компании Образ
                                            Групп проходит тщательную
                                            предпродажную подготовку и
                                            тестирование.
                                        </p>
                                        <p className="body_small md:body_medium">
                                            Мы гарантируем высокое качество и
                                            надёжность нашей техники,
                                            предоставляя гарантию от
                                            производителя и собственные
                                            обязательства по поддержке качества.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="aspect-[2/1.5]  relative">
                                    <Image
                                        src="/pages/main/advantages_2.jpg"
                                        fill
                                        alt="img_1"
                                        className=" object-cover aspect-video "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col gap-5 xl:gap-10 ">
                            <div className=" w-full lg:w-2/3 lg:order-2 justify-center  flex flex-col">
                                <div className=" max-w-xl  flex flex-col gap-5 ">
                                    <p className="max-sm:text-2xl display_medium  uppercase font-bold">
                                        {"//"} После продажное обслуживание
                                    </p>
                                    <div className="flex flex-col gap-5">
                                        <p className="body_small md:body_medium">
                                            Наши услуги не заканчиваются
                                            продажей. Образ Групп предлагает
                                            комплексное послепродажное
                                            обслуживание: от регулярного
                                            технического обслуживания до
                                            капитального ремонта и модернизации.
                                        </p>
                                        <p className="body_small md:body_medium">
                                            Мы заботимся о том, чтобы ваша
                                            техника всегда оставалась в рабочем
                                            состоянии, максимизируя вашу прибыль
                                            и минимизируя простои.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="aspect-[2/1.5]  relative">
                                    <Image
                                        src="/pages/main/advantages_3.jpg"
                                        fill
                                        alt="img_1"
                                        className=" object-cover aspect-video "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </section>
    );
};

export default Advantages;
