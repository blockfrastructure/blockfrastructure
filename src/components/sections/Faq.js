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
  {
    title: 'How do I get in touch with the Blockfrastructure team?',
    content: () => (
      <>
        Drop us an email at blockfrastructure@gmail.com
      </>
    ),
  },
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
