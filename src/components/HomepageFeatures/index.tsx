import Heading from "@theme/Heading";
import clsx from "clsx";
import * as React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  color: string; // Add color for each card
};

const FeatureList: FeatureItem[] = [
  {
    title: "Data Structures & Algorithms",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Explore a collection of essential DSA patterns in JavaScript, curated to
        enhance your problem-solving skills.
      </>
    ),
    color: "#1dd1a1",
  },
  {
    title: "HTML 5",
    Svg: require("@site/static/img/html.svg").default,
    description: (
      <>
        Grasp the fundamentals and advanced features of HTML 5 with curated
        concepts and interview-focused insights.
      </>
    ),
    color: "#E34F26",
  },
  {
    title: "CSS 3",
    Svg: require("@site/static/img/css.svg").default,
    description: (
      <>
        Master styling techniques, layouts, and best practices in CSS 3 to build
        responsive, modern, and interview-ready UIs.
      </>
    ),
    color: "#1572B6",
  },
  {
    title: "TypeScript",
    Svg: require("@site/static/img/typescript.svg").default,
    description: (
      <>
        Strengthen your TypeScript skills with key concepts, advanced patterns,
        and interview-focused tips to write robust, scalable code.
      </>
    ),
    color: "#3178C6",
  },
  {
    title: "JavaScript",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Discover core JavaScript questions and handy interview tips and tricks
        to boost your preparation.
      </>
    ),
    color: "#F7DF1E",
  },
  {
    title: "React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Explore key React questions and valuable interview tips to enhance your
        preparation.
      </>
    ),
    color: "#61DAFB",
  },
  {
    title: "Java",
    Svg: require("@site/static/img/java.svg").default,
    description: (
      <>
        Master core Java concepts and problem-solving techniques with carefully
        curated interview questions.
      </>
    ),
    color: "#007396",
  },
  {
    title: "Spring Boot",
    Svg: require("@site/static/img/spring-boot.svg").default,
    description: (
      <>
        Learn essential Spring Boot concepts, practical use cases, and
        interview-ready insights to strengthen your backend expertise.
      </>
    ),
    color: "#6DB33F",
  },
  {
    title: "Database",
    Svg: require("@site/static/img/database.svg").default,
    description: (
      <>
        Explore essential database concepts, SQL queries, and optimization
        techniques to strengthen your backend and interview preparation.
      </>
    ),
    color: "#4479A1",
  },
];

function Feature({ title, Svg, description, color }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div
        className={styles.featureCard}
        style={{ "--feature-color": color } as React.CSSProperties}
      >
        <div className={styles.featureIconWrapper}>
          <div className={styles.featureIconBg} />
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresMainTitle}>
            What You'll Learn
          </Heading>
          <p className={styles.featuresSubtitle}>
            Comprehensive learning paths designed to help you master modern web
            development
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
