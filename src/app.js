import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
    const nav = useNavigate();
    let barWidth = 0.0;

    useEffect(()=>{
        let message = document.getElementById('message');
        let bar = document.getElementById('bar');
        let progress = document.getElementById('progress');
        const loadingTimeMs = 5000.0;
        const intervalTimeMs = (100.0/loadingTimeMs)*100.0;
        message.innerHTML = "Redirecting to home page...";
        
        let intervalProgressBar = setInterval(() => {
            if(barWidth === 100){
                clearInterval(intervalProgressBar);
            }else{
                barWidth += intervalTimeMs;
                bar.style.width = `${barWidth}%`;
            }
        }, 100);
        
        setTimeout(()=>{
            nav('/home');
        }, loadingTimeMs);
    }, []);
    
    return (
        <div>
            <h1>Welcome to Hello React App!</h1>
            <hr/>
            <span id="message"></span>
            <div id="progress">
                <div id="bar"></div>    
            </div>
        </div>
    );
  };
  
  export default App;