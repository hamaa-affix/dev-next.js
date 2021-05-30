import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handlChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handlAdd = useCallback(() => {
    setArray( (prevArray) => {
      if (prevArray.some( item => item === text )) {
        alert("同じ要素のものがあります");
        return prevArray;
      }
      const newArray = [...prevArray, text]
      return newArray;
    })
  }, [text]);

  return { text, array, handlChange, handlAdd };
}
