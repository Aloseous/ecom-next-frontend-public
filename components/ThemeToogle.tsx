"use client";

import { useContext } from "react"
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";


const ThemeToogle = () => {

  const { theme, toogle } = useContext(ThemeContext);

  return (

    <div>
      {theme === "dark" && <Sun onClick={toogle}></Sun>}
      {theme === "light" && <Moon onClick={toogle}></Moon>}
    </div>
  )
}

export default ThemeToogle