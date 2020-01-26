import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '@common/Layout';


export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        <Wrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Wrapper>
      </div>
    </Layout>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
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
