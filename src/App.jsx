import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>ok</button>
      <Message count={count} />
    </>
  );
}

export const Message = (props) => {
  return <p>{props.count}</p>;
};
