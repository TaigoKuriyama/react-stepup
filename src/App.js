

import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log('App render');
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  }
  const onClickOpen = () => {
    setOpen(!open);
  }
  const onClickClose = useCallback(() => {
    setOpen(false), [setOpen]
  });

  const onChangeText = (e) => setText(e.target.value);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}