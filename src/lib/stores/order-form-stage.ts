import { create } from "zustand";

type Stage = "form" | "loading" | "error" | "success";

interface OrderFormStageProps {
    stage: Stage;
    setStage: (stage: Stage) => void;
}

export const useOrderFormStage = create<OrderFormStageProps>(set => ({
    stage: "form",
    setStage: stage => set({ stage: stage }),
}));
