import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container main-top-container">
        <div className={styles.textContainer}>
          <h1
            style={{
              marginTop: '20px',
              fontSize: '7rem',
            }}
            className="hero__title"
          >
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">
            Documentation Website of{' '}
            <span className={styles.specialColor}>NX</span> Framework
          </p>
          <div className={styles.buttonsMain}>
            <Link
              className={clsx(
                'button button--primary button--lg button-main',
                styles.getStarted
              )}
              to={'docs/nx'}
            >
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--primary button--lg button-main',
                styles.download
              )}
              to={'https://github.com/niiyy/NX/releases'}
            >
              Download
            </Link>
          </div>
          <div className={clsx(styles.buttons, styles.githubStars)}>
            <iframe
              className={styles.githubStarsButton}
              src="https://ghbtns.com/github-btn.html?user=niiyy&amp;repo=NX&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </div>
        </div>
        <img
          src={useBaseUrl(`img/example.png`)}
          alt="Logo"
          className={styles.logo}
        />
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
