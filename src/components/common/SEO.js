import React from 'react';
import Helmet from 'react-helmet';
import { ReactComponent as FacebookOG } from '@images/brand/facebook_profile_image.png';
import { ReactComponent as TwitterOG } from '@images/brand/twitter_profile_image.png';


const SEO_DATA = {
  description: 'Residential and Commercial Window Cleaning in the Belleville and Quinte Area',
  title: 'Ontario Window Cleaning',
  url: 'https://www.blockfrastructure.com',
  author: 'Ontario Window Cleaning',
  keywords: ['staking', 'cryptocurrency', 'investing', 'blockchain', 'bitcoin', 'blockfrastructure', 'proof of stake', 'cosmos', 'atom'],
  twitter: {
    id: '@BlockFrastructur',
    img: TwitterOG,
  },
  facebook: {
    id: '',
    img: FacebookOG,
  },
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebook.id} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.facebook.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@BlockFratructur" />
      <meta name="twitter:site" content="@BlockFratructur" />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
