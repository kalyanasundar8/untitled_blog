import React from "react";

type Props = {
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CTAButton({ label, className, onClick }: Props) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
