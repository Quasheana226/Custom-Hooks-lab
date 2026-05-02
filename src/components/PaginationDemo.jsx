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

        <div className="demo-card">
            <p className="page-indicator">Page {currentPage} of {totalPages}</p>

            <ul className="pagination-list">
                {visibleItems.map(item => (
                    <li key={item} className="pagination-item">{item}</li>
                ))}
            </ul>

            <div className="pagination-controls">
                <button className="btn-nav" onClick={prevPage} disabled={!canPrevPage}>
                    Previous
                </button>
                <button className="btn-nav" onClick={nextPage} disabled={!canNextPage}>
                    Next
                </button>
            </div>
        </div>

    )


}
export default PaginationDemo