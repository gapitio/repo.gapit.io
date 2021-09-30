import { Component, createSignal } from "solid-js";
import style from "./index.module.css";

type Themes = "light" | "dark";

const switchTheme = (theme: Themes) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const toggleTheme = (darkTheme: boolean) => {
  const theme = darkTheme ? "light" : "dark";
  switchTheme(theme);
};

export const ThemeSwitch: Component = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const [darkTheme, setDarkTheme] = createSignal(currentTheme === "dark");

  return (
    <div
      class={style.wrapper}
      classList={{
        [style["dark-theme"]]: darkTheme(),
        [style["light-theme"]]: !darkTheme(),
      }}
    >
      <div
        class={style.track}
        role="button"
        tabindex="-1"
        onclick={() => {
          toggleTheme(darkTheme());
          setDarkTheme(!darkTheme());
        }}
      >
        <div class={`${style["icon-wrapper"]} ${style["dark-icon"]}`}>
          <span class={style.icon}>🌜</span>
        </div>
        <div class={`${style["icon-wrapper"]} ${style["light-icon"]}`}>
          <span class={style.icon}>🌞</span>
        </div>
        <div class={style.thumb}></div>
      </div>
      <input
        class={style.checkbox}
        type="checkbox"
        aria-label="Switch between dark and light mode"
      ></input>
    </div>
  );
};
