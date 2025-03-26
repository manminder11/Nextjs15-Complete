import { ReactNode } from "react";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="./layot/laot">this layout used here</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;

// this layout is used in the following pages:
// src/app/layot/page.tsx
// it take content from their and put in the children
