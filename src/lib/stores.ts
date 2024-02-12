import { create } from "zustand";

interface OrderFormState {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const useOrderFormStore = create<OrderFormState>(set => ({
    isOpen: false,
    setIsOpen: open => set({ isOpen: open }),
}));

type Stage = "form" | "loading" | "error" | "ok";

interface OrderFormStageProps {
    stage: Stage;
    setStage: (stage: Stage) => void;
}

export const useOrderFormStage = create<OrderFormStageProps>(set => ({
    stage: "form",
    setStage: stage => set({ stage: stage }),
}));
