import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';


export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Navbar postNav />
      <div style={{ paddingBottom: '50px' }}>
        <Title>{mdx.frontmatter.title}</Title>
        <h2>{mdx.frontmatter.date}</h2>
        <Wrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Wrapper>
      </div>
    </Layout>
  );
}

const Title = styled.h3`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 30px;
`

const Footer = styled.div`
  padding-bottom: 50px;
`

const Wrapper = styled.div`
  max-width: 700px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  p {
    color: black;
    font-size: 1.3em;
   }
`;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        path
      }
    }
  }
`;
