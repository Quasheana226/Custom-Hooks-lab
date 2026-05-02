

import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearchDemo() {

    const [inputValue, setInputValue] = useState("")


    // This is where whatever the user is typing 
    const debouncedValue = useDebounce(inputValue, 500)

    // Fake datea to search 

    const catalog = [
        'Prada', 'Nike', 'Addia', 'Lu-lemon',
        'Puma', 'Jordans', 'yeezy', 'Travis-scott'
    ]

    // Filter the catalog using debounce

    const results = catalog.filter(item =>
        item.toLowerCase().includes(debouncedValue.toLowerCase())

    )

    return (

        <div className="demo-card">
            <input
                type="text"
                className="search-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Sneakers..."
            />

            <p className="search-label">Typing: <span>{inputValue}</span></p>
            <p className="search-label">Searching for: <span>{debouncedValue}</span></p>

            <ul className="results-list">
                {results.map(item => (
                    <li key={item} className="result-item">{item}</li>
                ))}
            </ul>

        </div>
    )
}
export default DebounceSearchDemo