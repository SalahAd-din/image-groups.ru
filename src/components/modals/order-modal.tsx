import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/src/components/ui/dialog";
const OrderModal = ({
    trigger,
    children,
}: {
    trigger: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>{children}</DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default OrderModal;
