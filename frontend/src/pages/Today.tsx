/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { fetchToday } from "../api/todayApi";
import type { TodayResponse, RecommendedAction } from "../types/today";
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

    function toggleActionTime(type: string) {
        if (!data) return;

        setData({
            ...data,
            recommendedActions: data.recommendedActions.map(a =>
                a.type === type
                    ? { ...a, useDefault: !a.useDefault }
                    : a
            )
        });
    }

    function setManualMinutes(type: string, minutes: number) {
        if (!data) return;

        setData({
            ...data,
            recommendedActions: data.recommendedActions.map(a =>
                a.type === type
                    ? { ...a, manualMinutes: minutes }
                    : a
            )
        });
    }

    function getEffectiveMinutes(a: RecommendedAction) {
        return a.useDefault
            ? a.defaultMinutes
            : a.manualMinutes ?? a.defaultMinutes;
    }

    // Load on first render
    useEffect(() => {
        const saved = localStorage.getItem("today");
        if (saved) {
            setData(JSON.parse(saved));
        } else {
            fetchToday().then(setData);
        }
    }, []);

    // Persist on change
    useEffect(() => {
        if (data) {
            localStorage.setItem("today", JSON.stringify(data));
        }
    }, [data]);

    if (!data) return <div>Loading...</div>;

    const formattedDate = new Date(data.date).toLocaleDateString();

    return (
        <div style={{ padding: 16 }}>
            <h1>Today</h1>
            <p>{formattedDate}</p>

            <GoalsList
                goals={data.goals}
                onToggle={toggleGoal}
            />

            <RecommendedActionsList
                actions={data.recommendedActions.map(a => ({
                    ...a,
                    effectiveMinutes: getEffectiveMinutes(a)
                }))}
                onToggle={toggleActionTime}
                onChangeMinutes={setManualMinutes}
            />
        </div>
    );
}
