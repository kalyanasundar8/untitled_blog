import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  className?: string;
  href: string;
};

export default function NavLink({ text, className, href }: Props) {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
}
