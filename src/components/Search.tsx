import React, { useState } from "react";

export interface Props {
    textChange?: string;
    userSearchText?:string;
}

const Search: React.FC<Props>=(props)=>{
    const { textChange, userSearchText } = props;
    return(
        <input type="text" placeholder="Search by english name" value={userSearchText} onChange={textChange}/>
    )
}
// const Search = ({ textChange, userSearchText }) => {
//     return (
//         <input type="text" placeholder="Search by english name" value={userSearchText} onChange={textChange} />
//     )
// }

export default Search