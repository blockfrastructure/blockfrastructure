import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '@common/Layout';


export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div>
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
  padding-top: 30px;
  padding-bottom: 30px;
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
