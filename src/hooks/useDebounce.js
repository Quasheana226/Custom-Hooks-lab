import { useState, useEffect } from "react"

// function called useDebounce takes a value whatever the user types 
// delay for how long to wait
function useDebounce(value, delay = 500) {


    // updates after the user types 

    const [debouncedValue, setDebouncedValue] = useState(value)

    // This runs whenver value or delay changes 
    useEffect(() => {

        // set a timer so after delay ms update debouncedValue to current value 
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)

        }
        // tells react only run when value or delay changes 
    
    }, [value, delay])
     return debouncedValue
}



export default useDebounce