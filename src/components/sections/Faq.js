import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What does Blockfrastructure do?',
    content: () => (
      <>
        We provide safe and secure blockchain infrastructure for staking based blockchains.
        We run validator services on a variety of different networks to secure blockchains
        and earn rewards for running these services. When you stake with us we share the block rewards
        with you.
      </>
    ),
  },
  {
    title: 'What is staking?',
    content: () => (
      <>
        Staking is the process of holding funds in a cryptocurrency wallet to support opertions of a blockchain network.
        It locks the curreny in a wallet to review rewards. The concept of staking is closely related to Proof of Stake.
        You can learn more about that <ExternalLink href="https://en.wikipedia.org/wiki/Proof_of_stake">here.</ExternalLink>
      </>
    ),
  },
  // {
  //   title: 'How do I scale Gatsby sites?',
  //   content: () => (
  //     <>
  //       Gatsby.js is Internet Scale. Forget complicated deploys with databases
  //       and servers and their expensive, time-consuming setup costs,
  //       maintenance, and scaling fears. Gatsby.js builds your site as “static”
  //       files which can be deployed easily on dozens of services.
  //     </>
  //   ),
  // },
  // {
  //   title: 'How does do I future-proof my website?',
  //   content: () => (
  //     <>
  //       Do not build a website with last decade’s tech. The future of the web is
  //       mobile, JavaScript and APIs—the{` `}
  //       <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
  //       Every website is a web app and every web app is a website. Gatsby.js is
  //       the universal JavaScript framework you’ve been waiting for.
  //     </>
  //   ),
  // },
  // {
  //   title: 'What exactly does Gatsby build?',
  //   content: () => (
  //     <>
  //       Gatsby.js is a static PWA (Progressive Web App) generator. You get code
  //       and data splitting out-of-the-box. Gatsby loads only the critical HTML,
  //       CSS, data, and JavaScript so your site loads as fast as possible. Once
  //       loaded, Gatsby prefetches resources for other pages so clicking around
  //       the site feels incredibly fast.
  //     </>
  //   ),
  // },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
