import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse } from "../types/today";

export function Today() {
    const [data, setData] = useState<TodayResponse | null>(null);

    useEffect(() => {
        fetchToday().then(setData);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
