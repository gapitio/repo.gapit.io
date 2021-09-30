import { Component, For } from "solid-js";
import { repos } from "~/repos.config";
import { RepoCard } from "../RepoCard";
import style from "./index.module.css";

export const ReposGrid: Component = () => (
  <div class={style.grid}>
    <For each={repos}>{(repo) => <RepoCard repo={repo}></RepoCard>}</For>
  </div>
);
