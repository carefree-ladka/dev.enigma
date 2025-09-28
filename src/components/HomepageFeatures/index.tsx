import * as React from 'react'
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
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
  },
];

function Feature({ title, Svg, description }: FeatureItem) {

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
