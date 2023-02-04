import React from "react";
interface Props{
  name?: string
}
const Song: React.FC<Props> =({name}): JSX.Element=>{
  return(
    <h3>{name}</h3>
  )
}

export default Song