import React, { useEffect, useState } from "react";
import './FirstLoad.css'
import RouteFile from "./RouteFile";


const FirstLoadig = () => {
  const [allow, setallow] = useState(true);

  const useEffect=()=>{
    (setTimeout(() => {
    setallow(false)
  }, 3000)),[allow]}
const change=()=>{
 setallow(false)
}
  return(
  <>
{{allow} ? <div class="heading-container">
      <h1>
        <span class="devils">Devil's</span> <span class="domain">Domain</span>
      </h1>
      <div>{change()}</div>
    </div>

    : <RouteFile/>}
  </>
  )
};

export default FirstLoadig;
