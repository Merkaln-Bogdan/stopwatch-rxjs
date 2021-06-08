import React from 'react';
import style from "./Stopwatch.module.css"
function Stopwatch({ time }) {
  return (
    <div  className={style.wrapperStopwatch}>
      <span>{('0' + Math.floor(time / 6000)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>&nbsp;:&nbsp;
      <span>{('0' + Math.floor(time % 100)).slice(-2)}</span>
    </div>
  );
}

export default Stopwatch;