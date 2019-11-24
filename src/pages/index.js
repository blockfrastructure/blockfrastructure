import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Blockfrastructure"

    console.log('props', this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Blockfrastructure, We provide staking infrastructure and tooling for token holders of stake-based blockchains.</p>
        <p>
          Head over to our blog to learn about blockchain and staking, the risks and rewards of staking in blockchain networks.
        </p>

        <StaticQuery
          query={kusamaImageQuery}
          render={data => {
            console.log('data', data)
            // return (
            //   <Container>
            //     <Image
            //       fixed={data.avatar.childImageSharp.fixed}
            //       alt={author}
            //       style={{
            //         marginRight: rhythm(1 / 2),
            //         marginBottom: 0,
            //         minWidth: 50,
            //         borderRadius: `100%`,
            //       }}
            //       imgStyle={{
            //         borderRadius: `50%`,
            //       }}
            //     />
            //     <p>
            //       Written by <strong>{author}</strong> who lives and works in Berlin and builds cool stuff!
            //       {` `}
            //       <a href={`https://twitter.com/${social.twitter}`}>
            //         You should follow him on Twitter
            //       </a>
            //     </p>
            //   </Container>
            // )
          }}
        />

        <h2>Our Supported Networks</h2>

        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

const kusamaImageQuery = graphql`
  query {
    kusama: file(absolutePath: { regex: "/kusama.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
