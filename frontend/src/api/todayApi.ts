export async function fetchToday() {
    const response = await fetch("http://localhost:5125/api/today");
    if (!response.ok) {
        throw new Error("Failed to fetch today");
    }
    return response.json();
}
