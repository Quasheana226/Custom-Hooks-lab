import { useState } from 'react'

// This hook takes totalitems itemsperpage and initialPage 

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
    // Rembering which page 
    // Starting off with inital page 
    const [currentPage, setCurrentPage] = useState(initialPage)

    // If 0 items
    // Math.ceil rounds up 
    const totalPages = totalItems === 0 ? 0 : Math.ceil(totalItems / itemsPerPage)

    //Which item index to start showing
    const startIndex = (currentPage - 1) * itemsPerPage

    // Which item index to stop showing 

    const endIndex = startIndex + itemsPerPage

    // How many items actuall on this page 
    // Math.min pickes whichever is smaller 

    const itemsOnCurrentPage = Math.min(itemsPerPage, totalItems - startIndex)

    // can go forward as long as long not on page 1

    const canNextPage = currentPage < totalPages

    // can go back as long as long not on page 1
    const canPrevPage = currentPage > 1

    //Jump to any specific page 
    function setPage(pageNumber) {
        if (pageNumber < 1) return // cant go below page 1
        if (pageNumber > totalPages) return  // cant go above last opage 
        setCurrentPage(pageNumber)
    }
    //Go forward one page 
    function nextPage() {
        setPage(currentPage + 1)

    }

    // GO back one page 
    function prevPage() {
        setPage(currentPage - 1)

    }

    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,


    }


}


export default usePagination