import Link from "next/link";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <div>
      <Navbar />
      <p className="text-4xl">Manminder singh </p> <br />
      <Link href="/portfolio">Portfolio</Link>
      <br />
      <Link href="/Login">Login</Link>
      <br />
      <Link href="/users">users</Link>
      <br />
    </div>
  );
};

export default page;
