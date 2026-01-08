import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse } from "../types/today";
import { GoalsList } from "../components/GoalsList";
import { RecommendedActionsList } from "../components/RecommendedActionsList";


export function Today() {
    const [data, setData] = useState<TodayResponse | null>(null);

    function toggleGoal(id: string) {
        if (!data) return;

        setData({
            ...data,
            goals: data.goals.map(g =>
                g.id === id ? { ...g, isDone: !g.isDone } : g
            )
        });
    }

    useEffect(() => {
        fetchToday().then(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    const formattedDate = new Date(data.date).toLocaleDateString();

    return (
        <div style={{ padding: 16 }}>
            <h1>Today</h1>
            <p>{formattedDate}</p>

            <GoalsList goals={data.goals} onToggle={toggleGoal} />
            <RecommendedActionsList actions={data.recommendedActions} />
        </div>
    );
}
