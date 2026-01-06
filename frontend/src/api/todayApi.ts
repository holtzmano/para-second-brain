import type { TodayResponse } from "../types/today";

export async function fetchToday(): Promise<TodayResponse> {
    const response = await fetch("http://localhost:5125/api/today");
    if (!response.ok) {
        throw new Error("Failed to fetch today");
    }
    return response.json();
}
