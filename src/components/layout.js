import React from "react";
import Container from "./container";
import { Link, StaticQuery, graphql } from "gatsby";
import LayoutS from "./layout.module.scss";

const ListLink = props => (
  <li className={LayoutS.listLink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <header className={LayoutS.header}>
          <Link to="/" className={LayoutS.logoLink}>
            <h3 className={LayoutS.heading}>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul className={LayoutS.list}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
      </Container>
    )}
  />
);
