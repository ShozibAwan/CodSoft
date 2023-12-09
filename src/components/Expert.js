import React from "react";
function Expert(){
    return(
        <div>
            <img src="/images/girl.png" class='pro'/>
            <div className="able">
                <h1>Proficiency</h1>
            </div>
            <div className="container">
                <ul className="box">
                    <li>
                        <h5>HTML (95%)</h5>
                        <span className="bar barHTML"></span>
                    </li>
                    <li>
                        <h5>CSS (65%)</h5>
                        <span className="bar barCSS"></span>
                    </li>
                    <li>
                        <h5>JavaScript (75%)</h5>
                        <span className="bar barJS"></span>
                    </li>
                    <li>
                        <h5>Node.js (90%) </h5>
                        <span className="bar barNode"></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Expert