import React, {useState, useEffect, useRef} from "react";
import "./Styles/stopwatch.css"


function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    function stop(){
        setIsRunning(false);
    }
    function formateTime(){
        // const hours = (new Date().getHours);
        // const minutes = (new Date().getMinutes());
        // const seconds = (new Date().getSeconds());
        // const milliseconds = (new Date().getMilliseconds());

        const hours = Math.floor(elapsedTime/(1000 * 60 * 60)%12);
        const minutes = Math.floor(elapsedTime/(1000 * 60)%60);
        const seconds = Math.floor(elapsedTime/(1000)%60) ;
        const milliseconds = Math.floor((elapsedTime%1000)/10);

        // hours = String(hours).padStart(2, "0");
        // minutes = String(minutes).padStart(2, "0");
        // seconds = String(seconds).padStart(2, "0");
        // milliseconds = String(milliseconds).padStart(2, "0");

        // return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;

    }

    // function padZero(num){
    //         return (num < 10 ? "0" : "")+num;
    // }
    return(
        <div className="Stopwatch">
            <div className="display">
                    {formateTime()}
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;