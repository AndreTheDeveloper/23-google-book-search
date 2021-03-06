import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
    return (
        <div>
            <h1>Google Book Search</h1>

            <form className="book__search">
                <label htmlFor="searchTerm"> Search: </label>
                <input type="text" name="searchTerm" id="searchTerm" placeholder="The Alchemist" />
                <button type="submit">Search</button>
                <br />
                <label htmlFor="printType"> Print Type: </label>
                <select value="printType"> {/*Need to complete! */}
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select> 
                <label htmlFor="bookType"> Book Type: </label>
                <select value="bookType"> {/*Need to complete! */}
                    <option value="ebooks">All Google eBooks</option>
                    <option value="free-ebooks">Google eBooks with full volume viewability</option>
                    <option value="full">Public can view entire volume text</option>
                    <option value="paid-ebooks">Google eBook with a price</option>
                    <option value="partial">Public able to see parts of text</option>
                </select> 
                
            </form>


        </div>
    )
}
