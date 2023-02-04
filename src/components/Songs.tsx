import React, { useState } from "react";
import Item from "../data/dataTypes";
import Song from "./Song";

// type UserType = {
//     name?: string;
//     videoLink?: string;
//     lyrics?: string;
//   };
// interface Props{
    //     data: UserType
    // }
interface UserProps {
    data: Item[],
}

const Songs:React.FC<UserProps> = ({data}): JSX.Element => {
    console.log(data)
    
    return (
        <div className="songs">
          {data && data.map((item)=>
            <Song name={item.name} />
            // <h3>{item.name}</h3>
          )}
        </div>
    )
}

export default Songs