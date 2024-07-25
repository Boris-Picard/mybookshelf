"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(false);

  isDarkTheme ? setTheme("dark") : setTheme("light");

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="border-0 shadow-none bg-transparent"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            isDarkTheme ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            isDarkTheme ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      </Button>
    </div>
  );
}
