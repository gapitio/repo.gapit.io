import { Component, For, Show } from "solid-js";
import { Repo, repos } from "~/repos.config";
import { RepoListLink } from "../Link";
import style from "./index.module.css";

export const RepoItem: Component<{ repo: Repo }> = ({
  repo: { description, href, image, name },
}) => {
  const repoName = href.substr(href.lastIndexOf("/") + 1);

  return (
    <li class={style["list-item"]}>
      <div class={style["header-wrapper"]}>
        <Show when={image}>
          <img class={style.image} src={image}></img>
        </Show>
        <Show when={name}>
          <span class={style.name}>{name} |</span>
        </Show>
        <RepoListLink href={href} label={repoName}></RepoListLink>
      </div>
      <span>{description}</span>
    </li>
  );
};

export const RepoList: Component = () => (
  <div>
    <ul>
      <For each={repos}>{(repo) => <RepoItem repo={repo} />}</For>
    </ul>
  </div>
);
