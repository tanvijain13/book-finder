import React from 'react'
import LoaderImage from "../../images/loader.gif";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImage} alt = "loading"/>
    </div>
  )
}

export default Loader