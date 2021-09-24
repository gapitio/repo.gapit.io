import { Component } from "solid-js";
import { GapitIcon } from "../Icons/GapitIcon";
import { NavbarLink } from "../Link";
import { ThemeSwitch } from "../ThemeSwitch";
import style from "./index.module.css";

export const Navbar: Component = () => (
  <nav class={style.navbar}>
    <div class={style["navbar-inner"]}>
      <div class={style["navbar-items"]}>
        <div class={style["icon-wrapper"]}>
          <GapitIcon />
        </div>
        <b>Repos</b>
      </div>
      <div class={style["navbar-items-right"]}>
        <NavbarLink
          label="GitHub"
          href="https://github.com/gapitio/repos.gapit.io"
        />
        <ThemeSwitch />
      </div>
    </div>
  </nav>
);
