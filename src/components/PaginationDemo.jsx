import usePaginantion from "../hooks/usePagination";

// (_, i) means ignore the first arguement just use the index i

const ALL_ITEMS = Array.from({ length: 60 }, (_, i) => `Sneaker #${i + 1}`)

function PaginationDemo() {

    // Pull everyting ewe need from our hook

    const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
        
    } = usePaginantion(ALL_ITEMS.length, 6, 1)

    const visibleItems = ALL_ITEMS.slice(startIndex, endIndex)
    return(

        <div> 
            <p>Page {currentPage} of {totalPages}</p>

            <ul>
                {visibleItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <button onClick={prevPage} disabled={!canPrevPage}>
                Previous 

            </button>

            <button onClick={nextPage} disabled={!canNextPage}>

            </button>
        </div>

    )


}
export default PaginationDemo