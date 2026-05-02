

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

        <div>
            {/* The search input  */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search Sneakers..."
            />

            <p>What youre Typing: {inputValue}</p>
            <p> Searching for: {debouncedValue}</p>
            {/* Show Filtered results  */}
            <ul>
                {results.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

        </div>
    )
}
export default DebounceSearchDemo