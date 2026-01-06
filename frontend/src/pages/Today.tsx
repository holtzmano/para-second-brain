import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse } from "../types/today";

export function Today() {
    const [data, setData] = useState<TodayResponse | null>(null);

    useEffect(() => {
        fetchToday().then(setData);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div style={{ padding: 16 }}>
            <h1>Today</h1>

            <section>
                <h2>Goals</h2>
                <ul>
                    {data.goals.map(g => (
                        <li key={g.id}>{g.title}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Recommended Actions</h2>
                <ul>
                    {data.recommendedActions.map(a => (
                        <li key={a.type}>
                            {a.type} – {a.defaultMinutes} min
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
