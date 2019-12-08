import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import styles from './index.module.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Blockfrastructure"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`staking`, `blockchain`, `digital`, `asset`, `bitcoin`]}
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Blockfrastructure! We provide staking infrastructure and tooling for token holders of stake-based blockchains. <strong>We are under active development so stay tuned!</strong>
        </p>
        <p>
          Head over to our blog to learn about blockchain and staking, the risks and rewards of staking in blockchain networks.
        </p>
        <h2>Networks Under Development</h2>
        <StaticQuery
          query={kusamaImageQuery}
          render={data => {
            return (
              <div className={styles.supported_network_container}>
                <div className={styles.home_image_wrapper}>
                  <img alt="Kusama Network" style={{ height: '150px', width: '150px', borderRadius: '50%', border: '1px solid black' }} src={data.file.childImageSharp.fluid.src} />
                  <div>Kusama</div>
                </div>

              </div>
            )
          }}
        />
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}
const kusamaImageQuery = graphql`
query {
  file(relativePath: {eq: "kusama.png"}) {
    childImageSharp {
      fluid {
        aspectRatio
        base64
        src
        srcSet
        sizes
      }
    }
  }
}
`

export default IndexPage
