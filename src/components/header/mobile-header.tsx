import React from "react";
import { Content } from "../Content";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

const MobileHeader = () => {
    return (
        <div className="lg:hidden">
            <Content
                verticalPadding={false}
                className="bg-white opacity-90 p-4"
            >
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xs flex gap-3 items-center">
                        {/* <Image
                            src="/logo/logo3.svg"
                            width={50}
                            height={30}
                            alt="logo"
                            className="flex-shrink-0"
                        /> */}
                        <div className="text-xl text-orange-950 uppercase font-extrabold leading-6">
                            <p>Образ</p>
                            <p>Групп</p>
                        </div>
                        <p className="text-[9px] leading-3 text-amber-900">
                            Выходим за рамки стандартов – эксклюзивные
                            предложения на спецтехнику для тяжёлых задач!
                        </p>
                    </div>
                    <MobileMenu />
                </div>
            </Content>
        </div>
    );
};

export default MobileHeader;
