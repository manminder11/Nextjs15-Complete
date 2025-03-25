import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div>
          <h1>Logo</h1>
        </div>

        <div>
          <Link href="/about">about</Link>
          <Link href="/users">users</Link>
          <Link href="/portfolio">portfolio</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
