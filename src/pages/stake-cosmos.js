import React from 'react';

import Layout from '@common/Layout';

import styled from 'styled-components';

const StakeCosmos = props => {
  return (
    <Layout>
      <Title>Stake Cosmos with Blockfrastructure using Lunie</Title>
      <Wrapper></Wrapper>
    </Layout>
  );
};

const Title = styled.h2`
  text-align: center;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

export default StakeCosmos;
