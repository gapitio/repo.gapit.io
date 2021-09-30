import { Component, JSX, Show } from "solid-js";
import { ExternalLinkIcon } from "~/Components/Icons/ExternalLinkIcon";
import style from "./index.module.css";

export const NavbarLink: Component<{
  children: JSX.Element;
  href: string;
}> = ({ children, href }) => (
  <a class={style.link} href={href} rel="noopener noreferrer" target="_blank">
    <span class={style.label}>{children}</span>
    <span class={style["icon-wrapper"]}>
      <ExternalLinkIcon />
    </span>
  </a>
);
