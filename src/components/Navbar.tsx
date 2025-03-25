import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>Logo</h1>
        </li>

        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/users">users</Link>
        </li>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
