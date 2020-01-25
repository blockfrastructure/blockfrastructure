import React from 'react';

import Layout from '@common/Layout';

import styled from 'styled-components';


const StakeCosmos = (props) => {
  return (
    <Layout>
      <Title>
        Stake Cosmos with Blockfrastructure using Lunie
      </Title>
      <Wrapper>
        In its simplest form, staking is the term used to describe a situation where someone has something on the line. When you have something at stake, there is an inherent and implied risk and usually some opportunity for reward. If people are in a situation where they have something at stake, you might say they are participating in some kind of staking economy.
      </Wrapper>

    </Layout>
  )
};

const Title = styled.h2`
 text-align: center;
 padding-bottom: 30px;
 padding-top:30px;
`

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  width: 95%;
  margin-left:auto;
  margin-right:auto;
  justify-content:center;
  align-items:center
`

export default StakeCosmos;
