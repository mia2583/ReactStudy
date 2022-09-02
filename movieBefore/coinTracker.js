import { useState } from "react"

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    // 한번만 작동하도록
    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });

    }, [])

    return (
        <div>
            <h1>The Coins!</h1>
            {loading? <strong>Loading...</strong> : null}
            <ul>
                {coins.map()}
            </ul>
        </div>
    )
}
