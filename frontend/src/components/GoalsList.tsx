import type { Goal } from "../types/today";

type Props = {
    goals: Goal[];
};

export function GoalsList({ goals }: Props) {
    return (
        <section>
            <h2>Goals</h2>
            <ul>
                {goals.map(g => (
                    <li key={g.id}>{g.title}</li>
                ))}
            </ul>
        </section>
    );
}
