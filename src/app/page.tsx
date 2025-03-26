"use client";
import Image from "next/image";
import Reddead from "../../public/rdr2.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const Page = () => {
  const router = useRouter();

  const donavigation = (one: string) => {
    router.push(`${one}`);
  };
  const again = (two: string) => {
    router.push(`${two}`);
  };

  const th = (three: string) => {
    router.push(`${three}`);
  };

  const f = (four: string) => {
    router.push(`${four}`);
  };

  return (
    <div>
      <Image src={Reddead} alt="Reddead" /> {/* image internal */}
      <br />
      <Image
        src="https://wallpapercave.com/wp/wp2452332.jpg"
        alt="another rdr image but now it is external"
        height={500}
        width={500}
      />
      <p className="text-4xl">Manminder singh </p> <br />
      <Link href="/portfolio">Portfolio</Link>
      <br />
      <Link href="/Login">Login</Link>
      <br />
      <Link href="/users">users</Link>
      <br />
      <button
        className="bg-black text-white"
        type="button"
        onClick={() => donavigation("/UR/one")}
      >
        Home
      </button>
      <button type="button" onClick={() => again("UR/two")}>
        {" "}
        two
      </button>
      <button type="button" onClick={() => th("UR/three")}>
        three
      </button>
      <button type="button" onClick={() => f("UR/four")}>
        refreh on click
      </button>
      <Navbar />
    </div>
  );
};

export default Page;

// i have done here push back refresh on click

// example
// refresh
// code
// const refreshPage = () => {
//   router.reload();
// };

// Usage example
// <button type="button" onClick={refreshPage}>
//   Refresh Page
// </button>
