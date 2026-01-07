import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse } from "../types/today";
import { GoalsList } from "../components/GoalsList";
import { RecommendedActionsList } from "../components/RecommendedActionsList";


// Plan (pseudocode):
// 1. Keep state `data` initialized to null.
// 2. Fetch today's data in useEffect and set it.
// 3. If `data` is null, return a loading UI early.
// 4. Only after confirming `data` is non-null, compute `formattedDate`.
// 5. Render the page using `formattedDate`, `data.goals`, and `data.recommendedActions`.

export function Today() {
    const [data, setData] = useState<TodayResponse | null>(null);

    useEffect(() => {
        fetchToday().then(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    const formattedDate = new Date(data.date).toLocaleDateString();

    return (
        <div style={{ padding: 16 }}>
            <h1>Today</h1>
            <p>{formattedDate}</p>

            <GoalsList goals={data.goals} />
            <RecommendedActionsList actions={data.recommendedActions} />
        </div>
    );
}
