import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
const About = () => {
    return (
        <section>
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
                                        <strong>2018</strong> - Таким образом
                                        укрепление и развитие структуры
                                        позволяет оценить значение системы
                                        обучения кадров, соответствует насущным
                                        потребностям.
                                    </p>
                                    <p className="body_small md:body_medium">
                                        <strong>2020 </strong>- Таким образом
                                        укрепление и развитие структуры
                                        позволяет оценить значение системы
                                        обучения кадров, соответствует насущным
                                        потребностям.
                                    </p>
                                    <p className="body_small md:body_medium">
                                        <strong>2022</strong> - Таким образом
                                        укрепление и развитие структуры
                                        позволяет оценить значение системы
                                        обучения кадров, соответствует насущным
                                        потребностям.
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
                                        Таким образом укрепление и развитие
                                        структуры позволяет оценить значение
                                        системы обучения кадров, соответствует
                                        насущным потребностям.
                                    </p>
                                    <p className="body_small md:body_medium">
                                        Разнообразный и богатый опыт дальнейшее
                                        развитие различных форм деятельности
                                        представляет собой интересный
                                        эксперимент проверки новых предложений.
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
