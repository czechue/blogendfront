import React from "react";
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>Such wow. Very React.</p>
  </Layout>
);

// example how to use static data in page
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`