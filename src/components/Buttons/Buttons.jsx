import React from "react";
import style from "./Button.module.css";

function Buttons({ start, reset, restore, stop }) {
  return (
    <div className={style.wrapperButtons}>
      <button  className={style.button} onClick={start}>
        Start
      </button>
      <button className={style.button} onClick={stop}>
        Stop
      </button>

      <button className={style.button} onClick={reset}>
        Reset
      </button>

      <button className={style.button} onClick={restore}>
        Wait
      </button>
    </div>
  );
}

export default Buttons;
