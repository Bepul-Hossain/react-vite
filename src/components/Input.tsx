import React from "react";

type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input=(props: InputProps)=>{
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
    }
    return(
        <input type='text' value={props.value} onChange = {handleChange}/>
    )
}