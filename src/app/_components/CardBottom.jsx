"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { menu } from "../_constants/buttons/links";

export function CardBottom() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 text-black shadow-2xl">
      {menu.map((value) => (
        <Link
          key={value.text}
          target="_blank"
          rel="noopener noreferrer"
          href={value.link}
          className="flex h-auto w-full flex-row items-center justify-between gap-5 rounded-md border border-gray-400 p-5 hover:animate-pulse"
        >
          <div className="flex h-auto w-full flex-row items-center justify-start gap-5 text-md font-black underline">
            {value.icon}
            <span>{value.text}</span>
          </div>

          <FaArrowRight aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
