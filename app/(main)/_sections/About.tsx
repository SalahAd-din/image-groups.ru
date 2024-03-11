import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
const About = () => {
    return (
        <section id="about">
            <Content className=" ">
                <div className="max-lg:max-w-3xl mx-auto">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        О компании
                    </h2>
                    <div className="flex max-lg:flex-col gap-5 xl:gap-20">
                        <div className=" w-full lg:w-1/2 justify-center flex flex-col">
                            <div className=" flex flex-col gap-5 max-w-xl md:pb-10  ">
                                <p className="max-sm:text-4xl display_medium uppercase font-bold">
                                    {"//"} путь
                                </p>
                                <div className="flex flex-col gap-5">
                                    <p className="body_small md:body_medium">
                                        <strong>2018</strong> - Основание
                                        компании Образ Групп и начало пути на
                                        рынке грузовой техники
                                    </p>
                                    <p className="body_small md:body_medium">
                                        <strong>2020 </strong>- Расширение
                                        ассортимента и внедрение новых сервисных
                                        услуг для клиентов
                                    </p>
                                    <p className="body_small md:body_medium">
                                        <strong>2022</strong> - Достижение
                                        рекордных показателей продаж и выход на
                                        международный уровень обслуживания.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className=" aspect-video relative">
                                <Image
                                    src="/pages/main/about_1.jpg"
                                    fill
                                    alt="img_1"
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col gap-5 xl:gap-20 mt-10 md:mt-20">
                        <div className=" w-full lg:w-1/2 lg:order-2 justify-center  flex flex-col">
                            <div className="  max-w-xl  flex flex-col gap-5 ">
                                <p className="max-sm:text-4xl display_medium  uppercase font-bold">
                                    {"//"} Миссия
                                </p>
                                <div className="flex flex-col gap-5">
                                    <p className="body_small md:body_medium">
                                        Наша компания Образ Групп стремится
                                        обеспечивать бизнесы надёжной и
                                        эффективной грузовой техникой,
                                        поддерживая экономическое развитие и
                                        стабильность.
                                    </p>
                                    <p className="body_small md:body_medium">
                                        Наша миссия заключается в создании
                                        максимальной ценности для наших клиентов
                                        через индивидуальный подход, инновации в
                                        сервисе и безупречное качество
                                        обслуживания.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="  w-full lg:w-1/2 relative">
                            <div className=" aspect-video">
                                <Image
                                    src="/pages/main/about_2.jpg"
                                    fill
                                    alt="img_1"
                                    className=" object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </section>
    );
};

export default About;
