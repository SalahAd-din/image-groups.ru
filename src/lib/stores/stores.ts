import { create } from "zustand";

interface OrderFormState {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const useOrderFormStore = create<OrderFormState>(set => ({
    isOpen: false,
    setIsOpen: open => set({ isOpen: open }),
}));
