import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <h1>Amazing Pandas Eating Things</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
