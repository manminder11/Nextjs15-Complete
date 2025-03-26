"use client";
import Link from "next/link";
import { useState } from "react";
const Layout = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="nameInput">Name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Link className="bg-teal-500" href="/Templatte/revenue">
        revenue
      </Link>{" "}
      <br />
      <Link className="bg-teal-500" href="/Templatte/revenue/stats">
        stats
      </Link>
    </div>
  );
};

export default Layout;
