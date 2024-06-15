"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ModeToggle = () => {
  const [mount, setMount] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMount(true), []);

  return mount && resolvedTheme === "dark" ? (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("light")}>
      <Sun className="w-5 h-5" />
    </Button>
  ) : (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("dark")}>
      <Moon className="w-5 h-5" />
    </Button>
  );
};

export default ModeToggle;
