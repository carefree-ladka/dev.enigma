import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { annotate, annotationGroup } from "rough-notation";
import styles from "./index.module.css";
import React from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const title = document.querySelector<HTMLElement>(".hero__title");
      const subtitle = document.querySelector<HTMLElement>(".hero__subtitle");
      const button = document.querySelector<HTMLElement>(".button--secondary");

      if (!title || !subtitle || !button) return;

      // Split title into words for individual animation
      const titleText = title.textContent || "";
      const words = titleText.split(" ");

      // Only apply cool effect if title has words
      if (words.length > 0) {
        // Wrap each word in a span for individual annotation
        title.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");

        const wordElements = title.querySelectorAll<HTMLElement>(".word");
        const wordAnnotations = Array.from(wordElements).map((word, index) => {
          const colors = [
            "#ffd700",
            "#1dd1a1",
            "#54a0ff",
            "#ee5a6f",
            "#ff6b6b",
          ];
          const types: Array<
            "highlight" | "underline" | "box" | "circle" | "crossed-off"
          > = ["highlight", "underline", "box", "circle"];

          return annotate(word, {
            type: index === 0 ? "highlight" : types[index % types.length],
            color: colors[index % colors.length],
            strokeWidth: 3,
            animationDuration: 800,
            iterations: 2,
            multiline: false,
            padding: 5,
          });
        });

        // Subtitle with bracket effect
        const subtitleAnnotation = annotate(subtitle, {
          type: "bracket",
          color: "#1dd1a1",
          strokeWidth: 3,
          animationDuration: 1200,
          brackets: ["left", "right"],
          multiline: true,
          padding: 10,
        });

        // Button with crossed-off then circle effect (interactive)
        const buttonBoxAnnotation = annotate(button, {
          type: "box",
          color: "#54a0ff",
          strokeWidth: 3,
          animationDuration: 1000,
          padding: 8,
          iterations: 1,
        });

        // Create sequential animation
        const ag = annotationGroup([
          ...wordAnnotations,
          subtitleAnnotation,
          buttonBoxAnnotation,
        ]);

        ag.show();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            DevEnigma Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="DevEnigma, js, html5, css3, react, java, spring boot, junit, redux, git, docker, typescript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
