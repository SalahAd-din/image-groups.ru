import React from "react";
import { Content } from "@/src/components/Content";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion";

const arr = [
    {
        question: "Есть рассрочка?",
        answer: "Да, мы предлагаем различные варианты рассрочки и финансирования для удобства наших клиентов. Детали условий можно обсудить с нашими менеджерами.",
    },
    {
        question: "Сроки доставки?",
        answer: "Сроки доставки зависят от модели и наличия транспорта на складе, но обычно составляют от 2 до 6 недель. Мы всегда стараемся доставить ваш заказ в кратчайшие сроки.",
    },
    {
        question: "Гарантийное обслуживание",
        answer: "Все наши транспортные средства идут с гарантией производителя. Дополнительные услуги и расширенные гарантии также доступны для покупки.",
    },
    {
        question: "Есть тест-драйв?",
        answer: "Конечно, мы предлагаем возможность тест-драйва перед покупкой. Это поможет вам лучше понять характеристики транспорта и сделать правильный выбор.",
    },
];

const FAQ = () => {
    return (
        <section>
            <Content className="">
                <div className="max-w-4xl mx-auto ">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        Часто задаваемые вопросы
                    </h2>
                    <div>
                        {arr.map((e, i) => (
                            <Accordion key={i} type="single" collapsible>
                                <AccordionItem
                                    value="item-1"
                                    className="bg-gray-100"
                                >
                                    <AccordionTrigger className="p-5">
                                        {e.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-5 pt-0">
                                        {e.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </Content>
        </section>
    );
};

export default FAQ;
