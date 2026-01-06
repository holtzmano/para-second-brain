export type Goal = {
    id: string;
    title: string;
    isDone: boolean;
};

export type RecommendedAction = {
    type: string;
    defaultMinutes: number;
    useDefault: boolean;
    manualMinutes: number | null;
};

export type TodayResponse = {
    date: string;
    goals: Goal[];
    recommendedActions: RecommendedAction[];
};
