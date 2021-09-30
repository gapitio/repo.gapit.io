export interface Repo {
  links: {
    repository?: string;
    website?: string;
    documentation?: string;
  };
  name?: string;
  description: string;
  icon?: string;
  test?: number;
}

export const repos: Repo[] = [
  {
    links: {
      repository: "https://github.com/gapitio/gapit-htmlgraphics-panel",
      website: "https://gapit-htmlgraphics-panel.gapit.io/",
    },
    name: "HTMLGraphics",
    description:
      "Grafana panel for displaying metric sensitive HTML or SVG graphics.",
    icon: "https://raw.githubusercontent.com/gapitio/gapit-htmlgraphics-panel/main/src/img/logo.svg",
    test: 4,
  },
];
