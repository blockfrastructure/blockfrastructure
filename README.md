## Installation

Install the dependencies:

### `npm install`

Run the development server:

### `npm run dev`

Production build to `/public`:

### `npm run build`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `npm run clean`


## Markdown Pages
Markdown pages go inside /markdown-pages. Make sure to add appropriate fontmatter for the graphql query. Everything inside ----

```
path: "/guides/stake-cosmos"
date: "2019-05-04"
title: "Staking with Blockfrastructure using the Lunie App"
```

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
