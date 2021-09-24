import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar";
import { RepoList } from "./Components/RepoList";

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <Navbar />
      </header>
      <main>
        <RepoList />
      </main>
    </div>
  );
};
