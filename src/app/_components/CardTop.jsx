"use client";

import Image from "next/image";
import { useState } from "react";
import { buttonOptions, tags } from "../_constants/buttons/personal";

export function CardTop() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    const email = "developer.andrelzs@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar o e-mail:", error);
    }
  }

  return (
    <div className="grid h-auto w-full grid-rows-[1fr_auto] gap-5 rounded-2xl bg-white p-5 text-black shadow-2xl">
      <div className="flex h-auto w-full flex-row justify-between">
        {tags.map((value, idx) => (
          <h2
            key={value.title}
            className={
              idx === 1
                ? "flex items-center justify-center rounded-full bg-green-200/75 p-1 text-xs text-green-700 md:w-1/3"
                : "flex items-center justify-center text-xs md:text-xl"
            }
          >
            {idx === 1 && "• "}
            {value.title}
          </h2>
        ))}
      </div>

      <div className="flex h-auto w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
        <Image
          src="/minha-foto.jpeg"
          width={200}
          height={200}
          alt="Foto de perfil de André Luiz"
          priority
          className="h-auto w-50 rounded-full object-cover"
        />

        <div className="flex h-auto w-full flex-col justify-center gap-5 text-center md:items-start md:p-5 md:text-start">
          <h1 className="text-3xl font-bold">Eu sou André Luiz</h1>

          <p className="text-xl text-gray-500">
            Desenvolvedor Full Stack do Brasil. Precisa de algo? Fale comigo.
          </p>

          <div className="flex h-auto w-full flex-row items-center justify-center gap-5 md:justify-start">
            {buttonOptions.map((value, idx) =>
              idx === 0 ? (
                <a
                  key={value.text}
                  href={value.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded border border-black bg-black p-3 text-white underline hover:animate-pulse"
                >
                  {value.text}
                </a>
              ) : (
                <button
                  key={value.text}
                  type="button"
                  onClick={handleCopyEmail}
                  className="cursor-pointer rounded border border-black bg-white p-3 text-black underline hover:animate-pulse"
                >
                  {copied ? "E-mail copiado!" : value.text}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
