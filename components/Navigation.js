import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link href="/">
        <a href="/">Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a href="/">About</a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a href="/">Contact</a>
      </Link>
    </li>
    <li>
      <Link href="/posts">
        <a href="/posts">Posts</a>
      </Link>
    </li>
  </ul>
);
