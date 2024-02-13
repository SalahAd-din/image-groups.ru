import { create } from "zustand";

type Stage = "form" | "loading" | "error" | "success";

interface OrderFormStageProps {
    stage: Stage;
    setStage: (stage: Stage) => void;
}

export const useOrderFormStage = create<OrderFormStageProps>(set => ({
    stage: "success",
    setStage: stage => set({ stage: stage }),
}));
