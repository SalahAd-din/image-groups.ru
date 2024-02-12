import React from "react";
import { OrderForm } from "../forms/order-form";
import Image from "next/image";

const OrderModalContent = () => {
    return (
        <div className="  p-2.5">
            <div className=" flex bg-white max-w-sm md:max-w-3xl justify-between">
                <div className="md:w-[60%] h-full p-10 flex flex-col justify-around gap-16 min-h-[350px] sm:min-h-[450px]">
                    <p className="font-bold  text-base sm:text-xl uppercase">
                        Оставьте заявку, специалист компании свяжется с Вами и
                        проконсультирует по всем вопросам
                    </p>
                    <div className=" max-w-xs ">
                        <OrderForm />
                    </div>
                </div>
                <div className="w-[40%] hidden md:block relative">
                    <Image
                        src="/modal/orderModal.jpg"
                        fill
                        alt="orderModalImg"
                        className=" object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderModalContent;
