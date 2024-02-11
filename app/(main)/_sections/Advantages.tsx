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
                                            Таким образом укрепление и развитие
                                            структуры позволяет оценить значение
                                            системы обучения кадров,
                                            соответствует насущным потребностям.
                                        </p>
                                        <p className="body_small md:body_medium">
                                            Разнообразный и богатый опыт
                                            дальнейшее развитие различных форм
                                            деятельности представляет собой
                                            интересный эксперимент проверки
                                            новых предложений.
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
                                            Таким образом укрепление и развитие
                                            структуры позволяет оценить значение
                                            системы обучения кадров,
                                            соответствует насущным потребностям.
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
                                            Разнообразный и богатый опыт
                                            дальнейшее развитие различных форм
                                            деятельности представляет собой
                                            интересный эксперимент проверки
                                            новых предложений.
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
