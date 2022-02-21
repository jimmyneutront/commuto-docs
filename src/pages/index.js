import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import styled from "@emotion/styled";
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export const actions = [
  {
    title: "What is Commuto?",
    href: "#",
    to: "./docs/what-is-commuto",
    text: `Learn about the What, Why and How of Commuto.`,
  },
  {
    title: "CommutoSwap Technical Reference",
    href: "#",
    to: "./docs/technical-reference/core-tec-ref",
    text: `Get technical details about the core Commuto smart contracts.`,
  },
  {
    title: "Start Contributing",
    href: "#",
    to: "./docs/guides/dev-env",
    text: `Learn how to setup a local development environment and begin contributing to Commuto.`,
  },
];

export const github = [
  {
    title: "commuto-protocol",
    href: "https://github.com/jimmyneutront/commuto-protocol.git",
  },
  {
    title: "commuto-whitepaper",
    href: "https://github.com/jimmyneutront/commuto-whitepaper.git",
  },
  {
    title: "Commuto_Interface_Mobile",
    href: "https://github.com/jimmyneutront/Commuto_Interface_Mobile.git",
  },
  {
    title: "Commuto_Interface_Desktop",
    href: "https://github.com/jimmyneutront/Commuto_Interface_Desktop.git",
  },
  {
    title: "Commuto_Interface_UI_Concept",
    href: "https://github.com/jimmyneutront/Commuto_Interface_UI_Concept.git",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const OneRow = styled(Row)`
  grid-template-columns: 1fr;
  grid-gap: 48px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */
  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`;

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`;

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Description will go into a meta tag in <head />">
      <Container>
        <DocsHeader>
          <div
            style={{
            padding: "4rem 0  ",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
          >
            <h1 style={{ fontWeight: "600" }}> Welcome to Commuto Documentation</h1>
          </div>
          <Row>
            { actions.map((action) => (
              <Link style={{ textDecoration: "none" }} to={action.to}>
                <ShadowCard key={action.title}>
                  <h3 style={{ marginBottom: ".75rem", color: action.color }}>
                    {action.title}
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>{action.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>
        <OneRow>
          <div>
            <h2>Source Code</h2>
            <p>
              All Commuto code is open source and freely available.
            </p>
            { github.map((action) => (
              <Link style={{ textDecoration: "none" }} href={action.href}>
                <Card key={action.title} style={{ marginBottom: "1rem" }}>
                  <LinkRow>
                    <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                      {action.title}
                    </h3>
                    <svg
                      style={{ width: "24px", height: "24px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </OneRow>
      </Container>
    </Layout>
  );
}