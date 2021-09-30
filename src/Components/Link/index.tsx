import { Component, JSX, Show } from "solid-js";
import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import style from "./index.module.css";
import { NavbarLink } from "./NavbarLink";

export const Link: Component<{
  children: JSX.Element;
  href: string;
  linkIcon?: boolean;
}> = ({ children, href, linkIcon = true }) => (
  <a class={style.link} href={href} rel="noopener noreferrer" target="_blank">
    <span class={style.label}>{children}</span>
    <Show when={linkIcon}>
      <span class={style["icon-wrapper"]}>
        <ExternalLinkIcon />
      </span>
    </Show>
  </a>
);

export { NavbarLink };
