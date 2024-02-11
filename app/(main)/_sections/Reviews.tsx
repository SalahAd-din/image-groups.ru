import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
    {
        FIO: "Кузнецов Алексей Александрович",
        review: "Отличный выбор техники и приятные цены. Рекомендую всем коллегам. Широкий ассортимент позволяет подобрать именно то, что нужно для конкретных задач. Цены конкурентоспособные, а качество обслуживания на высоком уровне. Благодарим за профессионализм и внимание к клиентам!",
        date: "05.11.2023",
        grade: "5",
    },
    {
        FIO: "Новиков Дмитрий Иванович",
        review: "Надежный партнер в поставках техники. Быстрая доставка и хороший сервис. Мы оценили качество оборудования и оперативность работы сотрудников. Всегда актуальные и выгодные предложения, отличное послепродажное обслуживание. Ваша компания заслуживает высокой оценки и рекомендаций! ",
        date: "24.05.2023",
        grade: "5",
    },
    {
        FIO: "Смирнов Иван Михайлович",
        review: "Замечательное обслуживание и качественная техника. Все, что нужно для нашего бизнеса! Команда профессионалов всегда на связи, предоставляют полную информацию по всем вопросам. Техника в отличном состоянии, демонстрирует высокую производительность и надежность. Спасибо за ваш труд и отличный сервис!",
        date: "12.01.2023",
        grade: "5",
    },
    {
        FIO: "Морозов Александр Николаевич",
        review: "Надежный партнер в поставках техники. Быстрая доставка и хороший сервис. Мы оценили качество оборудования и оперативность работы сотрудников. Всегда актуальные и выгодные предложения, отличное послепродажное обслуживание. Ваша компания заслуживает высокой оценки и рекомендаций! ",
        date: "14.12.2023",
        grade: "5",
    },
    {
        FIO: "Иванов Александр Андреевич",
        review: "Отличный выбор техники и приятные цены. Рекомендую всем коллегам. Широкий ассортимент позволяет подобрать именно то, что нужно для конкретных задач. Цены конкурентоспособные, а качество обслуживания на высоком уровне. Благодарим за профессионализм и внимание к клиентам! ",
        date: "04.06.2023",
        grade: "5",
    },
];

const Reviews = () => {
    return (
        <section className="relative ">
            <div className="absolute left-0 top-0 w-full h-full">
                <Image
                    src="/pages/main/review_1.jpg"
                    fill
                    alt="background"
                    className=" object-cover"
                />
            </div>
            <Content className=" relative z-10">
                <div className="max-w-6xl mx-auto ">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14 text-white">
                        Отзывы клиентов
                    </h2>
                    <div className="px-5 md:px-20">
                        <Carousel className="">
                            <CarouselContent className="h-[400px]  -ml-5">
                                {reviews.map((e, i) => (
                                    <CarouselItem
                                        key={i}
                                        className=" basis-full sm:basis-1/2 lg:basis-1/3 pl-5 "
                                    >
                                        <div className=" w-full h-full bg-white p-5 flex flex-col justify-between">
                                            <div>
                                                <div className="flex gap-5 items-center">
                                                    <div className=" shrink-0 w-10 h-10 rounded-full bg-gray-400"></div>
                                                    <p className="body_small font-semibold">
                                                        {e.FIO}
                                                    </p>
                                                </div>
                                                <p className="body_small mt-5">
                                                    {e.review}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="body_small">
                                                    {e.date}
                                                </p>
                                                <div className="flex gap-1">
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                    <Star className="w-4 h-4 text-primary fill-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </Content>
        </section>
    );
};

export default Reviews;
