import React,{useState} from "react"

function SearchBox({searchUpdate})
{

    const [searchInput,setSearchInput]=useState("");

    function handleSearchInput(event)
    {
        setSearchInput(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        searchUpdate(searchInput);
    }
    // console.log("Yes I am i from")
    return(
        <form className="search-form" onSubmit={handleSubmit} id="search-form">
            <label htmlFor="search-form"></label>
            <input onChange={handleSearchInput}type="text" placeholder="Search Country" id="search" name="search"></input>
        </form>
    )
}

export default SearchBox;