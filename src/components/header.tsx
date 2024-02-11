import React from "react";
import { Content } from "./Content";
import Image from "next/image";
import { Button } from "./ui/button";
import { navigation } from "../const/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <>
            <MobHeader />
            <WideHeader />
        </>
    );
};

export default Header;

const MobHeader = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="max-sm:bg-black">
            <Content verticalPadding={false} className="bg-white opacity-90">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Menu
                            strokeWidth={1}
                            className="text-white lg:hidden"
                        />
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="bg-primary p-10 pt-16"
                    >
                        <Image
                            src={"/logo2.png"}
                            width={160}
                            height={100}
                            alt="logo"
                            className=""
                        />
                        <p className="mb-16 text-primary-foreground/50 mt-1">
                            #на вашей защите
                        </p>
                    </SheetContent>
                </Sheet>
            </Content>
        </div>
    );
};
const WideHeader = () => {
    return (
        <div className="max-sm:bg-black">
            <Content verticalPadding={false} className="bg-white opacity-90">
                <div className="relative py-4 md:py-8">
                    <div className="flex justify-between ">
                        <div className="flex justify-around ">
                            <div className="flex justify-center gap-3 sm:gap-5  flex-shrink w-full absolute left-0">
                                <div className="flex gap-5 items-center content-center">
                                    <Image
                                        src="/logo/logo2.png"
                                        width={55}
                                        height={38}
                                        alt="logo"
                                        className="-translate-y-1 object-contain max-sm:w-[75px] shrink-0"
                                    />
                                    <p className="max-sm:text-[11px] max-sm:leading-[16px] text-sm font-semibold">
                                        Выходим за рамки стандартов –
                                        эксклюзивные{" "}
                                        <span className="md:block">
                                            предложения на спецтехнику для
                                            тяжёлых задач!
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Button className="max-md:hidden">
                                Получить консультацию
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden flex justify-between py-5">
                    <div className="flex gap-16">
                        {navigation.map((e, i) => (
                            <Link key={i} href={e.link} className="body_medium">
                                {e.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-16">
                        <div>
                            <p className="title_medium text-primary">
                                Время работы
                            </p>
                            <p className="body_smallest">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                        <div>
                            <p className="title_medium text-primary">Телефон</p>
                            <p className="body_smallest">+7 933 322 6371</p>
                        </div>
                        <div>
                            <p className="title_medium text-primary">
                                Мессенджер
                            </p>
                            <p className="body_smallest">
                                Каждый день:10:00-20:00
                            </p>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};
