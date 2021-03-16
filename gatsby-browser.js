import React from 'react'

import Layout from './src/components/Layout'

// gatsby-browser.js allows us to hook into some of the API functions provided by Gatsby
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
