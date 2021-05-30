import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    //DOM要素に直接アクセスするのは避けるべきである。今回は学習の為例外
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    //アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);
}
