import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        <code>NX</code> was made so that everyone can use it whether beginner or
        proffesional with complete documentation.
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/typescript.svg').default,
    description: (
      <>
        <code>NX</code> is a modern framework, made using modern technologies
        such as TypeScript and React, to ensure clean and functional code.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/centralize.svg').default,
    description: (
      <>
        <code>NX</code>lets you costume anything you want with ease.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
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
  )
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
  )
}
