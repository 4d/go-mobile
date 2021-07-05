import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Native apps builder",
    imageUrl: "img/native.png",
    description: (
      <>
        <Translate>
          Build your native iOS and Android apps in pure Swift and Kotlin 
		  using an integrated 4D component without needing any prior expertise.
        </Translate>
      </>
    ),
  },
  {
    title: "Open solution",
    imageUrl: "img/open.png",
    description: (
      <>
        You can reopen your generated projects with Xcode or Android Studio 
		and continue to work on them.

      </>
    ),
  },
  {
    title: "Online and offline",
    imageUrl: "img/offline.png",
    description: (
      <>
        All of your data is embedded in your app and available 
		without needing an internet connection.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
		<h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl(
                "docs/getting-started/introduction"
              )}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
	  <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
	  <p className="hero__subtitle">BETA DOCUMENTATION SITE</p></div></div>
		
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
