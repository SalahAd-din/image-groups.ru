"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { navigation } from "@/src/lib/const/navigation";
import Link from "next/link";

export function MobileMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Menu
                    strokeWidth={1}
                    className=" lg:hidden  w-10 h-10 p-1 flex-shrink-0"
                />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-10 pt-16">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        {navigation.map((e, i) => (
                            <Link
                                key={i}
                                href={e.link}
                                className="body_medium"
                                onClick={() => setOpen(false)}
                            >
                                {e.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
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
            </SheetContent>
        </Sheet>
    );
}
