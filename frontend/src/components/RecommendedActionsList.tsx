import type { RecommendedAction } from "../types/today";

type Props = {
    actions: RecommendedAction[];
    onToggle: (type: string) => void;
    onChangeMinutes: (type: string, minutes: number) => void;
};

export function RecommendedActionsList({ actions, onToggle, onChangeMinutes }: Props) {
    if (actions.length === 0) {
        return <p>No recommended actions.</p>;
    }

    return (
        <section>
            <h2>Recommended Actions</h2>
            <ul>
                {actions.map(a => (
                    <li key={a.type} style={{ marginBottom: 8 }}>
                        <span
                            onClick={() => onToggle(a.type)}
                            style={{ cursor: "pointer", marginRight: 8 }}
                        >
                            {a.type}
                        </span>

                        {a.useDefault ? (
                            <span>{a.defaultMinutes} min (default)</span>
                        ) : (
                            <input
                                type="number"
                                placeholder={`${a.defaultMinutes}`}
                                value={a.manualMinutes ?? ""}
                                onChange={e => onChangeMinutes(a.type, Number(e.target.value))}
                                style={{ width: 60 }}
                            />
                        )}
                    </li>


                ))}
            </ul>
        </section>
    );
}
