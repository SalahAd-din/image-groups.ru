import { Content } from "@/src/components/Content";
import { Button } from "@/src/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className=" overflow-hidden bg-gradient-to-t md:bg-gradient-to-r to-[#08070F] from-primary to-50% min-h-[600px]  relative max-md:py-[50vw]">
            <div className="max-sm:opacity-90 blur md:blur-sm absolute w-[100%] md:w-[45%] h-[100vw] md:h-[48vw] max-md:top-5 left-0 md:bottom-0 ">
                <Image
                    src="/pages/main/hero_3.png"
                    alt="kamaz_1"
                    fill
                    className="object-cover object-[right_top] md:object-[right_36px]"
                />
            </div>
            <div className="absolute w-[55%] md:w-[35%] h-[45vw] md:h-[28vw] max-md:top-5 left-0 md:bottom-0 ">
                <Image
                    src="/pages/main/hero_1.png"
                    alt="kamaz_1"
                    fill
                    className="object-cover object-[right_top] md:object-[right_36px]"
                />
            </div>
            <div className="max-sm:opacity-90 blur md:blur-sm absolute w-[100%] md:w-[55%] h-[100vw] md:h-[39vw] max-sm:-bottom-20 right-0 bottom-0 ">
                <Image
                    src="/pages/main/hero_3.png"
                    alt="kamaz_1"
                    fill
                    className="object-cover object-[0px_0px] xl:object-[right_85px] rotate-180"
                />
            </div>
            <div className="absolute w-[65%] md:w-[35%] h-[55vw] md:h-[29vw] max-sm:-bottom-2 right-0 bottom-0 ">
                <Image
                    src="/pages/main/hero_2.png"
                    alt="kamaz_1"
                    fill
                    className="object-cover object-[-50px_0px] xl:object-[-150px_20px]"
                />
            </div>
            <Content className="max-sm:py-6 flex justify-center relative z-10 ">
                <div className="flex flex-col gap-10 text-center max-w-xl m-auto">
                    <div className="text-center display_medium text-white uppercase leading-normal">
                        Грузоподъемность
                        <br /> долговечность
                        <br /> комфорт
                    </div>
                    <div>
                        <p className="body_medium text-white">
                            – грузовики, которые изменят ваше представление о
                            качестве. Проверьте сами!
                        </p>
                    </div>
                    <a href="#models">
                        <Button size="lg" className="mx-auto" variant="white">
                            Смотреть каталог
                            <ArrowUpRight className="w-4 h-4 translate-y-[1px] translate-x-[3px]" />
                        </Button>
                    </a>
                </div>
            </Content>
        </div>
    );
};

export default Hero;
