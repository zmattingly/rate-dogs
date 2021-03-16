import React from 'react'

import Layout from './src/components/Layout'

// gatsby-ssr.js is used for Server-Side Rendering (SSR)
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
