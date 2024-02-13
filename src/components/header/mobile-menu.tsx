"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { navigation } from "@/src/lib/const/navigation";
import Link from "next/link";
import { contacts } from "@/src/lib/const/contacts";

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
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        {navigation.map((e, i) => (
                            <Link
                                key={i}
                                href={e.link}
                                className="body_medium uppercase font-bold text-gray-800"
                                onClick={() => setOpen(false)}
                            >
                                {e.title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="space-y-1">
                            <p className="title_medium text-primary">
                                Время работы
                            </p>
                            <p className="text-sm">{contacts.schedule}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="title_medium text-primary">Телефон</p>
                            <Link
                                href={`tel:${contacts.phone}`}
                                className="text-sm"
                            >
                                {contacts.phone}
                            </Link>
                        </div>
                        <div className="space-y-1">
                            <p className="title_medium text-primary">
                                Мессенджер
                            </p>
                            <div className="flex gap-4 text-sm">
                                <Link
                                    href={contacts.telegram}
                                    className="underline"
                                >
                                    Telegram
                                </Link>
                                <Link
                                    href={contacts.whatsapp}
                                    className="underline"
                                >
                                    WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
