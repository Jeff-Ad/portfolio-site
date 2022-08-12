import React from "react";
import Popped from "./Popped";

function Popup() {
  //   const [view, setView] = React.useState(false);
  const [timed, setTimed] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setTimed(true);
    }, 5000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setTimed(false);
    }, 15000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setTimed(true);
    }, 55000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setTimed(false);
    }, 65000);
  }, []);
  const keyPress =
    ((e) => {
      if (e.key === "Escape" && timed) {
        setTimed(false);
      }
    },
    [timed]);
  React.useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <div>
      <main>
        {/* <h1>React Popups</h1>
        <button onClick={() => setView(true)}>Open Popup</button> */}
        {/* <Popped trigger={view} setTrigger={setView} /> */}
        <Popped trigger={timed} setTrigger={setTimed} />
      </main>
    </div>
  );
}

export default Popup;
