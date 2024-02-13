"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { useOrderFormStage } from "@/src/lib/stores/order-form-stage";
const OrderModal = ({
    trigger,
    children,
}: {
    trigger: React.ReactNode;
    children: React.ReactNode;
}) => {
    const { stage, setStage } = useOrderFormStage();
    return (
        <Dialog
            onOpenChange={e => {
                setTimeout(() => {
                    setStage("form");
                }, 500);
            }}
        >
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>{children}</DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default OrderModal;
