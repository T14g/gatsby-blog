import React from "react"
import {graphql, Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h4`
  color:blue;
  margin-bottom:20px;
`;

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div><h1>T14g Thoughts</h1></div>
    <h1>Hi people</h1>

    <h4>{data.allMarkdownRemark.totalCount}</h4>

    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      )
    )
  }
  </Layout>
)

//Gatsby know you wanna pass to the default component

export const query = graphql`
    query {
      file {
        id
      }
      allMarkdownRemark(sort : { fields: [frontmatter___date], order: DESC}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              date
              description
              title
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
