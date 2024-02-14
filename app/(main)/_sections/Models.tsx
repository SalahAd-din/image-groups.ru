"use client";
import React, { useState } from "react";
import { Content } from "@/src/components/Content";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import OrderModal from "@/src/components/modals/order-modal";
import OrderModalContent from "@/src/components/modal-content/order-modal";
import { Icon123 } from "@tabler/icons-react";
import { Icons } from "@/src/components/ui/icon";

// function calculate
const calculate = () => {
    return 0;
};
const Models = () => {
    const [brand, setbrand] = useState("all");
    const [category, setCategory] = useState("all");

    let contentItemFilter = contentItem.filter(elem => {
        switch (category) {
            case "Грузовики":
                return elem["Тип кузова"] === "грузовик";
            case "Тягачи":
                return elem["Тип кузова"] === "тягач";
            case "Спецтехника":
                return (
                    elem["Тип кузова"] !== "грузовик" &&
                    elem["Тип кузова"] !== "тягач"
                );
            default:
                // Этот блок будет выполняться, если не выбрана ни одна из категорий
                return true;
        }
    });
    contentItemFilter = contentItemFilter.filter(elem => {
        switch (brand) {
            case "BEIBEN":
                return elem["Фирма"] === "BEIBEN";
            case "shacman":
                return elem["Фирма"] === "shacman";
            default:
                // Этот блок будет выполняться, если не выбрана ни одна из категорий
                return true;
        }
    });
    console.log(brand);
    return (
        <section className="" id="models">
            <Content>
                <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                    модельный ряд
                </h2>
                <div className="flex flex-col gap-2.5 md:gap-5 my-10">
                    <p className="text-base md:text-2xl font-semibold">
                        Выберите марку грузовиков:
                    </p>
                    <div className="flex space-x-4 text-lg">
                        <p
                            className={`flex items-center cursor-pointer max-sm:text-sm p-1 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                brand == "all" &&
                                " !border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setbrand("all")}
                        >
                            Все
                        </p>

                        <div
                            className={`flex gap-1 items-center uppercase cursor-pointer max-sm:text-sm p-1 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                brand == "shacman" &&
                                "  !border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setbrand("shacman")}
                        >
                            <div className="w-6 h-6 flex justify-center items-center">
                                <Icons.shacman />
                            </div>
                            <p>Shacman</p>
                        </div>
                        <div
                            className={`flex gap-1 items-center uppercase cursor-pointer max-sm:text-sm p-1 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                brand == "BEIBEN" &&
                                " !border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setbrand("BEIBEN")}
                        >
                            <div className="w-6 h-6 flex justify-center items-center">
                                <Icons.beiben />
                            </div>
                            <p>Beiben</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 md:gap-5 my-10">
                    <p className="text-base md:text-2xl font-semibold">
                        Выберите категорию грузовиков:
                    </p>
                    <div className="flex gap-2.5 md:gap-4 text-lg">
                        <p
                            className={`cursor-pointer max-sm:text-sm p-1.5 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                category == "all" &&
                                "!border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setCategory("all")}
                        >
                            Все
                        </p>
                        {/* <p
                            className={`cursor-pointer max-sm:text-sm p-1 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                category == "Грузовики" &&
                                "!border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setCategory("Грузовики")}
                        >
                            Грузовики
                        </p> */}
                        <p
                            className={`cursor-pointer max-sm:text-sm p-1.5 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                category == "Спецтехника" &&
                                "!border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setCategory("Спецтехника")}
                        >
                            Спецтехника
                        </p>
                        <p
                            className={`cursor-pointer max-sm:text-sm p-1.5 px-2.5 bg-gray-100 rounded-sm border border-white ${
                                category == "Тягачи" &&
                                "!border-primary/20 bg-primary/10"
                            }`}
                            onClick={() => setCategory("Тягачи")}
                        >
                            Тягачи
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
                    {contentItemFilter.length < 1 ? (
                        <div>
                            <p>Ничего не найдено</p>
                            <p
                                className="underline font-bold cursor-pointer"
                                onClick={() => {
                                    setCategory("all");
                                }}
                            >
                                Сбросить фильтры
                            </p>
                        </div>
                    ) : (
                        contentItemFilter.map((e, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-2 md:gap-5 border border-gray-200 p-2 md:p-5 max-sm:bg-gray-100 justify-between"
                            >
                                <div className="relative aspect-[2/1.4]">
                                    <Image
                                        src={`/pages/models/${e.img}`}
                                        fill
                                        alt={e.title}
                                        className=" object-contain"
                                    />
                                </div>
                                <p className="text-base md:text-2xl font-bold">
                                    {e.title}
                                </p>
                                <div>
                                    {e["Тип кузова"] && (
                                        <p className="text-xs md:text-base">
                                            <b>Тип кузова:</b> {e["Тип кузова"]}
                                        </p>
                                    )}
                                    {e.Модель && (
                                        <p className="text-xs md:text-base">
                                            <b>Модель:</b> {e.Модель}
                                        </p>
                                    )}
                                    {e["Колесная формула"] && (
                                        <p className="text-xs md:text-base">
                                            <b>Колесная формула:</b>{" "}
                                            {e["Колесная формула"]}
                                        </p>
                                    )}
                                    {e.Двигатель && (
                                        <p className="text-xs md:text-base">
                                            <b>Двигатель:</b> {e.Двигатель}
                                        </p>
                                    )}
                                    {e["Год выпуска"] && (
                                        <p className="text-xs md:text-base">
                                            <b>Год выпуска:</b>{" "}
                                            {e["Год выпуска"]}
                                        </p>
                                    )}
                                    {e.Тип && (
                                        <p className="text-xs md:text-base">
                                            <b>Тип:</b> {e.Тип}
                                        </p>
                                    )}
                                </div>
                                <p className="text-base md:text-2xl font-bold">
                                    {e.Стоимость}
                                </p>

                                <OrderModal
                                    trigger={
                                        <Button
                                            className="w-full"
                                            variant="outline"
                                        >
                                            Подробнее
                                        </Button>
                                    }
                                >
                                    <OrderModalContent />
                                </OrderModal>
                            </div>
                        ))
                    )}
                </div>
            </Content>
        </section>
    );
};

export default Models;

const contentItem = [
    {
        //it is ok 1
        title: "X6000 480 л.с",
        img: "X6000_1.png",
        "Тип кузова": "тягач",
        Фирма: "shacman",
        Модель: "SX4188YY381",
        "Колесная формула": "4х2",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "седельный",
        Стоимость: "10 150 000 руб.",
    },
    {
        //it is ok 2
        Фирма: "shacman",
        title: "X6000 480 л.с",
        img: "X6000_2.png",
        "Тип кузова": "тягач",
        Модель: "SX4188YY381",
        "Колесная формула": "4х2",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "седельный",
        Стоимость: "10 150 000 руб.",
    },
    {
        //it is ok 3
        Фирма: "shacman",
        title: "X5000 550 л.с",
        img: "X5000_550_1.png",
        "Тип кузова": "тягач",
        Модель: "SX418843381",
        "Колесная формула": "4х2",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "седельный",
        Стоимость: "9 690 000 руб.",
    },
    {
        //it is ok 4
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: "X5000_430_1.png",
        "Тип кузова": "тягач",
        Модель: "SX42584V324",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "8 690 000 руб.",
    },
    {
        //it is ok 5
        Фирма: "shacman",
        title: "Х5000 430 л.с",
        img: "X5000_430_6.png",
        "Тип кузова": "самосвал",
        Модель: "SX42586V384",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 490 000 руб.",
    },
    {
        //it is ok 6
        Фирма: "shacman",
        title: "Х5000 430 л.с",
        img: "X5000_430_3.png",
        "Тип кузова": "самосвал",
        Модель: "SX42586V384",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        add: "Усилленый кузов и мосты",
        Стоимость: "по запросу",
    },
    {
        //it is ok 7
        Фирма: "shacman",
        title: "Х5000 430 л.с",
        img: "X5000_430_4.png",
        "Тип кузова": "самосвал",
        Модель: "SX42586V384",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        add: "Усилленый кузов и мосты",
        Стоимость: "по запросу",
    },
    {
        //it is ok 8
        Фирма: "shacman",
        title: "Х5000 440 л.с",
        img: "Х5000_440_1.png",
        "Тип кузова": "тягач",
        Модель: "SX32586W384C",
        "Колесная формула": "6х4",
        Двигатель: "CUMMINS",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 290 000 руб.",
    },
    {
        //it is ok 9
        Фирма: "shacman",
        title: "Х3000 440 л.с",
        img: "Х3000_440_1.png",
        "Тип кузова": "тягач",
        Модель: "SX32586W384C",
        "Колесная формула": "6х4",
        Двигатель: "CUMMINS",
        "Год выпуска": "2022",
        Тип: "рессорная",
        Стоимость: "7 990 000 руб",
    },
    /* {
        //it is not ok / It is has not image 10
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: " ",
        Ошиновка: "двускатная",
        "Тип кузова": "самосвал",
        Модель: "SX42584V324",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "пневмо",
        Стоимость: "8 990 000 руб.",
    }, */
    {
        //it is ok 11
        Фирма: "shacman",
        title: "X5000 440 л.с",
        img: "X5000_440_1.png",
        Ошиновка: "двускатная",
        "Тип кузова": "самосвал",
        Модель: "SX32586W385C",
        "Колесная формула": " 6х6",
        Двигатель: "CUMMINS",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 990 000 руб.",
    },
    {
        //it is ok 12
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: "X5000_430_2.png",
        Ошиновка: "односкатная",
        "Тип кузова": "самосвал",
        Модель: "SX32586V385",
        "Колесная формула": " 6х6",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 990 000 руб.",
    },
    {
        //it is ok 13
        Фирма: "shacman",
        title: "X3000 440 л.с",
        img: "X3000_440_1.png",
        "Тип кузова": "самосвал",
        Ошиновка: "двускатная",
        Модель: "SX32586W385C",
        "Колесная формула": "6х6",
        Двигатель: "CUMMINS",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 790 000 руб.",
    },
    {
        //it is ok 14
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: "X5000_430_5.png",
        "Тип кузова": "тягач",
        Ошиновка: "двускатная",
        Модель: "SX42586V385",
        "Колесная формула": "6х6",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 290 000 руб.",
    },
    {
        //it is ok 15
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: "X5000_430_7.png",
        "Тип кузова": "тягач",
        Ошиновка: "односкатная",
        Модель: "SX32586V385",
        "Колесная формула": "6х6",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 490 000 руб.",
    },
    {
        //it is ok 16
        Фирма: "shacman",
        title: "Х5000 550 л.с",
        img: "Х5000_550_1.png",
        "Тип кузова": "самосвал",
        Модель: "SX331863366",
        "Колесная формула": "8х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 990 000 руб.",
    },
    {
        //it is ok 17
        Фирма: "shacman",
        title: "Х5000 440 л.с",
        img: "Х5000_440_2.png",
        "Тип кузова": "самосвал",
        Модель: "SX33186W366C",
        "Колесная формула": "8х4",
        Двигатель: "Cummins",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 990 000 руб.",
    },
    {
        //it is ok 18
        Фирма: "shacman",
        title: "X5000 430 л.с",
        img: "X5000_430_8.png",
        "Тип кузова": "самосвал",
        Модель: "SX33186V366",
        "Колесная формула": "8х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 290 000 руб.",
    },
    {
        //it is ok 19
        Фирма: "shacman",
        title: "X5000 375 л.с.",
        img: "X5000_375_1.png",
        "Тип кузова": "автобетоносмеситель",
        Модель: "SX5318GJB6T326",
        "Колесная формула": "8х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "10 290 000 руб.",
    },
    {
        //it is ok 20
        Фирма: "shacman",
        title: "X5000 336 л.с",
        img: "X5000_336_1.png",
        "Тип кузова": "автобетоносмеситель",
        Модель: "SX5258GJB6R384",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "9 890 000 руб.",
    },
    {
        //it is ok 21
        Фирма: "shacman",
        title: "L3000 270 л.с",
        img: "L3000_270_1.png",
        "Тип кузова": "зерновоз",
        Модель: "SX32588L354",
        "Колесная формула": "6х4",
        Двигатель: "Cummins",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "по запросу",
    },
    {
        //it is ok 22
        Фирма: "shacman",
        title: "X3000 430 л.с",
        img: "X3000_430_1.png",
        "Тип кузова": "зерновоз",
        Модель: "SX32586V384",
        "Колесная формула": "6х4",
        Двигатель: "Weichai",
        "Год выпуска": "2023",
        Тип: "рессорная",
        Стоимость: "по запросу",
    },
    {
        //it is ok 1
        Фирма: "BEIBEN",
        title: "1848S 480 л.с.",
        img: "1848S_480_1.png",
        "Тип кузова": "тягач",
        "Колесная формула": "4х2",
        Двигатель: "WP13/480, 480 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 2
        Фирма: "BEIBEN",
        title: "2648S 480 л.с.",
        img: "2648S_480_1.png",
        "Тип кузова": "тягач",
        "Колесная формула": "6х4",
        Двигатель: "WP13/480, 480 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 3
        Фирма: "BEIBEN",
        title: "2648S 480 л.с.",
        img: "2648S_480_2.png",
        "Тип кузова": "тягач",
        "Колесная формула": "6х4",
        Двигатель: "WP13/480, 480 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 4
        Фирма: "BEIBEN",
        title: "2643SA 430 л.с.",
        img: "2643SA_430_1.png",
        "Тип кузова": "тягач",
        "Колесная формула": "6х6",
        Двигатель: "WP12/480, 430 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 5
        Фирма: "BEIBEN",
        title: "2643SA 430 л.с.",
        img: "2643SA_430_2.png",
        "Тип кузова": "тягач",
        "Колесная формула": "6х6",
        Двигатель: "WP12/480, 430 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 6
        Фирма: "BEIBEN",
        title: "3343K 430 л.с.",
        img: "3343K_430_1.png",
        "Тип кузова": "Самосвал",
        "Колесная формула": "6х4",
        Двигатель: "WP12.430Е50, 430 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 7
        Фирма: "BEIBEN",
        title: "3343АК 430 л.с.",
        img: "3343АК_430_1.png",
        "Тип кузова": "Самосвал",
        "Колесная формула": "6х6",
        Двигатель: "WP12.430Е50, 430 л.с.",
        Стоимость: "по запросу",
    },
    {
        //it is ok 8
        Фирма: "BEIBEN",
        title: "4143K 430 л.с.",
        img: "4143K_430_1.png",
        "Тип кузова": "Самосвал",
        "Колесная формула": "8х4",
        Двигатель: "WP12.430Е50, 430 л.с.",
        Стоимость: "по запросу",
    },
];
