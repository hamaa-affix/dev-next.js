import Link from "next/link";
import Style from "../styles/Header.module.css";
export function Header()
{
  return (
    <header className={ Style.header }>
      <Link href="/">
        <a className={ Style.anchor }>Index</a>
      </Link>
      <Link href="/about">
        <a className={ Style.anchor }>about</a>
      </Link>
    </header>
  );
}
