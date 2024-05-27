import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>ok</button>
    </>
  );
}

export default App;
