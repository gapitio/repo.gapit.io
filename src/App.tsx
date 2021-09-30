import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar";
import { ReposGrid } from "./Components/ReposGrid";

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <Navbar />
      <main>
        <ReposGrid />
      </main>
    </div>
  );
};
