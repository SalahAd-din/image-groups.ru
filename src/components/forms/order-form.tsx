//@ts-nocheck
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form";
import { Input, MaskedInput } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    phone: z.string().refine(
        value => {
            // Регулярное выражение для проверки формата номера телефона
            const phoneRegex = /^\+\d{1,2}\s\(\d{3}\)\s\d{3}\s\d{2}-\d{2}$/;
            return phoneRegex.test(value);
        },
        {
            message: "Напишите номер телефона в формате +7 (000) 000-00-00",
        }
    ),
});
import { useOrderFormStage } from "@/src/lib/stores/order-form-stage";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { sendMail } from "@/src/lib/actions/send-mail";
/* import { orderFormHandlerAction } from "@/lib/actions";
import { useOrderFormStage } from "@/lib/stores"; */

export function OrderForm() {
    const { stage, setStage } = useOrderFormStage();
    const [isLoading, setIsLoading] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [isError, setIsError] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
        try {
            setStage("loading");
            const result = await sendMail({
                phone: values.phone,
                url: window.location.href,
            });
            setStage("success");
        } catch (error) {
            setStage("error");
            console.log(error);
        }

        /* setStage("loading");

        try {
            const response = await orderFormHandlerAction({
                phone: values.phone,
                url: window.location.href,
            });

            if (response != "ok") {
                throw new Error("Ошибка запроса");
            }

            setStage("ok");
            setTimeout(() => {
                setStage("form");
            }, 5000);
        } catch (error) {
            setStage("error");
            setTimeout(() => {
                setStage("form");
            }, 4000);
        } */
    }

    return (
        <Form {...form}>
            {isLoading && (
                <div className=" opacity-70 absolute w-full h-full bg-white flex items-center justify-center z-[1] border border-red-700 rounded-xl">
                    <p className="title_large">Идёт загрузка</p>
                </div>
            )}
            {isOk && (
                <div className="absolute w-full h-full bg-white flex items-center justify-center z-[1] border border-green-700 rounded-xl">
                    <p className="title_large">Спасибо за заявку!</p>
                </div>
            )}
            {isError && (
                <div className="p-5 absolute w-full h-full bg-white flex items-center justify-center z-[1] border border-red-700 rounded-xl">
                    <p className="title_large text-center">
                        Произошла какая то ошибка, попробуйте связаться с нами
                        другим способом
                    </p>
                </div>
            )}
            <div className="relative">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 relative"
                >
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormControl>
                                        <MaskedInput
                                            mask="+7 (000) 000 00-00"
                                            placeholder="+7 (000) 000 00-00"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />

                    <Button type="submit" className="!w-full">
                        Заказать звонок
                    </Button>
                </form>
            </div>
        </Form>
    );
}
