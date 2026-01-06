import { useEffect } from "react";
import { fetchToday } from "./api/todayApi";

function App() {
    useEffect(() => {
        fetchToday()
            .then(data => console.log("TODAY API:", data))
            .catch(err => console.error(err));
    }, []);

    return <div>Check console</div>;
}

export default App;
