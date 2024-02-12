import React from "react";
import { Content } from "@/src/components/Content";
import Image from "next/image";
import { OrderForm } from "@/src/components/forms/order-form";

const CTA = () => {
    return (
        <div>
            <Content>
                <div className="max-w-4xl mx-auto">
                    <h2 className="display_medium uppercase text-center mb-7 md:mb-14">
                        Нужна консультация?
                    </h2>

                    <div className="md:grid grid-cols-6 gap-10 items-center">
                        <div className="max-md:mb-7 max-md:max-w-sm mx-auto col-span-2">
                            <p className="text-base  md:text-lg lg:text-xl font-semibold mb-7 md:mb-14 text-center">
                                Оставьте заявку и консультанты свяжутся с вами
                            </p>
                            <OrderForm />
                        </div>
                        <div className=" col-span-4 aspect-[2/1.4] relative">
                            <Image
                                src="/pages/main/cta.jpg"
                                className=" object-cover"
                                fill
                                alt="cta"
                            />
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default CTA;
