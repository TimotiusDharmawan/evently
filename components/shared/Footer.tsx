import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-violet-300">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <div className="flex flex-col gap-4">
          <p>2023 Evently. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
