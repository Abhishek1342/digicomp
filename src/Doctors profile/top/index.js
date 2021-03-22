import React from 'react';
import docImg from './doctor-in-branding-article 1.jpg';
import ReactDom from 'react-dom';
import './index.css';
function Cards(){
    return(<section className="main-div">
        <div className="pic-div"><img src={docImg} className="doc-img"></img></div>
        <div className="text-div">
            <p className="doc-name"><b>DR AMRITANAND BABA</b></p>
            <p className="education">MBBS PHD FROM IIITDM KURNOOL<br></br>JHOLACHAP CLINIC</p>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       </section>
    );
}
ReactDom.render(<Cards></Cards>,document.getElementById('root'));