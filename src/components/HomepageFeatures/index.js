import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const url = window.location.href
let prefix = ''
if(url.includes('github')) {
  prefix = '/trouts-blog'
}

const FeatureList = [
  {
    title: 'Blog',
    description: (
      <>
        Where I capture transient ideas.
      </>
    ),
    link: `${prefix}/blog`
  },
  {
    title: 'Research',
    description: (
      <>
        Long-running ideas and themes.
      </>
    ),
    link: `${prefix}/docs/intro`
  },
  {
    title: 'Career',
    description: (
      <>
        A list of some of the accomplishments and things I've built over my
        carreer.
      </>
    ),
    link: 'http://christroutner.com'
  },
  {
    title: 'Hire Me!',
    description: (
      <>
        I work as a freelance software developer in the cryptocurrency space.
        Hire me to help you build your next app.
      </>
    ),
    link: 'https://fullstack.cash/consulting'
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--6')} style={{padding: '25px'}}>
      <a href={link}>
        <div className="text--center padding-horiz--md" style={{border: '2px black solid', padding: '10px'}}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
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
