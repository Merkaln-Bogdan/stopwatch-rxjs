import React, { useState, useEffect } from 'react';
import {interval, Subject} from "rxjs";
import { takeUntil } from "rxjs/operators";

import Stopwatch from './components/Stopwatch/Stopwatch';
import Buttons from './components/Buttons/Buttons';
import style from './App.module.css'

export function App() {

  const [timer, setTimer] = useState(0);
  const [watchTime, setTimerOn] = useState(false);
 

  useEffect(() => {

    const subject = new Subject();
    interval(1000)
        .pipe(takeUntil(subject))
        .subscribe(() => {
          if (watchTime) {
            setTimer(second => second + 1);
          }
        });
    return () => {
      subject.next();
      subject.complete();
    };
  }, [watchTime]);


  const handleStart = () => { 
     if (timer == 0) {
        setTimerOn(true);
      }
  }


  
  const handleRestore = () => { 
 const delay = interval(300).subscribe(setTimerOn(prevState => !prevState))
 return ()=> delay
  }


  const handleStop = () => {
    setTimer(0);
    handleStart();
  }


  const handleReset = () => {
    setTimer(0);
    setTimerOn(false);
  }

  return (
    <div className={style.wrapper}>
          <div className={style.title}>Stopwatch</div>       
          <Stopwatch
                time={timer}
            />
            <Buttons
                start={handleStart}
                stop={handleStop}
                reset={handleReset}
                restore={handleRestore}
            />
        </div>

  );
}