"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className={"my-4 flex flex-row gap-4 text-black dark:text-zinc-400"}>
      <MoonIcon
        onClick={() => setTheme("dark")}
        width={14}
        height={14}
        className={"cursor-pointer dark:hover:text-white"}
      />

      <SunIcon
        onClick={() => setTheme("light")}
        width={14}
        height={14}
        className={"cursor-pointer dark:hover:text-white"}
      />
    </div>
  );
}
