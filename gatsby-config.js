import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

console.log(process.env.SANITY_TOKEN)

export default {
  siteMetadata: {
    title: 'Rate Dogs',
    siteUrl: 'http://z.matting.ly/rate-dogs',
    description: 'A dog rating site!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'j66ylitl',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
