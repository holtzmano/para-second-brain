import type { RecommendedAction } from "../types/today";

type Props = {
    actions: RecommendedAction[];
};

export function RecommendedActionsList({ actions }: Props) {
    return (
        <section>
            <h2>Recommended Actions</h2>
            <ul>
                {actions.map(a => (
                    <li key={a.type}>
                        {a.type} – {a.defaultMinutes} min
                    </li>
                ))}
            </ul>
        </section>
    );
}
