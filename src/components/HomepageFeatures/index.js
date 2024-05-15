import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'I',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed .
      </>
    ),
  },
  {
    title: 'Show',
    Svg: require('@site/static/img/bank.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs.
      </>
    ),
  },
  {
    title: 'Speed',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        Extend or customize your website .
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
