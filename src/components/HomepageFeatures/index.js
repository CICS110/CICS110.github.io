import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        An introduction to computer programming and problem solving using
        computers. This course teaches you how real-world problems can be solved
        computationally using programming constructs and data abstractions of a
        modern programming language. Concepts and techniques covered include
        variables, expressions, data types, objects, branching, iteration,
        functions, classes, and methods. We will also cover how to translate
        problems into a sequence of instructions, investigate the fundamental
        operation of a computational system and trace program execution and
        memory, and learn how to test and debug programs. No previous
        programming experience required.
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

// Changed this to display the description in the center.
function Feature({ Svg, title, description }) {
  return (
    <div className="row">
      <div className={clsx('col col--3 text--center')}>
        <img src="img/110-image.png" width="70%"></img>
      </div>
      <div className={clsx('col col--8')}>
        <div className="padding-vert--md">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureSave({ Svg, title, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

function OriginalFeature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
