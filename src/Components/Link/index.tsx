import { Component } from "solid-js";
import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import style from "./index.module.css";

export const Link: Component<{
  label: string;
  href: string;
  type?: "default" | "navbar" | "repoList";
}> = ({ label, href, type = "default" }) => (
  <a
    class={style.link}
    classList={{
      [style.navbar]: type === "navbar",
      [style["repo-list"]]: type === "repoList",
    }}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span class={style.label}>{label}</span>
    <span class={style["icon-wrapper"]}>
      <ExternalLinkIcon />
    </span>
  </a>
);

export const NavbarLink: Component<{
  label: string;
  href: string;
}> = ({ label, href }) => <Link label={label} href={href} type={"navbar"} />;

export const RepoListLink: Component<{
  label: string;
  href: string;
}> = ({ label, href }) => <Link label={label} href={href} type={"repoList"} />;
