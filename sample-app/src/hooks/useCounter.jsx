import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  // useCallback ->　再レンダリングする際に再生成することがなくなる。コンポーネントのパフォーマンスを維持してくれる。
  const handlClick = useCallback((e) => {
    setCount(prevCount => prevCount +1);
  }, [count]);

  const handlDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow);
  }, []);

  return { count, isShow, handlClick, handlDisplay };
}
