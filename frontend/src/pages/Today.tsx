import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse } from "../types/today";
import { GoalsList } from "../components/GoalsList";
import { RecommendedActionsList } from "../components/RecommendedActionsList";


export function Today() {
    const [data, setData] = useState<TodayResponse | null>(null);

    useEffect(() => {
        fetchToday().then(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div style={{ padding: 16 }}>
            <h1>Today</h1>

            <GoalsList goals={data.goals} />
            <RecommendedActionsList actions={data.recommendedActions} />
        </div>
    );
}
