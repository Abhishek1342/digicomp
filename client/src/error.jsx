import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./error.css";
import Logo from "./Images/Logo/dclogo.png";
import Robo from "./Images/error/robot404.gif";

function Error() {
   useEffect(() => {
      document.title = `Error`;
   });
   return (
      <div className="error-container">
         <div className="Brandus">
            <img src={Logo} alt="Digicomp Logo" />
            <h1>DIGICOMP</h1>
         </div>
         <div className="Content-container">
            <div className="Contnt">
               <h2>404</h2>
               <h3>Error !</h3>
               <Link className="link-404" to="/">
                  <a>Return to home</a>
               </Link>
            </div>
            <div className="gif-container">
               <img src={Robo} />
            </div>
         </div>
      </div>
   );
}

export default Error;
