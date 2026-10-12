import { useEffect, useRef, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { IoTimer } from "react-icons/io5";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const handlSubmit = () => {
    console.log(inputRef.current);
    console.log(inputRef?.current?.value);
    inputRef?.current?.focus();
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "red";
      inputRef.current.style.color = "white";
    }
  };
  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);
  const [timer, setTimer] = useState(() => {
    return Number(localStorage.getItem("timer") || 0);
  });
  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const toggleTimer = () => {
    if (running) {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      timerRef.current = setInterval(() => {
        setTimer((p) => p + 1);
      }, 1000);
    }
    setRunning(!running);
  };
  const resetTimer = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimer(0);
    setRunning(false);
    localStorage.removeItem("timer");
  };
  return (
    <>
      <div>I am App</div>
      <p>I am Nova Timer App</p>
      <input type="text" placeholder="search" ref={inputRef} />
      <button type="submit" onClick={handlSubmit}>
        Submit
      </button>
      <div className="m-3 timer-div d-flex flex-column align-items-center gap-2">
        {/* Timer and count in the first line */}
        <div className="d-flex align-items-center gap-2">
          <IoTimer size={30} />
          <p className="mb-0">{timer} s</p>
        </div>

        {/* Both buttons in the next line */}
        <div className="d-flex gap-2">
          <button ref={startButtonRef} onClick={toggleTimer}>
            {running ? "Stop" : "Start"}
          </button>

          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
