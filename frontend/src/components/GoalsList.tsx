import type { Goal } from "../types/today";

type Props = {
    goals: Goal[];
    onToggle: (id: string) => void;
};

export function GoalsList({ goals, onToggle }: Props) {
    if (goals.length === 0) {
        return <p>No goals for today.</p>;
    }

    return (
        <section>
            <h2>Goals</h2>
            <ul>
                {goals.map(g => (
                    <li
                        key={g.id}
                        onClick={() => onToggle(g.id)}
                        style={{
                            cursor: "pointer",
                            textDecoration: g.isDone ? "line-through" : "none"
                        }}
                    >
                        {g.title}
                    </li>

                ))}
            </ul>
        </section>
    );
}
