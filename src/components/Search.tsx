import React, { useState } from "react";

type InputProps = {
    query?: string;
    inputHandleChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const Search =(props:InputProps)=>{
    const { query, inputHandleChange } = props;
    return(
        <div>
            <input
            type='text'
            value={query}
            onChange = {inputHandleChange}
            placeholder = "Search..."
            />
      </div>
    )
}

export default Search