import { Component, For, Show } from "solid-js";
import { Repo } from "~/repos.config";
import { Link } from "../Link";
import style from "./index.module.css";

export const RepoCard: Component<{ repo: Repo }> = ({
  repo: { description, links, icon, name },
}) => (
  <div class={style.card}>
    <div class={style.header}>
      <Show when={icon}>
        <img class={style.icon} src={icon} alt="Icon" />
      </Show>
      <Show when={name}>
        <span>{name}</span>
      </Show>
    </div>
    <div>{description}</div>
    <div class={style["links-container"]}>
      <For each={Object.entries(links)}>
        {([label, href]) => <Link href={href}>{label}</Link>}
      </For>
    </div>
  </div>
);
